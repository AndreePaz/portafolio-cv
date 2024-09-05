export function textAnimation() {
  const $article = document.querySelector(".p1");
  $article.innerHTML = `
    <div class="container-p1">
      <div class="panel">
        <input type="text" id="input" placeholder="Escribe algo">
        <div class="respond"></div>
      </div>
    </div>
  `;

  let word;
  let animation;
  const d = document,
  $input = d.getElementById("input"),
  $div = d.querySelector(".respond");

  $input.addEventListener("keydown", e => {
    if(e.key === "Enter" && $input.value !== "") {
      resetAnimation();
      word = $input.value;
      RenderText();
    }
  });

  function RenderText()  {
    let i = 1;
    animation = setInterval(() => {
      if(i <= word.length) {
        $input.value = word.slice(i);
        $div.textContent = word.slice(0,i);
        i++;
      } else {
        clearInterval(animation);
        $input.value = "";
      }
    },200);
  }

  function resetAnimation() {
      clearInterval(animation);
      $div.textContent = "";
  }
}