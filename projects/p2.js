export function Score() {
  const $article = document.querySelector(".p2");
  $article.innerHTML = `
    <div class="score"></div>
    <div class="score-text"></div>
  `;

  let arr1 = [];
  let current = null;
  const d = document,
  $score = d.querySelector(".score"),
  $scoreText = d.querySelector(".score-text");
  
  
  generateArr();

  function generateArr() {
    for (let i = 1; i < 11; i++) {
      const $div = {
        id: i
      }
      arr1.push($div);
    }
    generateStar()
  }

  function generateStar() {
    const arr2 = arr1.map(event => {
      return `<div class="star" data-id="${event.id}"></div>`
    });

    $score.innerHTML = arr2.join("");
    const $star = d.querySelectorAll(".star");
    $star.forEach(el => {
      el.addEventListener("mouseover", handleMouseEnter);
          
          el.addEventListener("click", handleClick);
      });

      function handleMouseEnter(e) {
          current = e.target.dataset.id;
          starHover(current, $star);
      }

      function handleClick(e) {
          current = e.target.dataset.id;
          starHover(current, $star);
          $scoreText.textContent = `Le diste de puntaje: ${current}`;
          
          $star.forEach(el => {
            el.removeEventListener("mouseover", handleMouseEnter);
          });
      }
  }

  function starHover(id,star) {
    for(const value of star) {
      if(parseInt(value.dataset.id) <= id) {
        value.style.background = "#ffd900";
      } else {
        value.style.background = "";
      }
    }
  }
}