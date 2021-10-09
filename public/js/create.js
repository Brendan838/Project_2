var saveButton = document.querySelector("#saveBtn")
var titleField = document.querySelector("#snippetTitle")
var snippetField = document.querySelector("#snippetBody")




// code for save button
saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  var newSnippet = {
    title: titleField.value,
    saved_code: snippetField.value
  }

  console.log(newSnippet)
  newSnippet(newSnippet)
  clearFields()
});

//code for delete button


// var folders = document.getElementsByClassName("folders");


// for (let i = 0; i < folders.length; i++) {
// 	folders[i].addEventListener('click', function(){

// 	console.log("This worked")
// 	folders[i].textContent
// 	})

// }


//if text exists in the box, 

async function newSnippet(snippet) {

  await fetch('/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snippet),
  });

}




// async function getSavedSnippet() {

//   await fetch('/test', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((snippet)=> {
//   snippet.title = titleField.textContent
//   snippet.saved_Code = snippetField.textContent

//   })

// }

async function deleteSnippet() {

  await fetch('/test/test', {
    method: 'DELETE'



  });
}


function clearFields() {
  titleField.value = ""
  snippetFeild.value = ""

}