
let obj = {

  name: 'Tushar',

}



function greet (msg) {

  return msg+' '+this.name;

}



console.log(greet.call(obj,'Hii'));

console.log(greet.call(obj,'Welcome'));

