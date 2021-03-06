This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Book Shelf

An app to keep track of the books you're buying.
Currently under construction.

## TODO

### eslint

-   [x] no-vars
-   [x] auto-import
-   import sort
-   more strict lint

### tsconfig

-   [ ] fix {jsx:'react-jsx'} [see detail](https://github.com/microsoft/TypeScript/pull/46368)

### UI

#### Popover のフォーカス

popover の内部に tab でフォーカスすると、popover 自体が消えている。
これは chakra-ui の問題で、Popover の trigger が hover の際に起こる。
https://github.com/chakra-ui/chakra-ui/issues/4665

対応策:
menu, 自作

#### Color Mode 変更時のアニメーション

transition を設定して、カラーモード変更時に動きをつけたい。
しかしいくつかの理由からうまく行っていない。
chakra ui は global theme は、body の transition を反映しないため、emotion/react からグローバルに transition を設定する必要がある。

```
<Global style={css`
                * {
                    transition: background 0.3s ease;
                }
            `}/>
```

だが、これは他コンポーネントの transition に影響を及ぼし、文字がかすれて読めなくなる。
他に影響の出ないセレクタを考えればよいが、方法が思いつかないため着手していない。
=> 各コンポーネントで設定したものを打ち消してしまうので、transition を設定しているものがおかしくなる。
=> why? 詳細度は同じではないか

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
