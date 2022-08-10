/*function a (){
  console.log('A');
}*/

var a = function(){
  console.log('A');
} //함수가 값이다.


function slowfunc(callback){
  callback();
}

slowfunc(a);
