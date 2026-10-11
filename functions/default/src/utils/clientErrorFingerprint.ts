import { createHash } from 'crypto'
import type { ClientErrorReportRequest } from '@shokujii/common/apis/clientError.js'

/**
 * 検証済みフィールドから fingerprint を再計算する（クライアント送信値は信頼しない）。
 * クライアント側 computeFingerprint と同一ロジック。
 */
const STANDALONE_FAILED_TO_FETCH = 'Failed to fetch'

/**
 * 単体 Failed to fetch は、同じ route でもユーザーごとにログを残す。
 * それ以外は従来どおり fingerprint だけで 5 分間まとめる。
 */
export function clientErrorDedupKey(fingerprint: string, message: string, userId: string | undefined): string {
  if (message === STANDALONE_FAILED_TO_FETCH) {
    return `${fingerprint}\0${userId ?? ''}`
  }
  return fingerprint
}

export function computeServerFingerprint(data: ClientErrorReportRequest): string {
  const parts = [data.app, data.error_type, data.message.slice(0, 200), data.route, data.document_path ?? '']
  if (data.zod_issues != null && data.zod_issues.length > 0) {
    const first = data.zod_issues[0]
    parts.push(JSON.stringify(first.path), first.code)
  }
  return createHash('sha256').update(parts.join('\0')).digest('hex')
}
