async function fun() {
	console.log("inside func");
	const api1 = await fetch("https://jsonplaceholder.typicode.com/posts");
	console.log("after api");

	const data = await api1.json();
	console.log("after resolved");

	return data;
}

console.log("first line");

const a = fun();
console.log(a);
console.log("after a");

a.then(() => console.log("promise resolved")).catch((err) => console.log(err));
