


let student1 = {

  name: 'Tushar',

  grade: 5,

  displayInfo: function () {

    console.log(this.name + ' studies in grade ' + this.grade);

  }

}



let student2 = {

  name: 'Ankit',

  grade: 7,



}



let result = student1.displayInfo.bind(student2);



result();