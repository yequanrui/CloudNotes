/*
题目描述
给定的 js 代码中存在全局变量，请修复
*/

//myObject 变量声明未加var,会自动变成全局变量
function globals() {
   myObject = {
     name : 'Jory'
   };

   return myObject;
}
//修复:加上var
function globals() {
  var myObject = {
    name : 'Jory'
  };

  return myObject;
}