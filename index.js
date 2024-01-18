/////////////////////////////////////////
//Функція-конструктор, яка створює об'єкт користувача з такими властивостями як ім'я вік та місце проживання

function User(name, age, placeOfResidence) {
  this.name = name;
  this.age = age;
  this.placeOfResidence = placeOfResidence;
}

const user1 = new User("Neo", 38, "Matrix");

/////////////////////////////////////////
//Функція-конструктор для прямокутника, яка приймає ширину та висоту як параметри і має метод для обчислення площі.

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.areaCalculation = function () {
  return (this.area = this.width * this.height);
};

const rectangle1 = new Rectangle(5, 10);

/////////////////////////////////////////
//Функція-конструктор для системи керування замовленнями, яка дозволяє додавати нові замовлення та повертати загальну суму всіх замовлень.

function OrderManagmentSystem() {
  this.orders = [];
}

OrderManagmentSystem.prototype.addOrder = function (newOrder) {
  this.orders.push(newOrder);
};

OrderManagmentSystem.prototype.getTotalPrice = function () {
  let totalPrice = 0;
  for (let order of this.orders) {
    totalPrice += order.price;
  }
  return totalPrice;
};

const ordersSystem = new OrderManagmentSystem();
ordersSystem.addOrder({ itemName: "book", price: 350 });
ordersSystem.addOrder({ itemName: "pizza", price: 230 });
