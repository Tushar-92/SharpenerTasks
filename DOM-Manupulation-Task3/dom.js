//Task-3

let headerTitle = document.getElementById("header-title");
headerTitle.style.borderBottom = "solid 4px #000 ";

let AddItem = document.getElementsByClassName("title");
AddItem[0].style.color = "Green";
AddItem[0].style.fontWeight = "bold";

//Task-4

// let item = document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor = "Green";

// for(let i=0;i<item.length;i++)
// {
//     item[i].style.fontWeight = "bold";
// }

//Task-5

let tagnm = document.getElementsByTagName('li');

tagnm[4].style.backgroundColor = "Yellow";

for(let i=0;i<tagnm.length;i++)
{
    tagnm[i].style.fontWeight = "bold";
}
