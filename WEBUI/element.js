const newDiv = document.createElement('div');
newDiv.style.border = '1px solid green'
newDiv.style.width = '5rem'
newDiv.style.height = '5rem';
document.body.append(newDiv);

const divX = document.createElement('span');
const divY = document.createElement('span');
divX.inn
newDiv.append(divX);
newDiv.append(divY);
console.log(newDiv.getClientRects().item(0).x,newDiv.getClientRects().item(0).y);


const arr = [{name:"abc-demo",dob:4},{name:"xyz",dob:6},{name:"pqr-demo",dob:8},{name:"stu",dob:7}]

const iterPerson = (person,index) =>{
  return {
    name:person.name,
    age:23 - person.dob
  }
}
const updatedarr = arr.map(iterPerson);


console.log(arr,updatedarr);

const filterarr = updatedarr.filter(person=>!person.name.includes('demo'))
console.log(filterarr)




const totalAge = updatedarr.reduce((pre,curr)=>
{
  console.log("pre:",pre,"curr:",curr)
  return pre + curr.age
}
 ,0);
console.log('total age',totalAge)


// Expected output: 10
