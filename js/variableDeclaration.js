/**
 * 変数宣言の説明用js
 */
// ---------------------------------------------------------------------------
// var、let、constは再宣言、再代入、スコープの違いが主な違い
// ---------------------------------------------------------------------------
// ★宣言
var varSample = "var";
let letSample = "let";
const constSample = "const";

// ★再宣言
var varSample = "var"; // 再代入出来るのがバグの温床となる。非推奨理由の一つ
// let letSample = "let"; ←シンタックスエラー（コメントを外すとエラーになる）
// const constSample = "const"; ←シンタックスエラー（コメントを外すとエラーになる）

// ★再代入
varSample = "var値の変更";
letSample = "let値の変更";
constSample = "const値の変更"; // ←シンタックスエラーにはならないが実行エラーになる（実行するとTypeErrorが発生する）

// ★constのプロパティー変更
const propChange = { name: "AAA", age: "20" };
propChange.name = "BBB"; // ←再代入は出来ないがプロパティーの変更は可能

// ★スコープ
if (true) {
    var inBlockVar = "ブロック内のvar";
    let inBlockLet = "ブロック内のlet";
    const inBlockConst = "ブロック内のconst";
    console.log(inBlockVar);
    console.log(inBlockLet);
    console.log(inBlockConst);
}
console.log(inBlockVar); // ←関数スコープのためエラーにならない
console.log(inBlockLet); // ←ブロック外からのアクセスのため実行するとReferenceErrorが発生する
console.log(inBlockConst); // ←ブロック外からのアクセスのため実行するとReferenceErrorが発生する

// ---------------------------------------------------------------------------
// 以下、詳細のため参考。勉強会では取り上げないため自己学習推奨
// ---------------------------------------------------------------------------
// ★Hosting（巻き上げ） ※var特有の動き
console.log(a);
var a = 10;
// ↑変数宣言より前に変数を使用するとjavaだとシンタックスエラーになるが、jsではエラーにならない
// 
// jsが実行する前に変数の宣言だけ先頭に移動する
// var a; ←宣言が巻き上がる
// console.log(a);　←エラーにならずundefined（未定義）がコンソールに出力される
// var a = 10; ←代入は巻き上がらない

// let、constの場合は巻き上げされないため、実行エラーになる
// 詳しくはHostingや一時的デッドゾーン（Temporal Dead Zone: TDZ）などを検索
console.log(b);
let b = "10"; // ←letの場合巻き上げされない

console.log(c);
const c = "10"; // ←constの場合巻き上げされない

// この違いもvar非推奨理由の一つ