import { useState } from "react";
import './App.css'
import { MyTable } from "./components/Table";

function App() {

 const [count, countupdate] = useState(Math.random()*20)

 const updateValue = ()=>{
  countupdate(Math.random()*20)
 }
const studentData= [
  {id:1,name:"abe",age:17},
  {id:2,name:"xyz",age:19},
]

const teacherData= [
  {id:1,name:"pqr",age:34},
  {id:2,name:"stu",age:45},
];
  return (
    <>
    <MyTable data={studentData}/>
    <MyTable data={teacherData}/>
    <span>
      this is value = {count}
    </span>
    <button onClick={updateValue}>
      refresh
    </button>
    </>
  )
}

export default App
