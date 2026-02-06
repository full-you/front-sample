/**
 * 比較演算子についての説明用js
 */
// ---------------------------------------------------------------------------
// 等価演算子
// データ型が異なる比較は同じ型になるように暗黙的に変換される
// ---------------------------------------------------------------------------
console.log(1 == 1); // true
console.log('apple' == 'apple'); // true
console.log('apple' == 'orange'); // false

// 文字列は数値に変換される
console.log(1 == '1'); // true

// '01'と'1'
console.log(1 == '01'); // true
console.log(1 == 01); // true

// trueは1に変換される
console.log(0 == true); // false
console.log(1 == true); // true

// falseは0に変換される
console.log(0 == false); // true
console.log(1 == false); // false

// ---------------------------------------------------------------------------
// 厳密等価演算子
// 同じ値かつ同じ型である場合true、それ以外はfalseを返却する
// ---------------------------------------------------------------------------
console.log(1 === 1); // true
console.log(1 === '1'); // false
console.log('apple' === 'apple'); // true
console.log('apple' === 'orange'); // false
