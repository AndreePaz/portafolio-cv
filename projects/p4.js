export function KeyBoard() {
  const $article = document.querySelector(".p4");
  $article.innerHTML = `
    <input type="text" id="inputText">
    <div class="keyboard"></div>
  `;

  let arrKey = ["1","2","3","4","5","6","7","8","9","0","'","¡","",
    "","q","w","e","r","t","y","u","i","o","p","`","+",
"MAYUS","a","s","d","f","g","h","j","k","l","ñ",'"',"Ç",
 "SHIFT","<","z","x","c","v","b","n","m",",",".","-"," "];

let arrKeyMayus = ["1","2","3","4","5","6","7","8","9","0","'","¡","",
         "","Q","W","E","R","T","Y","U","I","O","P","`","+",
  "MAYUS","A","S","D","F","G","H","J","K","L","Ñ",'"',"Ç",
      "SHIFT","<","Z","X","C","V","B","N","M",",",".","-"," "];

let arrKeyShift = ["!","@","#","$","%","&","/","(",")","=","?","¿","",
         "","Q","W","E","R","T","Y","U","I","O","P","^","*",
  "MAYUS","A","S","D","F","G","H","J","K","L","Ñ",'{',"}",
      "SHIFT",">","Z","X","C","V","B","N","M",";",":","_"," "];

      let arr = [];
      let valorM = false;
      let valorS = false;
      
      const d = document,
       $inputText = d.getElementById("inputText"),
       $keyboard = d.querySelector(".keyboard");
      
      tecladoVirtual(arrKey);
      d.addEventListener("click", e => {
        if(e.target.matches(".MAYUS")) {
          if(!valorM) {
            tecladoVirtual(arrKeyMayus);
            valorM = true;
          }else {
            tecladoVirtual(arrKey);
            valorM = false;
          }
        }
      
        if(e.target.matches(".SHIFT")) {
          tecladoVirtual(arrKeyShift);
          d.addEventListener("click", e => {
            if(!(e.target.matches(".SHIFT")) && !(e.target.matches(".MAYUS"))) {
              tecladoVirtual(arrKey);
            }
          })
        }
      
      })
      
      
      function tecladoVirtual(array) {
        arr = array;
        const teclado = arr.map(el => {
          return `<div class="key ${(el === "MAYUS" || el === "SHIFT") ? el : ""}" data-key="${el}">${el}</div>`;
        });
        $keyboard.innerHTML = teclado.join("");
        const $key = d.querySelectorAll(".key");
        $key.forEach(k => {
          k.addEventListener("click", e => {
            if(k.className !== "key MAYUS" && k.className !== "key SHIFT") {
              $inputText.value += k.dataset.key;
              valorS = true;
            }
          })
        })
      }

}

