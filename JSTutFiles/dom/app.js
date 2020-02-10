//const listItemElement = document.querySelectorAll('li'); //live
const h1 = document.getElementById('main-title');
h1.textContent = 'Some New Title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';
const listItemElement = document.getElementsByTagName('li'); // not live

for(const listItemEl of listItemElement){
    console.dir(listItemEl);
}

const li = document.querySelector('li');
li.classList()