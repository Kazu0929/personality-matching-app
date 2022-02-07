# アプリケーション名

## DEAR 性格マッチングアプリ

![top](https://user-images.githubusercontent.com/78831555/148167076-e455efbc-444d-4247-80aa-0d0fa224f8f4.png)
<br>

# アプリケーション概要

[ソーシャルスタイル理論](https://mitsucari.com/blog/social_style_theory/)をベースにした性格診断マッチングアプリです。  
同じ性格タイプのユーザーをマッチングさせる、性格の合う友人を作るアプリです。

<br>

# アプリケーション URL

https://dear-personality.netlify.app

<br>

# テストアカウント

ユーザー名:aaa@gmail.com  
パスワード:11223344

<br>

# 利用方法

テストアカウントにてログイン、または新規会員登録をします。  
マイページにて性格診断、または同じ性格タイプのユーザーとメッセージのやりとりを行うことができます。
また結果を SNS にて共有することができます。
<br>

# アプリケーション開発背景

<br>
## 友達作りのためのマッチングアプリは少ない
恋愛をしたい方向けのマッチングアプリは沢山あります。  
<br>
ですが、友達作りのためのマッチングアプリは現状少ない状況です。
<br>
## 友達を作るにあたり、性別や性的指向に制限されないようにしたい
友達作りにおいて、性別や性的指向で制限されない友達作りを支援したいと考えました。
<br>
ですので、こちらのアプリでは性別の選択項目がない形になっております。
<br>
## 趣味等による友達作りではなく、性格に合った友達作り
趣味などによる友達作りの場は沢山ありますが、性格に合った友人作りの場は少ないと思います。
<br>
趣味が合っていても性格が合わなければ友達という関係にはなりずらいと考えました。
<br>
最初に性格が合うという前提の上でコミュニケーションを図ることができれば、
<br>
関係性を築くまでの時間も削減できると考えました。
<br>

# 機能要件

https://docs.google.com/spreadsheets/d/1j_nzLZe_DniT4E3TUpqASgnLIjG73ji5-WIvYkhKDD4/edit?usp=sharing

<br>

# 機能概要

## 性格診断機能

![diagnose](https://user-images.githubusercontent.com/78831555/148166145-43e8ad0a-5dea-41ca-bc38-6df7ba345dd4.gif)
設問が１問ごとに出題され、回答すると自動で次の設問が出題されるようになっております。  
また現在の回答数及び、終了までのプログレスバーも表示しております。

<br>

## 結果表示機能

![result](https://user-images.githubusercontent.com/78831555/148166455-0641a36b-df73-4b1f-91d2-63475cafd9d6.gif)
設問を全て終えると、回答を集計、計算し自動で性格タイプを表示します。  
また性格診断を受けた全ユーザーにおいて、自分のタイプがどれぐらいの比率なのかを表示しております。

<br>

## マッチング機能

![matching](https://user-images.githubusercontent.com/78831555/148166777-18e3c166-23ee-411a-a667-8ece3f808333.gif)
マイページにて自分と同じ性格タイプのユーザー一覧を表示し、メッセージのやりとりができます。  
またメッセージの削除をすることもできます。

# データベース ER 図

https://drive.google.com/file/d/18bJRQDhOb-TsOEsiZOBya_LRbRiIo34P/view?usp=sharing

<br>

# 使用技術

## フロントエンド

HTML  
CSS
Javascript
Vue.js 2.6.12  
Nuxt.js 2.15.5  
buefy

<br>

## バックエンド

Firebase

<br>

## インフラ

Netlify
