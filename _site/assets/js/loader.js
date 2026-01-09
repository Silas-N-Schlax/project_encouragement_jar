document.getElementById("form").addEventListener("submit", async function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    token: formData.get("token")
  }

  try {
    const response = await fetch("/.netlify/functions/loadContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      loadDomContent(result.content)
    } else {
      alert(result.message)
    }
  } catch (error) {
    alert(error)
  }
})

function loadDomContent(content) {
  console.log(content)
  console.log("DOM LOADING");
  let categoryDom = document.querySelector('.category');
  let noteDom = document.querySelector('.note');
  let fromDom = document.querySelector('.from');
  let containerDom = document.querySelector('.content-container');

  categoryDom.textContent = content.category;
  noteDom.textContent = content.msg;
  fromDom.textContent = `From: ${content.from}`;

  containerDom.style.visibility = "visible"; 
}