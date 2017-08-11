//<=========>testing out some es6 array helper methods below<======>

let numbers = [1, 3, 4, 5];
let sum = 0;

let adder = number => {
	console.log((sum += number));
	return (sum += number);
};

numbers.forEach(adder);

let secondNumbers = numbers.map(adder);
//map is used whenever we want to modify records in some list of data.
//when using map always make sure that the iterator function explicitly returns
//a value.

console.log(numbers);
console.log(secondNumbers);

//using the filter array helper
const products = [
	{ name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
	{ name: "banana", type: "fruit", quantity: 10, price: 15 },
	{ name: "celery", type: "vegetable", quantity: 30, price: 9 },
	{ name: "orange", type: "fruit", quantity: 3, price: 5 }
];

let filteredProducts;

filteredProducts = products.filter(product => {
	return product.type === "fruit";
});

const filteredProductsTwo = products.filter(product => {
	return (
		product.type === "vegetable" && product.quantity > 0 && product.price < 10
	);
});

const users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

const mainUser = users.find(user => {
	return user.name === "Alex";
});
//the drawback with using the find helper is that only the first record
//that satisfies criteria for the find helper gets returned

//but of course it is very useful when finding lets say a user or object with
// a particular id in a database

const computers = [
	{ name: "apple", ram: 24 },
	{ name: "compaq", ram: 4 },
	{ name: "acer", ram: 32 }
];

let computersRamLessThan16 = computers.every(computer => {
	return computer.ram > 16;
});
//the above use of every helper will return false because not every
//computer in the computers array has a ram that is greater than 16

console.log(
	"the computersRamLessThan16 is equal to true ===> ",
	computersRamLessThan16 === true
);

console.log(filteredProducts);
console.log(filteredProductsTwo);
console.log(mainUser);
console.log(computersRamLessThan16);
