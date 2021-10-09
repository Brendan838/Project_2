
var deleteButton = document.querySelector("#deleteBtn")
var updateButton = document.querySelector("#updateBtn")




console.log(deleteButton)
//code for delete button
deleteButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("hello testing", event.target)
});






// async function deleteSnippet() {

//   await fetch('/test/test', {
//     method: 'DELETE'



//   });
// }


// function clearFields() {
//   titleField.value = ""
//   snippetFeild.value = ""

// }