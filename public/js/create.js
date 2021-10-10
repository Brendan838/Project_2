var saveButton = document.querySelector("#saveBtn")
var titleField = document.querySelector("#snippetTitle")
var snippetField = document.querySelector("#snippetBody")




// code for save button
saveButton.addEventListener("click", () => {

  const snippet = {
    title: titleField.value,
    saved_code: snippetField.value
  }

  console.log(snippet)
  newSnippet(snippet)
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


//Save New Snippet
async function newSnippet(snippet) {

  await fetch(window.location.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snippet)
  });
location.reload();
}




//Delete Existing Snippet
async function deleteSnippet() {

  await fetch(window.location.href, {
    method: 'DELETE'
  });
}


const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout1').addEventListener('click', logout);
  