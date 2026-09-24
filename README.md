# cash-maker

トラック運送業界の知識系ブログ「トラック運送ナビ」。[Astro](https://astro.build/) で構築した静的サイトで、GitHub Pages にデプロイします。

## 開発

```sh
npm install
npm run dev
```

`http://localhost:4321/cash-maker/` でプレビューできます。

## 記事の追加

`src/content/blog/` に Markdown ファイルを追加してください。フロントマターの形式:

```md
---
title: "記事タイトル"
description: "記事の概要"
pubDate: 2026-02-01
tags: ["タグ1", "タグ2"]
---

本文...
```

## アフィリエイトリンクの挿入

記事本文中で `AffiliateLink` コンポーネントを使うと、PR表記付きのリンクボックスを挿入できます(`.astro` ページ内、または MDX 化した記事内で利用可能)。

```astro
<AffiliateLink
  title="商品名"
  description="紹介文"
  href="https://example.com/affiliate-link"
/>
```

## デプロイ

`main` ブランチに push すると、GitHub Actions (`.github/workflows/deploy.yml`) が自動でビルドし、GitHub Pages に公開します。

初回のみ、リポジトリの Settings → Pages → Source を「GitHub Actions」に設定してください。
