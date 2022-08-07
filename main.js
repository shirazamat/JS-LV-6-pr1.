/*1. Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.*/

'use strict'

let products = [
  {
    title: "Product1",
    descreption: "Описание",
    price: 100,
    id: 1
  },
  {
    title: "Product2",
    descreption: "Описание",
    price: 200,
    id: 2
  },
  {
    title: "Product3",
    descreption: "Описание",
    price: 300,
    id: 3
  }
];
function card(product) {
  // Созданиие главного div card
  let catalog_div = document.querySelector("#catalog");
  let card = document.createElement("div");
  card.style.cssText =
    "width: 200px; min-height: 250px; margin-right: 30px; background-color: gray; color: white; border: 7px; border-radius: 10px; border-color: rgb(211, 182, 87);";
  catalog_div.appendChild(card);
  // span Title
  let title = document.createElement("span");
  title.style.cssText =
    "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
  title.textContent = product.title;
  card.appendChild(title);
  // span Description
  let descreption = document.createElement("span");
  descreption.style.cssText =
    "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 17px;";
  descreption.textContent = product.descreption;
  card.appendChild(descreption);
  // span for Price
  let span_price = document.createElement("span");
  span_price.style.cssText =
    "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 17px;";
  span_price.textContent = "Цена:" + " " + product.price;
  card.appendChild(span_price);
  // div for button
  let div_cont = document.createElement("div");
  div_cont.style.cssText =
    "display: flex; justify-content: center; width: 100%;";
  card.appendChild(div_cont);
  // button
  let btn = document.createElement("button");
  btn.style.cssText =
    "width: 70px; height: 50px; background-color: white; color: black; border-radius: 10px;";
  btn.textContent = "Купить";
  div_cont.appendChild(btn);
  // handler for button
  btn.addEventListener("click", function (e) {
    basket(product);
    console.log(e);
    console.log(product);
  });
}
function catalog(products) {
  // цикл
  for (let product of products) {
    card(product);
  }
}

catalog(products);

let product_in_basket = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  },
  {
    id: 3,
    count: 0
  }
];

function basket(product) {
  // Созданиие главного div
  let basket_div = document.querySelector("#basket");
  let bask_prime = document.createElement("div");
  console.log(basket_div);
  bask_prime.style.cssText =
    "width: 200px; min-height: 200px; background-color: gray; border-width: 7px; border-radius: 10px; border-color: rgb(211, 182, 87);";
  basket_div.replaceChildren(bask_prime);
  console.log(product.id);
  console.log(product_in_basket);
  let maybe_product = product_in_basket.find((p) => p.id == product.id);
  console.log(maybe_product.count);
  maybe_product.count++;
  // Строка корзина пуста
  if (product_in_basket.length == 0) {
    let span_empty = document.createElement("span");
    span_empty.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    span_empty.textContent = "Корзина пуста";
    bask_prime.appendChild(span_empty);
  }
  // Если в корзине есть товары
  else {
    let sum = 0;
    let quantity = 0;
    for (let item of product_in_basket) {
      const product = products.find((p) => p.id == item.id);
      sum += product.price * item.count;

      quantity += item.count;
    }
    // Строка "В корзине:"
    let span_basket = document.createElement("span");
    span_basket.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    span_basket.textContent = "В корзине:";
    bask_prime.appendChild(span_basket);
    // span for product
    let span_product = document.createElement("span");
    span_product.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px 5px; align-items: center; font-size: 17px;";
    if ((quantity == 1)) {
      span_product.textContent = quantity + " " + "товар";
    } else if (quantity == 2 || quantity == 3 || quantity == 4) {
      span_product.textContent = quantity + " " + "товара";
    } else {
      span_product.textContent = quantity + " " + "товаров";
    }
    bask_prime.appendChild(span_product);
    // span for sum
    let span_sum = document.createElement("span");
    span_sum.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px 5px; align-items: center; font-size: 17px;";
    span_sum.textContent = "на сумму" + " " + sum + " " + "рублей";
    bask_prime.appendChild(span_sum);
  }
}