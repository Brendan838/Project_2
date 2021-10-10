
var deleteButton = document.querySelector("#deleteBtn")
var updateButton = document.querySelector("#updateBtn")
var titleField = document.querySelector("#snippetTitle")
var snippetField = document.querySelector("#snippetBody")




//code for delete button
deleteButton.addEventListener("click", () => {
deleteSnippet()
});

//code for update button
updateButton.addEventListener("click", () => {
  const snippet = {
    title: titleField.value,
    saved_code: snippetField.value
  }
updateSnippet(snippet)
});



async function deleteSnippet() {
  await fetch(window.location.href, {
    method: 'DELETE'
  });
}


async function updateSnippet(snippet) {

  await fetch(window.location.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snippet),
  });

}

// function clearFields() {
//   titleField.value = ""
//   snippetFeild.value = ""

// }

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
  
  document.querySelector('#logout2').addEventListener('click', logout);
  