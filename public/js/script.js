//divide the text area in two. 

//when a text is input, a new Element is created. 
//


var saveButton = document.querySelector("#saveBtn")
var titleField = document.querySelector("#snippetTitle")
var snippetField = document.querySelector("#snippetBody")

saveButton.addEventListener("click", ()=> {

var newSnippet = {
title: titleField.value,
snippet: snippetField.value
 }

console.log(newSnippet)
saveSnippet(newSnippet)
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

  await fetch('/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snippet),
  });

}
  
async function getSavedSnippet() {

  await fetch('/test', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((snippet)=> {
  snippet.title = titleField.textContent
  snippet.saved_Code = snippetField.textContent
  })

 
}