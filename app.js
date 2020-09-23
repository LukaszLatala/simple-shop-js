const productsList = document.querySelector(".products-list");
const cartList = document.querySelector(".cart__wrapper");

class Product {
  constructor(productName, productPrice) {
    this.createProduct(productName, productPrice);
  }
  createProduct(name, price) {
    const productLiWrapper = document.createElement("li");
    productLiWrapper.classList.add("single-product__wrapper");

    const productNameWrapper = document.createElement("p");
    productNameWrapper.innerHTML = `Nazwa: ${name}`;

    const productPriceWrapper = document.createElement("p");
    productPriceWrapper.innerHTML = `Koszt to: ${price}$`;

    const addProductToCartBtn = document.createElement("button");
    addProductToCartBtn.innerHTML = "add to cart";
    addProductToCartBtn.addEventListener("click", () =>
      this.addProductToCart(name, price)
    );

    productLiWrapper.appendChild(productNameWrapper);
    productLiWrapper.appendChild(productPriceWrapper);
    productLiWrapper.appendChild(addProductToCartBtn);

    productsList.appendChild(productLiWrapper);
  }

  addProductToCart(productName, productPrice) {
    const cartProductLi = document.createElement("li");

    const cartProductNameWrapper = document.createElement("p");
    cartProductNameWrapper.innerHTML = productName;

    const cartProductPriceWrapper = document.createElement("p");
    cartProductPriceWrapper.innerHTML = productPrice;

    const deleteProductFromCartBtn = document.createElement("button");
    deleteProductFromCartBtn.innerHTML = "Delete";

    deleteProductFromCartBtn.addEventListener("click", () =>
      this.removeProductFromCart(cartProductLi)
    );

    cartProductLi.appendChild(cartProductNameWrapper);
    cartProductLi.appendChild(cartProductPriceWrapper);
    cartProductLi.appendChild(deleteProductFromCartBtn);
    cartList.appendChild(cartProductLi);
  }
  removeProductFromCart(cartProductLi) {
    cartProductLi.parentNode.removeChild(cartProductLi);
  }
}

new Product("Ziemniaki", 2);
new Product("Pomidory", 3);
new Product("Marchew", 1);
