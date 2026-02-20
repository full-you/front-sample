/**
 * 配列についての説明用js
 */
// 初期化
const array = [1, 2, 3, 1];　// 初期化は[]を使う

// 値の追加
array.push(4);  // 最後に追加
array.unshift (0);  // 最初に追加

// 値の削除
array.pop();  // 最後の要素を削除
array.shift();  // 最初の要素を削除

// 値の取得
const val = array[0] // 引数に指定したindexの値を取得⇒1が出力される
console.log(val);

const len = array.length;  // 配列の数を取得⇒4が出力される
console.log(len);

const inof = array.indexOf(1) // 配列を最初（0番目）から見て、引数の値が何番目にあるかを返す⇒0が出力される
console.log(inof);

const lain = array.lastIndexOf(1) // 配列を最初（0番目）から見て、引数の値が何番目にあるかを返す⇒3が出力される
console.log(lain);

// javaと違って異なるデータ型でも同じ配列に格納可能
// 正直使わないと思う・・・
const hoge = [
  1,            // number
  "hello",      // string
  true,         // boolean
  { name: "A" },// object
  [1, 2, 3]     // array
];