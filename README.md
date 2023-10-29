### 環境構築

#### `Vercel` との接続

`vercel` との接続や DB との接続などは、 `vercel` が提供している `cli` を利用する。

```bash
yarn global add vercel
```

パスを通す。

```bash
echo 'export PATH="$HOME/.yarn/bin:$PATH"' >> ~/.bashrc
```

TODO: Vercel プロジェクトとの接続方法を記載する。

### `Vercel Postgres` との接続

`Vercel Postgres` との接続は、 `vercel` が提供している `cli` を利用する。

`Vercel Postgres` との接続に必要な環境変数を取得する。

```bash
vercel env pull .env
```
