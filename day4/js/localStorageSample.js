/**
 * localStorageについての説明用js
 */
// ---------------------------------------------------------------------------
// localStorage操作の基本
// ---------------------------------------------------------------------------
// localStorageにデータを保存
window.localStorage.setItem("name","太郎");
// windowは省略可能なので、以下の書き方でもOK
// localStorage.setItem("name","太郎");

// localStorageからデータを取得
const name = localStorage.getItem("name");
console.log(name);

// localStorageからデータを削除
localStorage.removeItem("name");


// ---------------------------------------------------------------------------
// 構造データの保存／利用方法
// ---------------------------------------------------------------------------
// サンプルオブジェクト
const sampleObj = {
  name: "Taro",
  age: 20
};

// JSON形式に変換をしてlocalStorageに保存
localStorage.setItem("user", JSON.stringify(user));

// 利用するときはデータを取り出してオブジェクトに変換
const user = JSON.parse(data);
