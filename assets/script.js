

let yourName = "Joel Aguirre"
let cookieQty = 0
let gbTotal = 0
let cc = 0
let SugarSp = 0
//summary button total
let qtyDisplay = document.querySelector('#qty-total')

let GingerTotal = document.querySelector('#qty-gb')
let ChChTotal = document.querySelector('#qty-cc')
let SugarSpTotal = document.querySelector('#qty-sugar')


//adding the +- buttons

//Ginger bread buttons
let GingerBreadUP = document.querySelector('#add-gb')
let GingerBreadDown = document.querySelector('#minus-gb')

// functions for Gingerbread buttons
GingerBreadUP.addEventListener('click', function(e) {
    gbTotal++
    cookieQty = gbTotal + cc + SugarSp
    GingerTotal.textContent = `${gbTotal}`
qtyDisplay.textContent = cookieQty
})
  
GingerBreadDown.addEventListener('click', function(e){
   if(gbTotal >0){
    gbTotal-- 
    cookieQty = gbTotal + cc + SugarSp
   GingerTotal.textContent = `${gbTotal}`
   qtyDisplay.textContent = cookieQty
   }
})

// chocolate chip buttons

let ChocolateUp = document.querySelector('#add-cc')
let ChocolateDn = document.querySelector('#minus-cc')

//functions for Chocolate chip buttons
ChocolateUp.addEventListener('click', function(e){
    cc++
    cookieQty = gbTotal + cc + SugarSp
    ChChTotal.textContent = `${cc}`
    qtyDisplay.textContent = cookieQty
})
ChocolateDn.addEventListener('click', function(e){
    if(cc >0){
    cc--
    cookieQty = gbTotal + cc + SugarSp
    ChChTotal.textContent = `${cc}`
    qtyDisplay.textContent = cookieQty
    
    }
})

// Sugar Sprinkle

let SugarSpUp = document.querySelector('#add-sugar')
let SugarSpDn = document.querySelector('#minus-sugar')

//functions for Sugar Sprinkle
SugarSpUp.addEventListener('click', function(e){
    SugarSp++
    cookieQty = gbTotal + cc + SugarSp
    SugarSpTotal.textContent = `${SugarSp}`
    qtyDisplay.textContent = cookieQty
})
SugarSpDn.addEventListener('click', function(e){
    if(SugarSp >0){
    SugarSp--
    cookieQty = gbTotal + cc + SugarSp
    SugarSpTotal.textContent = `${SugarSp}`
    qtyDisplay.textContent = cookieQty
    }
})








d