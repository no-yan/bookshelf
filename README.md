This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Book Shelf

An app to keep track of the books you're buying.
Currently under construction.

## TODO

### eslint

-   no-vars
-   auto-import
-   import sort
-   more strict lint

### UI
#### Popoverのフォーカス
popoverの内部にtabでフォーカスすると、popover自体が消えている。
これはchakra-uiの問題で、Popoverのtriggerがhoverの際に起こる。
https://github.com/chakra-ui/chakra-ui/issues/4665

対応策:
menu, 自作


#### Color Mode 変更時のアニメーション
transitionを設定して、カラーモード変更時に動きをつけたい。
しかしいくつかの理由からうまく行っていない。
chakra uiはglobal themeは、bodyのtransitionを反映しないため、emotion/reactからグローバルにtransitionを設定する必要がある。

```
<Global style={css`
                * {
                    transition: background 0.3s ease;
                }
            `}/>
```

だが、これはchakra uiの他コンポーネントのtransitionに影響を及ぼし、文字がかすれて読めなくなる。
他に影響の出ないセレクタを考えればよいが、方法が思いつかないため着手していない。

#### カラーモード変更ボタンのアイコンが変わらない
isDarkMode ? <Dark> : <Light>としているが、これが動作しない。
useColorModeValueはhooksだが返り値はhooksではなさそうなので、動的レンダリングが機能していないのか？

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
