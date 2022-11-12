

const Datas = [
    {Name:'Vaibhav', Post: 'DSA Mentor'} ,
    {Name: 'Yash' , Post: 'Web Development Mentor'}
    ];
    

    function getData () {

      setTimeout(() => {
      let output='';
      Datas.forEach((data,index) => {
          output += `<li> ${data.Name} </li>`;
        })
        document.body.innerHTML = output;
    } , 1000)  
    
};

function setData (newData) {

    setTimeout(()=> {
        Datas.push(newData);
    } , 50)
  
    
};

getData();
setData({Name:'Tushar', Post: 'SDE'});