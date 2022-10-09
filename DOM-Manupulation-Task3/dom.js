// Task-6
// querySelectorAll //

let items = document.querySelectorAll('li');
items[1].style.color = "green";

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = "Green";
}