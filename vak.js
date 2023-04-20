const listEl = document.querySelector('ul');

fetch('./data.json')
.then(res => res.json())
.then(data => {
   console.log(data);
});