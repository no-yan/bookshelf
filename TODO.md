# TODO

This project is in its very early stages, so we will make sure it works on a small level.
Currently I am aiming to generate a custom config file with the button component.

## feature

-   [ ] Customizable Component Viewer
    -   [ ] Only a few components
    -   [ ] All
        -   [ ] Support multi parts component
-   [ ] Theme Changeable
    -   [ ] without global theme
    -   [ ] with global theme
-   [ ] Edit with GUI
    -   [ ] Restricted options of Select
    -   [ ] All available options
-   [ ] Detail View
-   [ ] Variant View
-   [ ] Color Scheme Changeable
-   [ ] Component Overview
-   [ ] Theme generate
-   [ ] Security Aware
-   [ ] Theme Sharable
    -   [ ] URL
    -   [ ] KV Store
    -   [ ] Viewer

## lint

-   [x] check jsx a11y working. earn how it works might help?
    -   [x] seems plugin:@next/next/recommended not working. (edit: Not so correct)
    -   [x] by this reason, I use extends:['next'] instead.
-   [ ] add rules
    -   [x] ~~airbnb~~ Meaningless errors and slow effective speed
    -   [ ] prefer-arrow

## test

-   [ ] Learn How to Test
    -   [ ] Think which ones should be tested.
-   [ ] Add Storybook

rtl で computed layout のテストは難しく、時間もかかる。Storybook は反面自動化ができない。回帰テストは自動化できる反面、開発初期段階において導入するとスピードが下がる。

-   investigate best practice of testing React.

-   size が反映されない問題
    chakra.div の問題かと疑ったが、普通に<Button>でも同じことが起こる。why?

    -   更新が反映されていない可能性

        -   そうなら bg が反映されないはず
        -   関数を見る。
        -   omitThemingProps で"styleConfig", "size", "variant", "colorScheme"を除外している。
        -   https://github.com/chakra-ui/chakra-ui/blob/3adda59f95986abfc7b4d97a855900270cde2d3c/packages/system/src/system.utils.ts#L73
        -   解決策：先に処理されるべき props を styleConfig で変換してしまう。

    -   why? button に bg とかを設定する理由がわかっていない。styleConfig で渡される値を調べる。

### Customizable Component Viewer

コンポーネントの基本形はできたので、これをもっと便利にする。
最初に実装する base props を決定する。baseTheme の default props を見て決める。

-   color
    -   color picker
    -   それぞれの色で表示されたラジオボタン 色ごとに表示 => インターフェースは？
-   px
-   fontWeight
-   h
-   w
-   fontSize
-   bg
-   bowShadow

TODO

-   UI Pattern について知る
-   必要となるシナリオを考える
    -   デザイナーとの協業を考えると、(デザイナーがこれを使ってデザインシステムを chakra Theme として出力することを考えると)コンポーネント単位でなく、ページデザインを記述する必要がある？
        -   その場合 iframe かなにかを導入する必要がある。
-   動きの導線について考える
-   ラジオボタン、スライダー、ピッカー、適切なものを選択する
    -   figma 等デザイナーが採用しているものを参照する
