"""data/*.csv から 02_機能マトリクス.md を生成する(標準ライブラリのみ)。

使い方(リポジトリルートから):
    python3 -I documents/14_競合調査/30_機能比較/build_matrix.py

機能の定義は 01_機能タクソノミー.md の表(| ID | 機能 | ✅の条件 |)を正本とする。
手で 02_機能マトリクス.md を編集せず、data/*.csv を直して再生成する。
"""
import csv
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).resolve().parent
TAXONOMY = HERE / '01_機能タクソノミー.md'
DATA = HERE / 'data'
OUT = HERE / '02_機能マトリクス.md'

SERVICES = [
    ('eventbrite', 'Eventbrite'), ('meetup', 'Meetup'), ('dice', 'DICE'), ('ticket-tailor', 'Ticket Tailor'),
    ('luma', 'Luma'), ('partiful', 'Partiful'), ('posh', 'Posh'),
    ('peatix', 'Peatix'), ('doorkeeper', 'Doorkeeper'), ('connpass', 'connpass'),
    ('kokucheese', 'こくちーず'), ('street-academy', 'ストアカ'),
    ('timeleft', 'Timeleft'), ('eatwith', 'Eatwith'), ('pie', 'Pie'),
]
SELF = ('shokujii', '自社')
VERDICTS = ('✅', '△', '❌', '？')
EVIDENCE = ('公式', '実機', '二次', 'なし')


def parse_taxonomy():
    cats, feats = [], []
    cur = None
    for line in TAXONOMY.read_text(encoding='utf-8').split('\n'):
        m = re.match(r'^### ([A-Z]{2}) (.+)$', line)
        if m:
            cur = (m.group(1), m.group(2)); cats.append(cur); continue
        m = re.match(r'^\| ([A-Z]{2}\d{2}) \| (.+?) \| (.+?) \|$', line)
        if m and cur:
            feats.append((m.group(1), m.group(2).strip(), cur[0]))
    return cats, feats


def load(slug, ids):
    path = DATA / f'{slug}.csv'
    rows = list(csv.DictReader(path.open(encoding='utf-8', newline='')))
    errs = []
    got = [r['feature_id'] for r in rows]
    if got != ids:
        errs.append(f'{slug}: feature_id が一致しない(行数 {len(got)} / 期待 {len(ids)})')
    for r in rows:
        if r['verdict'] not in VERDICTS:
            errs.append(f"{slug} {r['feature_id']}: 不正な verdict {r['verdict']!r}")
        if r['evidence_level'] not in EVIDENCE:
            errs.append(f"{slug} {r['feature_id']}: 不正な evidence_level {r['evidence_level']!r}")
    return {r['feature_id']: r for r in rows}, errs


