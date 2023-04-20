const listEl = document.querySelector('ul');

fetch('vak.json')
.then(res => res.json())
.then(data => {
   console.log(data);
});