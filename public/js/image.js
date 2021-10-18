const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")

imageForm.addEventListener("submit", async event => {

  event.preventDefault()
  const file = imageInput.files[0]

  // get secure url from our server
  const { url } = await fetch("/s3Url").then(res => res.json())
  console.log(url)

  // post the image direclty to the s3 bucket
  await fetch(url, {

    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })

  const imageUrl = url.split('?')[0]
  console.log(imageUrl)

  // post requst to my server to store any extra data
  const fileUploaded = document.createElement("p")
  fileUploaded.textContent = file.name + " Was succefully uploaded to the server!"
  document.body.appendChild(fileUploaded)
  
  // const img = document.createElement("img")
  // img.src = imageUrl
  // document.body.appendChild(img);
  // console.log(file)

})

// imageForm.addEventListener("submit", async event => {