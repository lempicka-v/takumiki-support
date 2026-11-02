# 匠機演武 / TAKUMIKI ENBU

iPhone向け3Dロボット対戦ゲーム『匠機演武』の紹介・サポートサイトです。HTML・CSS・JavaScriptのみで動作し、ビルドやパッケージのインストールは不要です。

## 構成

| パス | 用途 |
| --- | --- |
| `index.html` | 日本語のゲーム紹介ページ |
| `assets/showcase.css` | 紹介ページ専用のスタイル |
| `assets/showcase.js` | 紹介ページの操作 |
| `assets/images/` | App Store掲載用紹介画像3枚と公式アプリアイコン |
| `assets/art/` | 差し替え可能な工芸意匠のSVG |
| `support/`、`support/en.html` | 既存の日本語・英語サポート |
| `privacy/`、`privacy/en.html` | 既存の日本語・英語プライバシーポリシー |
| `style.css` | 既存サポート・プライバシー用の共通スタイル |
| `.nojekyll` | GitHub Pagesで静的ファイルをそのまま配信する設定 |

外部フォント、アクセス解析、外部JavaScriptライブラリは使用しません。紹介ページのスタイルを分離し、サポート・プライバシーの本文と既存URLを保持します。

## ローカルで確認

リポジトリのルートで次を実行します。

```sh
python3 -m http.server 8080
```

ブラウザーで `http://localhost:8080/` を開きます。終了は `Ctrl+C` です。

変更後は、スマートフォン幅とデスクトップ幅で文字・画像・メニューを確認してください。ページ内リンク、キーボード操作、ギャラリーの拡大リンクとスマートフォンでの横スクロール、App Storeへのリンク、サポートとプライバシーの両言語ページも確認します。JavaScriptを無効にしても主要な紹介内容とリンクを読める構成を維持してください。

## 内容・画像の更新

- 掲載内容の根拠と未確定情報の扱い：[docs/content-sources.md](docs/content-sources.md)
- 画像の差し替え方法：[docs/media-guide.md](docs/media-guide.md)

確認済みの公開案内と、海外工芸・半導体技術などの将来構想を混在させないでください。

メインビジュアルとギャラリーには、公式App Storeから取得した**掲載用紹介画像**を使用しています。宣伝見出しを含む画像のため、生の実機スクリーンショットとは区別します。画像のゲーム版数は未確認です。機体紹介の6枚のSVGと背景装飾は工芸意匠で、実際の機体モデルを示していません。

## 公開

既存のGitHub Pagesは `main` ブランチのルートを公開する構成です。紹介ページもその構成で配信でき、別のホスティング設定やビルドは不要です。

PRを作成しただけでは公開サイトは更新されません。変更が `main` にマージされ、GitHub Pagesのデプロイが成功すると反映されます。反映後は公開URLとサポート・プライバシーの導線を確認してください。

- [公開サイト](https://lempicka-v.github.io/takumiki-support/)
- [GitHubリポジトリ](https://github.com/lempicka-v/takumiki-support)

