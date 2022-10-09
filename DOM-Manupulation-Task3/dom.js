let headerTitle = document.getElementById("header-title");
headerTitle.style.borderBottom = "solid 4px #000 ";

let AddItem = document.getElementsByClassName("title");
AddItem[0].style.color = "Green";
AddItem[0].style.fontWeight = "bold";

let item = document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor = "Green";

for(let i=0;i<item.length;i++)
{
    item[i].style.fontWeight = "bold";
}
