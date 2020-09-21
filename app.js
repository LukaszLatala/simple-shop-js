const singleProduct = document.querySelector(".add");
const lsitOfProducts = document.querySelector(".products-added__wrapper");

class CartProduct {
  constructor() {
    this.productsList = [];
  }
  addNewProduct(product) {
    const { productName, productPrice } = product;
    this.productsList.push(
      `Produkt: <b>${productName}</b> - o cenie ${productPrice} zł`
    );
  }
}

const availableProduct = new CartProduct();
availableProduct.addNewProduct({ productName: " Ogórek", productPrice: "1" });
availableProduct.addNewProduct({ productName: " Papryka", productPrice: "2" });
availableProduct.addNewProduct({ productName: " Dżem", productPrice: "3" });

availableProduct.productsList.forEach((product) => {
  const newProduct = document.createElement("li");
  newProduct.className = "newproduct";
  const addProductToBasket = document.createElement("button");
  addProductToBasket.innerHTML = "Dodaj do koszyka";
  newProduct.innerHTML = product;

  singleProduct.appendChild(newProduct);
  newProduct.appendChild(addProductToBasket);

  const addProduct = () => {
    //     const newElementP = document.createElement("p");
    //     newElementP.innerHTML = newProduct.textContent;
    //     document.querySelector(".products-added__wrapper").appendChild(newElementP);

    const newLiElement = document.createElement("li");
    newLiElement.className = "newLiElement";
    const removeProductFromBasket = document.createElement("button");
    removeProductFromBasket.innerHTML = "usun z koszyka";

    // removeProductFromBasket.addEventListener("click", () =>
    //     this.removeProduct(newLiElement,productName))

    newLiElement.innerHTML = product;
    lsitOfProducts.appendChild(newLiElement);
    newLiElement.appendChild(removeProductFromBasket);
  };
  // removeProduct(newLiElement,productName){
  //     newLiElement.parentNode.removeChild(newLiElement);
  //     const productIndex = productsList.indexOf(productName);
  //     productsList.splice(productIndex,1);

  // }
  // };

  addProductToBasket.addEventListener("click", addProduct);
});
