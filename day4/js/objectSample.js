/**
 * オブジェクトについての説明用js
 */
// 初期化
const person = { name: "太郎", age: 25 };

// 値の取得
const name = person.name;
console.log(name);

// 値の編集（上書き更新）
person.age = 26;
console.log(person.age);

// 値の追加（要素の追加）
// keyとvalueをセットして追加できる
person.gender = "men"; 
console.log(person.gender);

// 値の削除（要素の削除)
delete person.gender;
console.log(person.gender);

// javaのMapと違って、異なるデータ型でも同じオブジェクトに格納可能
const user = {
  name: "田中",                  // string
  age: 25,                       // number
  isAdmin: false,                // boolean
  hobbies: ["読書", "映画鑑賞"], // array
  address: {                     // object
    city: "東京"
  }
};

// オブジェクトに関数を設定することもできる
user.alertmessage = function(){
    alert("オブジェクトに設定した関数が実行された！");
}
user.alertmessage();