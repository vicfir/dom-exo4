let myBody = document.getElementsByTagName('body')[0];

let secondTitle = myBody.children.item(1).textContent;
console.log(secondTitle);

let listLast = document.getElementsByTagName('ul')[0].lastElementChild.textContent;
console.log(listLast);

let txtFirstPara = myBody.children.item(2).children.item(1).textContent.toUpperCase();
console.log((txtFirstPara));

let list = Array.from(document.getElementsByTagName('ul')[0].children);
list.forEach(element => {
    console.log(element.textContent.toUpperCase());
});