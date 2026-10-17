import type { ManualBlock } from './types.js'

/** shokujii の紹介サイト */
export const SHOKUJII_ABOUT_URL = 'https://about.shokujii.jp/'

/** ミッション。主催者向け・飲食店向けのどちらのマニュアルでも同じ文言で載せる */
export const MISSION_QUOTE: ManualBlock = {
  type: 'quote',
  text: '孤食を減らし、団欒を増やす',
  caption: '食事でつながる「shokujii」',
}

/** サービスが生まれた考え方（ホーム画面・紹介ページの文言に合わせる） */
export const MISSION_ORIGIN: ManualBlock = {
  type: 'paragraph',
  text: '食事でつながる「shokujii」は、普段の食事を、コミュニケーションや出会いの場に変えたいと考えて生まれたサービスです。',
}
