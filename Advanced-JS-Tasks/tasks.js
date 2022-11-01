

let obj = {

  num:5,

}

let arr=[1,2,3];

function multiplyWith (x,y,z) {

  return ((this.num)*x*y*z);

 }

console.log(multiplyWith.apply(obj,arr));