def main():
    cats, feats = parse_taxonomy()
    ids = [f[0] for f in feats]
    data, errors = {}, []
    for slug, _ in SERVICES + [SELF]:
        d, e = load(slug, ids); data[slug] = d; errors += e
    if errors:
        print('\n'.join(errors)); sys.exit(1)

    comp = [s for s, _ in SERVICES]
    v = lambda slug, fid: data[slug][fid]['verdict']
    out = []
    w = out.append
    w('# 機能マトリクス:サービス別の機能一覧')
    w('')
    w('> 関連: [README](../00_README.md) / [機能タクソノミー](./01_機能タクソノミー.md) / [有力機能の評価](./03_有力機能の評価.md)')
    w('> このファイルは `build_matrix.py` が `data/*.csv` から生成する。**手で編集しない**(CSV を直して再生成する)。')
    w('')
    w('調査日: 2026-10-11。競合15サービス × 77機能 + 自社(Shokujii)。判定の定義と根拠レベルは [機能タクソノミー](./01_機能タクソノミー.md) を参照。')
    w('')
    w('**読み方:** ✅=あり、△=一部・有料・条件付き、❌=ないと確認、？=確認できず(**非対応を意味しない**)。自社は ✅=コードで実装を確認、△=一部実装または計画あり、❌=実装も仕様もない。')
    w('')
    w('## 判定の注意(必ず読む)')
    w('')
    w('- **？は「確認できなかった」であり、機能がないことではない。** 特に Pie は公式サイトが SPA で本文を取得できず、？が多い。')
    w('- **確認の深さがサービスにより違う。** 主催者の管理画面(ログイン内)は多くのサービスで未確認のため、OP 系は過小評価の可能性がある。ストアカ・こくちーずは公式ヘルプが 403 で、検索結果の要約に頼った項目がある(CSV の note に記載)。')
    w('- **二次情報の扱いが担当により異なる。** 食事ソーシャル系(Timeleft・Eatwith・Pie)は二次情報のみのものを △ にしたが、他の担当は二次情報を ✅/△ にして note に「二次」と書いた。厳密に比べるときは `evidence_level` が「公式」「実機」の行だけを見る。')
    w('- **Timeleft の ❌ 25件のうち19件は「モデル上なし」。** 主催者向け機能など、Timeleft が自社でイベントを開催する仕組みから判断したもので、公式に不在が明記されたものではない。')
    w('- **自社の ✅ は `origin/main`(v2.14.0)のコード確認に基づく。** 実際のデプロイ状態や、Firestore 側のデータ(例: 運営の公式イベント実績)は確認していない。判断が分かれる境界ケースが15件あり、厳密に読むと ✅ が35件程度になる(詳細は調査ノート原本の自社ノート)。')
    w('- **数値・料金などの根拠は CSV の `evidence_url` と `note` を参照。** 公式ページを直接読めず検索結果の要約に頼ったものは note に明記している。')
    w('')

    # 判定の内訳
    w('## サービス別の判定内訳')
    w('')
    w('| サービス | ✅ | △ | ❌ | ？ | 確認率(？以外) |')
    w('| :-- | --: | --: | --: | --: | --: |')
    for slug, label in SERVICES + [SELF]:
        c = {k: 0 for k in VERDICTS}
        for fid in ids:
            c[v(slug, fid)] += 1
        w(f"| {label} | {c['✅']} | {c['△']} | {c['❌']} | {c['？']} | {100 * (77 - c['？']) // 77}% |")
    w('')

    # 分類別 ✅ 数
    w('## 分類別の ✅ 数')
    w('')
    head = '| 分類(機能数) | ' + ' | '.join(l for _, l in SERVICES) + f' | {SELF[1]} |'
    w(head)
    w('| :-- | ' + ' | '.join(['--:'] * (len(SERVICES) + 1)) + ' |')
    for code, name in cats:
        fids = [f[0] for f in feats if f[2] == code]
        cells = [str(sum(1 for fid in fids if v(s, fid) == '✅')) for s in comp + [SELF[0]]]
        w(f'| {code} {name}({len(fids)}) | ' + ' | '.join(cells) + ' |')
    w('')

    # マトリクス本体
    w('## 機能マトリクス')
    w('')
    w('「競合✅」は競合15サービスのうち ✅ の数、「競合△」は △ の数。')
    w('')
    for code, name in cats:
        w(f'### {code} {name}')
        w('')
        w('| ID | 機能 | 競合✅ | 競合△ | ' + SELF[1] + ' | ' + ' | '.join(l for _, l in SERVICES) + ' |')
        w('| :-- | :-- | --: | --: | :-: | ' + ' | '.join([':-:'] * len(SERVICES)) + ' |')
        for fid, fname, c in feats:
            if c != code:
                continue
            ny = sum(1 for s in comp if v(s, fid) == '✅')
            nt = sum(1 for s in comp if v(s, fid) == '△')
            w(f'| {fid} | {fname} | {ny} | {nt} | {v(SELF[0], fid)} | ' + ' | '.join(v(s, fid) for s in comp) + ' |')
        w('')

    # 自動集計: 標準装備・自社の穴・自社の強み
    def ny(fid): return sum(1 for s in comp if v(s, fid) == '✅')
    def nyt(fid): return sum(1 for s in comp if v(s, fid) in ('✅', '△'))
    name_of = {f[0]: f[1] for f in feats}
    w('## 自動集計(判定値の集計のみ。成長への効きは [有力機能の評価](./03_有力機能の評価.md) で扱う)')
    w('')
    w('### 競合の過半数(8サービス以上)が ✅ の機能(標準装備に近い)')
    w('')
    w('| ID | 機能 | 競合✅ | 自社 |')
    w('| :-- | :-- | --: | :-: |')
    for fid in ids:
        if ny(fid) >= 8:
            w(f'| {fid} | {name_of[fid]} | {ny(fid)} | {v(SELF[0], fid)} |')
    w('')
    w('### 自社の穴の候補:競合の4サービス以上が ✅ なのに、自社が ✅ でない機能')
    w('')
    w('| ID | 機能 | 競合✅ | 競合△ | 自社 |')
    w('| :-- | :-- | --: | --: | :-: |')
    for fid in sorted(ids, key=lambda f: -ny(f)):
        if ny(fid) >= 4 and v(SELF[0], fid) != '✅':
            nt = sum(1 for s in comp if v(s, fid) == '△')
            w(f'| {fid} | {name_of[fid]} | {ny(fid)} | {nt} | {v(SELF[0], fid)} |')
    w('')
    w('### 自社の強み候補:自社が ✅ で、競合の ✅ が3サービス以下の機能')
    w('')
    w('| ID | 機能 | 競合✅ | 競合△ |')
    w('| :-- | :-- | --: | --: |')
    for fid in ids:
        if v(SELF[0], fid) == '✅' and ny(fid) <= 3:
            nt = sum(1 for s in comp if v(s, fid) == '△')
            w(f'| {fid} | {name_of[fid]} | {ny(fid)} | {nt} |')
    w('')
    OUT.write_text('\n'.join(out), encoding='utf-8')
    print(f'wrote {OUT} ({len(out)} lines)')


if __name__ == '__main__':
    main()
