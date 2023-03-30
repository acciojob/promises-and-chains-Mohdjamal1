//your JS code here. If required.
let nameElement = document.querySelector('#name');
let ageElement = document.querySelector('#age');
let btnElement = document.querySelector('#btn');

let promise = new promise((resolve, reject) =>{
	setTimeout(() => {
		let age=ageElement.value;
		let name=nameElement.value;
		if (!(age && name)) {
			alert("Please Enter a valid details");
		}
		return promise;
		if (age > 18) {
			resolve(`Welcome, ${name}. You can vote.`);
		}else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	}, 4000);
});

function callPromise() {
	return promise;
}
function handleSubmit(e) {
	e.preventDefault();
	callPromise().then(alert).catch(alert);
}
btnElement.addEventListener('click',handleSubmit);
