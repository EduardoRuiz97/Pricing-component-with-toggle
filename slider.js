let switchButton = document.querySelector(".slider__round");

let priceCon = document.querySelectorAll(".price__container");
let price = document.querySelectorAll(".price");
let contador  = 0;

switchButton.addEventListener("click", (event)=> {

  let monthPrice = ["$19.99", "$24.99", "$39.99"];
  let anualPrice = ["$199.99", "$249.99", "$399.99"];

  contador++;
  console.log(contador)

  if (contador % 2 == 0) {
    console.log("par");
    price.forEach((itemAnual, index)=>{
      itemAnual.innerHTML =
      `${anualPrice[index]}`;
    })

  } else {
    console.log("impar");
    price.forEach((itemMonth,index )=> {
      itemMonth.innerHTML =
      `${monthPrice[index]}`;
    })
  }

});

