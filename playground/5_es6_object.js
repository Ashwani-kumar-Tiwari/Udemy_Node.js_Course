// Object property shorthand

const name = "Ashwani";
const userAge = 24;

const user = {
  //name: name,
  name,
  age: userAge,
  loaction: "Delhi",
};

console.log(user);

//object destructuring

const product = {
  label: "The secret",
  price: 150,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label;
// const stock = product.stock;

// const { label, stock, rating } = product;
const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
