// Select the form, input field, and list elements
const form = document.querySelector('#form');
const input = document.querySelector('#item-input');
const list = document.querySelector('#list');

// Add an event listener to handle form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value from the input field
  const itemText = input.value.trim();

  // Check if the input is not empty
  if (itemText !== '') {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Add the text content to the list item
    listItem.textContent = itemText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Add trash icon

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
      listItem.remove(); // Remove the list item
    });

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the new list item to the list
    list.appendChild(listItem);

    // Clear the input field for the next entry
    input.value = '';
  }
});
