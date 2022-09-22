// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const numPrice = Number(price)
  const quantity = product.querySelector('.quantity input').value
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = Number(numPrice * quantity)
  return subtotal;

}

// ITERATION 2
function calculateAll() {
  const products = document.getElementsByClassName('product')
  const productsArr = Array.from(products) //pasamos a array para usar metodos de array
  let sumaSubtotales = 0;
  productsArr.forEach((product, e) => {
    let subSum = updateSubtotal(product)
    console.log(subSum.innerHTML)
    sumaSubtotales += Number(subSum.innerHTML)
    // console.log(sumaSubtotales)
  });
  // ITERATION 3
  document.querySelector('h2 span').innerHTML = sumaSubtotales


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
