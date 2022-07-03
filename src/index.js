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
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));
