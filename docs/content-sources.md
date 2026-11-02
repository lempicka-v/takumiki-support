# 掲載内容の根拠と更新方針

確認基準日：**2026年11月2日**

改修前の `main` の基準コミットSHA：`cd244046f3b99f793fb4b1b351f60fa131e90c4c`

対応する基準ツリーSHA：`25043765fa2e17a7971d071d42efe166793e31b9`。

## 確認した一次資料

| 資料 | 確認した内容 |
| --- | --- |
| [App Store・日本](https://apps.apple.com/jp/app/id6822495731) | 第一章「春場所」、世界観、機体名、15機・11舞台、戦闘操作、奥義・真奥義、各モード、音声、今後の物語 |
| [既存トップ](https://github.com/lempicka-v/takumiki-support/blob/main/index.html) | 和の工芸を題材にしたiPhone向け3Dロボット対戦、第一章「春場所」 |
| [サポート・日本語](https://github.com/lempicka-v/takumiki-support/blob/main/support/index.html) | iOS 16.0以降、オフライン、ログイン不要、広告・アプリ内課金なし、コントローラー、画面の向き、言語設定、端末内保存 |
| [サポート・英語](https://github.com/lempicka-v/takumiki-support/blob/main/support/en.html) | 日本語ページと同内容の案内 |
| [プライバシー・日本語](https://github.com/lempicka-v/takumiki-support/blob/main/privacy/index.html) | 端末内保存、独自クラウド同期なし、1.0は通信対戦・Game Center非対応 |
| [プライバシー・英語](https://github.com/lempicka-v/takumiki-support/blob/main/privacy/en.html) | 既存の英語版プライバシーへの導線 |
| [既存共通CSS](https://github.com/lempicka-v/takumiki-support/blob/main/style.css) | サポート・プライバシーの表示を保持するための構成確認 |

**掲載内容は公開中の公式説明と既存文書で確認したものであり、ゲーム本体の動作検証結果ではありません。** 特に15機・11舞台、戦闘や演出の説明を「実機で検証済み」と表現しないでください。

## 紹介に使用できる内容

- 第一章「春場所」では、見習いが親方・鉄斎から千組と沈金を託され、匠の番付に挑みます。勝利により機体を受け継ぎます。
- 公式説明には、千組・沈金・刃金・和傘・切子・藍・南部・花火・からくり・金継・凛・壱式・天匠と、謎の3機が掲載されています。
- 斬撃・射撃・ブースト・ステップ・飛行・ガード、奥義・真奥義とカットイン、対戦・稽古・図録・鑑賞が案内されています。
- 工芸の意匠を紹介する文章は、ゲーム内の性能・ステータス・正式モデル形状の説明と区別します。

## 将来構想と未確定事項

| 内容 | 掲載方針 |
| --- | --- |
| 秋場所以降の物語 | App Store上でも今後の配信予定。時期・内容は未確定として扱う |
| 海外工芸・半導体技術を題材にした機体 | 今回の制作依頼で示された将来構想。現行の収録機体・機能として数えない |
| 追加機数、追加日、各機体の性能、色違い、新しい対戦規則 | 公式の確定情報が得られるまで断定しない |
| 通信対戦・Game Center・独自クラウド同期 | 現行の案内と矛盾する機能紹介をしない |
| 字幕の対応言語数 | App Store説明文は9言語、情報欄は日本語と英語。数を断定せず「言語設定に対応」とする |
| 価格・配信状況 | 更新があり得るため、最新情報はApp Storeへ案内する |

## 素材の確認結果

改修前のリポジトリには画像・動画素材がありませんでした。当初のWeb本文取得では画像実体を取得できませんでしたが、その後、公式App Storeページをブラウザーで確認し、`picture` の `source` に掲載された高解像度画像URLから紹介画像3枚とアプリアイコンを取得しました。取得した画像の寸法と内容を確認しています。

これらは宣伝見出しを含む**App Store掲載用紹介画像**です。生の実機スクリーンショットや最新開発ビルドの動作検証として扱いません。画像の対象バージョンは確認できていません。

| 保存ファイル | 寸法 | 容量 | 取得元 |
| --- | --- | --- | --- |
| `assets/images/app-store-hero.webp` | 598 × 1300 | 57,776 bytes | [公式CDN：紹介画像](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3d/c9/28/3dc928d6-ca27-13fd-9238-08df82ea7584/01_hero.png/600x1300bb.webp) |
| `assets/images/app-store-ougi.webp` | 598 × 1300 | 57,600 bytes | [公式CDN：戦闘紹介](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/59/e7/20/59e72084-62d6-692d-759c-3f505df303c3/02_ougi.png/600x1300bb.webp) |
| `assets/images/app-store-shin-ougi.webp` | 598 × 1300 | 64,012 bytes | [公式CDN：真奥義紹介](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/e2/4c/0ce24c37-131a-4071-f9f7-ad49bbd5af9d/03_shin.png/600x1300bb.webp) |
| `assets/images/app-icon.webp` | 200 × 200 | 18,952 bytes | [公式CDN：アプリアイコン](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/99/5d/94/995d94ba-cc38-ec07-cfff-346a1422998a/Placeholder.mill/200x200Icon.ApSiOS01-75.webp) |

取得・確認日はいずれも2026年11月2日です。元ファイル名やURL内の数値ではなく、取得したファイルの実寸を上表に記録しています。

紹介画像はメインビジュアル、拡大リンク付きギャラリー、OG画像に使用しています。機体紹介6枚と背景装飾のSVGは引き続きWebページ用の工芸意匠として明示し、実際の機体モデルと区別します。

過去に生成した紹介HTMLは存在を確認できたものの、その取得経路が利用できなかったため不採用です。動画や個別機体の正式レンダーは今回取得していません。[画像更新手順](media-guide.md)に従い、確認した素材だけを追加・差し替えしてください。

