console.log("hello")

var saveButton = document.querySelector("#saveBtn")
var titleField = document.querySelector("#snippetTitle")
var snippetField = document.querySelector("#snippetBody")
var deleteButton = document.querySelector("#deleteBtn")
var updateButton = document.querySelector("#updateBtn")

saveButton.addEventListener("click", ()=> {

var newSnippet = {
title: titleField.value,
saved_code: snippetField.value
 }

console.log(newSnippet)
saveSnippet(newSnippet)
});



deleteButton.addEventListener("click", ()=> {
console.log("hello testing")
})

var folders = document.getElementsByClassName("folders");


for (let i = 0; i < folders.length; i++) {
	folders[i].addEventListener('click', function(){

	console.log("This worked")
	folders[i].textContent
	})
	
}


//if text exists in the box, 

async function saveSnippet(snippet) {

  await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snippet),
  });

}
  
async function getSavedSnippet() {

  await fetch('/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((snippet)=> {
  snippet.title = titleField.textContent
  snippet.saved_Code = snippetField.textContent
  
  })

}

 async function deleteSnippet() {

  await fetch('/test/test', {
    method: 'DELETE'
  
  
    
  });
}