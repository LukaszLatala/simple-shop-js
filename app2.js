const productsList = document.querySelector(".products-list");
const cartList = document.querySelector(".cart__wrapper");

const cart = [];
// console.log(cart);

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
    const cartProduct = {
      name: productName,
      price: productPrice,
    };

    // -------------

    cart.push(cartProduct);

    const newCart = cart.map((product) => {
      //   console.log(product);
      //   console.log(productName);
      return product;
    });

    console.log(newCart);

    newCart.forEach((product) => {
      const cartProductLi = document.createElement("li");

      const cartProductNameWrapper = document.createElement("p");
      cartProductNameWrapper.innerHTML = product.name;

      const cartProductPriceWrapper = document.createElement("p");
      cartProductPriceWrapper.innerHTML = product.price;

      const deleteProductFromCartBtn = document.createElement("button");
      deleteProductFromCartBtn.innerHTML = "Delete";

      deleteProductFromCartBtn.addEventListener("click", () =>
        this.removeProductFromCart(cartProductLi, product)
      );

      cartProductLi.appendChild(cartProductNameWrapper);
      cartProductLi.appendChild(cartProductPriceWrapper);
      cartProductLi.appendChild(deleteProductFromCartBtn);
      cartList.appendChild(cartProductLi);
    });
  }
  removeProductFromCart(cartProductLi, product) {
    cartProductLi.parentNode.removeChild(cartProductLi);
    const productIndex = cart.indexOf(product);
    cart.splice(productIndex, 1);
  }
}

new Product("mleko", 2);
new Product("chleb", 3);
new Product("ziemniaki", 1);

console.log(cart);
