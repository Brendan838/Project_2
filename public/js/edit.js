
var deleteButton = document.querySelector("#deleteBtn")
var updateButton = document.querySelector("#updateBtn")
var titleField = document.querySelector("#snippetTitle")
var snippetField = document.querySelector("#snippetBody")
var copyBtn = document.querySelector("#copyBtn")
var pasteBtn = document.querySelector("#pasteBtn")



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
document.location.replace('/snips');
}


async function updateSnippet(snippet) {

  await fetch(window.location.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snippet),
  });
   document.location.replace('/snips');
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
  
  copyBtn.addEventListener('click', () => {
    snippetField.select();
    document.execCommand('copy')
    
});

pasteBtn.addEventListener('click', () => {
    snippetField.focus();
    document.execCommand('paste')
    navigator.clipboard.readText()
    .then((text)=>{
        snippetField.value = snippetField.value + text;
    });

});
