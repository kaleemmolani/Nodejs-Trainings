const axios = require('axios');

console.log("api call start");
/* axios({url:"https://google.com",method:"get"})
.then(result=>{

  global_data = result.data;
  console.log("this is then block",global_data);
})
.catch(e=>{
  console.log("this is catch block",e);
})

console.log("this is global_data",global_data); */

//this is a function
/* async function getapidata (){
  const apidata = await axios({url:"https://google.com",method:"get"});
  return apidata.data;
} */

// async block
(async()=>{
  let global_data ;
  const apidata = await axios({url:"https://google.com",method:"get"});
  global_data = apidata;
  console.log("api call end",global_data);
  
})();


