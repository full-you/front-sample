/**
 * データ型についての説明用js
 */
// ---------------------------------------------------------------------------
// 動的型付け
// ---------------------------------------------------------------------------
// 代入されるデータの種類によって型が自動で決まる
let a = "str"; // String型の値を代入
console.log(typeof a); // String型が表示される
a = 12;        // Number型の値を代入
console.log(typeof a); // Number型が表示される
a = false;     // Boolean型の値を代入
console.log(typeof a); // Boolean型が表示される

// ---------------------------------------------------------------------------
// プリミティブ型（基本型）
// ---------------------------------------------------------------------------
// ★number：数値
let num = 10;

// ★bigint：数値　⇒Numberより大きい値を保持
// nを付ける or BigIntの型変換用関数を使用
let big1 = 9007199254740991n;
let big2 = BigInt(9007199254740991);

// ★string：文字列
// ダブルクォーテーション or シングルクォーテーション or バッククォートで値を囲う
let str1 = "sample";
let str2 = 'sample';
let str3 = `sample`;

// ★boolean：真偽値　⇒true/false
let bool1 = true;
let bool2 = false;

// ★undefined：未定義　⇒変数を宣言したけど値が入ってない状態
// 何も値が設定されていない状態。変数宣言したけどまだ値が割り当てられていないとき、自動的にundefinedになる
let undef;

// ★null：空オブジェクト　⇒意図的に値がない状態を表すために使う
// 意図的に「値がない」状態を表すために使う。undefinedと違って、開発者が設定する。
let data = null;

// ★symbol：シンボル　⇒一意（ユニーク）な識別子を作るためのデータ型
const sym1 = Symbol("aaa");
const sym2 = Symbol("aaa");
console.console.log(sym1 == sym2); // キーは同じでも異なるシンボルのためfalseが出力される
// 使いどころ例
const test = {
    [sym1]: "value" // オブジェクトのプロパティーキーとして使うことで一意性を担保
};
console.log(obj[sym1]); // "value"が出力

// ---------------------------------------------------------------------------
// オブジェクト型（参照型）
// ---------------------------------------------------------------------------
// ★Object：オブジェクト
let obj = { name: "aaa", age: 25 };

// ★Array：配列
let arr = [1, 2, 3, 4, 5];

// ★Date：日付
let now = new Date(); // 現在の日時
let date1 = new Date("2025-12-25T10:30:00"); // ISO 8601形式で日付指定
let date2 = new Date(2025, 12, 25, 10, 30, 0); // 数字指定 new Date(年,月,日,時,分,秒,ミリ秒)number or stringで指定

// ★RegExp：正規表現 下記例はパターン: "abc", フラグ: "i" ※abcが含まれるか、大文字小文字を無視して比較
let regex1 = /abc/i; // パターン: "abc", フラグ: "i"
let regex2 = new RegExp("abc", "i");
// 使いどころ例
console.log(regex1.test("Abc")); // true
console.log(regex2.test("abac")); // false

// ★Function：関数
let func = function hello(name) { console.log(`こんにちは${name}さん`) }; // 【参考】バッククォートを使うことで変数を展開できる（バインドされる）
func("test");

