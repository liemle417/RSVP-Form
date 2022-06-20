const form = document.querySelector('#registrar');
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const btn = form.querySelector('button');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

//Create a filter to check who marked a checkbox "Confirmed"
filterLabel.textContent = "Hide those who haven't responded";
filterCheckbox.type = "checkbox";
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

filterCheckbox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children;
  
  if (isChecked) { //If the user checked on the checkbox "Confirmed", then they should have a class name called "responded"
    for (let i = 0; i< lis.length; i++){
      let li = lis[i];
      if(li.className === 'responded'){ //
        li.style.display = '';
        
      } else{
        li.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i< lis.length; i++){
      let li = lis[i];
      li.style.display = '';
    }
  }
})


//REGISTER A NAME
form.addEventListener('submit', function(e){
                      e.preventDefault();
                      const text = input.value;
  
                      const li = document.createElement('li');
                      
                      //CREATE a SPAN to wrap the text after li
                      const span = document.createElement('span');
                      span.textContent = text;
                      li.appendChild(span);
                      
                      //Create a checkbox "Confirmed"
                      const label = document.createElement('label');
                      label.textContent = "Confirmed";
                      const checkbox = document.createElement('input');
                      checkbox.type = 'checkbox';
                      label.appendChild(checkbox);
                      li.appendChild(label);   
  
                      //Create a button "EDIT"
                      const editButton = document.createElement('button');
                      editButton.textContent = 'Edit';
                      li.appendChild(editButton);                      
                      
                      //Create a button "Remove"
                      const button = document.createElement('button');
                      button.textContent = 'Remove';
                      li.appendChild(button);
                      
          
                      ul.appendChild(li);
                      input.value = '';
                     });


ul.addEventListener('change', function(e){
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  
  if(checked){
    listItem.className = "responded";
  } else{
    listItem.className = "";
  }
});

ul.addEventListener('click', function(e) {
  if(e.target.tagName === 'BUTTON'){
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    
    if (button.textContent === 'Remove'){ //YUP MAKE SURE the name is exactly MATCH. Remove is different than remove.
      ul.removeChild(li);
    } else if (button.textContent === 'Edit'){ //YUP MAKE SURE the name is exactly MATCH. Edit is different than edit.
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = "text";
      input.value = span.textContent;
      li.insertBefore(input, span); //Insert the new input before span
      li.removeChild(span);
      button.textContent = "Save";
    } else if (button.textContent === 'Save'){ //YUP MAKE SURE the name is exactly MATCH. Save is different than save.
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value; //Reverse it because we need to save whatever the users type
      li.insertBefore(span, input); //Insert the new span before input
      li.removeChild(input);
      button.textContent = "Edit";
    }
  }
})