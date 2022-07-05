/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// var val2 = "let変数を上書き";
// console.log(val2);

// constで定義した文字列や値は変更不可能
// const val3 = "const変数";
// console.log(val3);

// //val3 = "const変数を上書き";

// const val3 = "aa";

// constで定義したオブジェクトは変更可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// console.log(val4);

// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いる。バッククォートで括る。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// 上でも書けるし、あるいは・・・
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数を使った宣言
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// // アロー関数を使った宣言。1行ならreturn省略可能
// const func2_1 = (str) => str;
// console.log(func2_1("func2_1です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(9, 4));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。.....`;
// console.log(message2);

// const myProfile = ["じぇけぇ", 28];
// const message3 = `名前は${myProfile[0]}です。..年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [n, a] = myProfile;
// const message4 = `名前は${n}です。.........年齢は${a}です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは! ${name}さん`);
// sayHello();
// sayHello("Akira Matsumoto");

/**
 * スプレッド構文 ... ドット3個
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// // 配列の中身を順番に展開
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// // 同じ結果
// sumFunc(...arr1);

// まとめる。展開の逆。
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// const [...arr3_2] = arr2;
// console.log(arr3_2);

// 配列のコピー、結合。ちゃんと値渡しされる。
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
// 下のようにしては、参照渡しになってしまう。
const arr8 = arr4;
console.log(arr4);
arr8[0] = 5;
