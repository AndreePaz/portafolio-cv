export function Tags() {
  const $article = document.querySelector(".p3");
  $article.innerHTML = `
    <div id="input-tag"></div>
  `

  let tags = [];
  const d = document,
  $span = d.createElement("span"),
  $div = d.createElement("div"),
  $input = d.getElementById("input-tag");
  
  $span.contentEditable = true;
  $span.style.outline = "none";
  $span.classList.add("editable");
  $div.classList.add("tags");
  $input.appendChild($div);
  $input.appendChild($span);

  d.addEventListener("click", e => {
    if(e.target.matches("#input-tag")) {
      $span.focus();
    }
  })

  $span.addEventListener("keydown", e => {
    if(e.key === "Enter") {
      e.preventDefault();
      createTags($span.textContent);
    }
  })


  function createTags(val) {
    const etiqueta = {
      id: (Math.random() * 100).toString(36).slice(3),
      name: val
    }

    tags.push(etiqueta);
    $span.textContent = "";
    addTags();
  }

  function addTags() {
    const newTags = tags.map(el => {
      return `
      <div class="tag">
        <span>${el.name}</span>
        <span class="bDelete" data-id="${el.id}">X</span>
      </div>`
    })

    $div.innerHTML = newTags.join("");
    deleteTags();
  }

  function deleteTags() {
    d.querySelectorAll(".bDelete").forEach(btn => {
      btn.addEventListener("click", e => {
        const id = btn.getAttribute("data-id");
        tags = tags.filter(tag => tag.id !== id);
        addTags();
      })
    })
  }
}