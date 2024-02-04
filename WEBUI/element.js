const MainDiv = document.getElementById('main')

document.body.append(MainDiv);

const divX = document.createElement('span');
const divY = document.createElement('span');
divX.inn
MainDiv.append(divX);
MainDiv.append(divY);
console.log(MainDiv.getClientRects().item(0).x,MainDiv.getClientRects().item(0).y);
const horizontalLINE = document.getElementById('horizontal');
const verticalLINE = document.getElementById('vertical');
let showguideline = false
const mousemove=(event)=>{
//console.log({"x":event.clientX,"y":event.clientY,"body":event})
if(showguideline){
 guidelines(event);
}else{
  horizontalLINE.style.left = '0px'
  verticalLINE.style.top= '0px'
}
}

const guidelines = (event)=>{
  horizontalLINE.style.left = `${event.clientX+10}px`;
  verticalLINE.style.top = `${event.clientY+10}px`;
}

class draggableBox {
  isHold = false
  Box = document.createElement('div');
  color = this.color
  constructor (color){
    this.Box.classList.add('box');
    this.Box.style.borderColor = color;
    MainDiv.append(this.Box);
    this.listener();
  }
  divhold=(event)=>{
    if(event.type == "mousedown") {
      console.log("hold");
      event = event || window.event;
      event.preventDefault();
      this.isHold = true;
      this.Box.style.boxShadow = '10px 10px';
      this.Box.style.zIndex = '10';

    }
    if(event.type == "mouseup" || event.type == "mouseout" || event.type == "mouseleave"){
      console.log("free");
      event = event || window.event;
      event.preventDefault();
      this.isHold = false;
      this.Box.style.boxShadow = '0px 0px';
      this.Box.style.zIndex = 'inherit';
    }
    if(this.isHold && event.type == "mousemove"){
      console.log("move");
      console.log('move','color');
      const {width,height} = {width:41,height:41}
      this.Box.style.top = `${event.clientY-width}px`;
      this.Box.style.left = `${event.clientX-height}px`;
    }

  }
  listener = ()=>{
    this.Box.addEventListener('mousedown',this.divhold);
    this.Box.addEventListener('mouseup',this.divhold);
    this.Box.addEventListener('mouseout',this.divhold);
    this.Box.addEventListener('mousemove',this.divhold);
    this.Box.addEventListener('mouseleave',this.divhold);

  }
}
const createNewDiv = (color)=>{
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');
  newDiv.style.borderColor = color;
  MainDiv.append(newDiv)
  let isHold = false;


  const divhold=(event)=>{
      //console.log("hold",event.clientX,event.clientY);
      console.log('hold',color)
       isHold = true;
       newDiv.style.boxShadow = '10px 10px';
       newDiv.style.zIndex = '10';

    }
    
    const divfree = (event) =>{
      //console.log('free',event.clientX,event.clientY);
      console.log('free',color)

       isHold = false;
       newDiv.style.boxShadow = '0px 0px';
    }
    
    const divmove = (event)=>{
      if(isHold){
        const {width,height} = {width:41,height:41}
       // console.log(newDiv.getClientRects())
       console.log('move',color)
        newDiv.style.top = `${event.clientY-width}px`;
        newDiv.style.left = `${event.clientX-height}px`;
      }
  }
  newDiv.addEventListener('mousedown',divhold)
  newDiv.addEventListener('mouseup',divfree)
  newDiv.addEventListener('mouseleave',divfree);
  //newDiv.addEventListener('mouseleave',divfree)

  newDiv.addEventListener('mousemove',divmove)

}
const divone = new draggableBox('red');

const divtwo = new draggableBox('green');
const divthree = new draggableBox('blue');



/* 
createNewDiv('red');
createNewDiv('green');
createNewDiv('blue');

createNewDiv('violet');
createNewDiv('tan');
createNewDiv('teal');
createNewDiv('springgreen');
createNewDiv('salmon');
createNewDiv('yellow'); */

