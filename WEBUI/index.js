/* 
reading elements;
updating elements;
adding elements; 
events of elements;
*/
const body = document.getElementsByTagName('body')[0];
/* const allh1tag = document.getElementsByTagName('h1');

//console.log(allh1tag);
const classh1tag = document.getElementsByClassName('red');

console.log(classh1tag);
classh1tag[0].classList.remove('red');

setTimeout(()=>{
allh1tag[1].classList.add('red');
allh1tag[1].classList.remove('green');

},3000);




const atag = document.createElement('a');
atag.innerText = 'my profile';

atag.setAttribute('href',"https:kaleemmolani.com");

body.append(atag);

const ahtag = document.getElementsByTagName('a')[0];


 */



const companywebsite = document.getElementsByName('website')[0];
console.log(companywebsite)

const idtag = document.getElementById('refresh');
console.log(idtag);

idtag.addEventListener('click',()=>{



fetch('https://6585c00e022766bcb8c94b38.mockapi.io/company')
  .then(response => response.json())
  .then(json => console.log(json)).catch(err=>console.log(err));
  console.log('clicked')

});

const saveButton = document.getElementById('save');

saveButton.addEventListener('click',()=>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "name": document.getElementsByName('name')[0].value,
    "website": document.getElementsByName('website')[0].value,
    "logo": document.getElementsByName('logo')[0].value,
    "country":  document.getElementsByName('country')[0].value,
    "state": document.getElementsByName('state')[0].value,
    "city": document.getElementsByName('city')[0].value
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://6585c00e022766bcb8c94b38.mockapi.io/company", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  console.log('clicked')

});

const ahtag = document.getElementsByTagName('a')[0];

