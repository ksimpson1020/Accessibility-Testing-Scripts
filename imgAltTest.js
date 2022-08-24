//selecting all images
let images = document.querySelectorAll('img, i');
//result for logging, results are images with missing alt tags
let result = [];
//logic that checks
for (let i = 0; i < images.length; i++){
if (images[i].hasAttribute('alt')){
	console.log(images[i].getAttribute("alt"));
} else {
images[i].style.border= "2px solid #FF0000";
result.push(images[i]);
}
}
console.log(result)


//no comment version for test parameter

let images = document.querySelectorAll('img, i');
let result = [];
for (let i = 0; i < images.length; i++){
if (images[i].hasAttribute('alt')){
	console.log(images[i].getAttribute("alt"));
} else {
images[i].style.border= "2px solid #FF0000";
result.push(images[i]);
}
}
console.log(result)
