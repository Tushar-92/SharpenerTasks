let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//------------------------------------------------------//

//Creating new input element so that we as Item Dessciption in it.
let descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.className = "form-control mr-2";
descriptionInput.id = 'item-description';

//Inserting this input element before the Submit button i.e Appending it to <form> but before Submit Button
form.insertBefore(descriptionInput,form.children[1]);

//------------------------------------------------------//


//Form Event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

function addItem (e) {
  e.preventDefault();

  //Get inpt value
  let newItem = document.getElementById('item').value ;
  let itsDescription = document.getElementById('item-description').value; //Ye dusra wala input element i.e Description wale k input k liye hai
  
  //Create new list i.e li element
  let newli = document.createElement('li');

  //Adding class to new li element so that usi class me add ho
  newli.className = 'list-group-item';

  //Adding textnode with the input value to the new list i.e new li element me
  newli.appendChild(document.createTextNode(newItem));
  newli.appendChild(document.createTextNode(' '+ itsDescription)); //Ye dusra wala input element i.e Description wale k input k liye hai

  //Now adding X Button to the created list
  let deleteBtn = document.createElement('button');

  //Adding class to Delete Button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  
  //Adding X textnode to the button 
  deleteBtn.appendChild(document.createTextNode('X'));

  //Now append this X button to the new list i.e new li element me
  newli.appendChild(deleteBtn);

  //Now appending this new list with delete button to our Items Lists
  itemList.appendChild(newli);

   
}

// Remove item Function
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


// Filter Items from both the text inputs 
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var descriptionName = item.childNodes[1].textContent; //since description becomes second child in the list.
    if(itemName.toLowerCase().indexOf(text) != -1  || descriptionName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



