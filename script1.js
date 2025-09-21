let chipsQuantity = 0;
let sodaQuantity = 0;
let cookiesQuantity = 0;

const chipsElement = document.getElementById('chipsQuantity');
const sodaElement = document.getElementById('sodaQuantity');
const CookiesElement = document.getElementById('cookiesQuantity');

document.getElementById('addToCartChips').addEventListener('click', function(){
    chipsQuantity++;
    chipsElement.textContent = chipsQuantity;
})

document.getElementById('addToCartSoda').addEventListener('click', function(){
    sodaQuantity++;
    sodaElement.textContent = sodaQuantity;
})

document.getElementById('addToCartCookies').addEventListener('click', function(){
    cookiesQuantity++;
    CookiesElement.textContent = cookiesQuantity;
})