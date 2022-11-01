
let Student = {

  name:'Tushar',

  age: 20,

}



function printAge () {

  console.log(this.age);

}



let result = printAge.bind(Student);



result();