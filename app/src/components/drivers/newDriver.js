import React,{useState, useEffect} from "react";

const NewDriver = (props)=>{
let [newName,setNewDriver] = useState('');
let [newCar,setNewCar]= useState('');
let [newPhone, setNewPhone]=useState('')

const changeName = (e)=>{
    setNewDriver(e.target.value)
}
const changeAuto = (e)=>{
setNewCar(e.target.value)
}
const changePhone = (e)=>{
setNewPhone(e.target.value)
}
const addDriver=()=>{
    debugger;
    let newDriver = {
        name: newName,
        car: newCar,
        phone: newPhone
    }
    props.addDriver(newDriver)
    setNewDriver('')
    setNewCar('')
    setNewPhone('')
}

   return(
   <div>
        <input placeholder='имя' value={newName} onChange={changeName}></input>
        <input placeholder='машина' value={newCar} onChange={changeAuto}></input>
        <input placeholder='телефон' value={newPhone} onChange={changePhone}></input>
        <button onClick={addDriver}>добавить</button>
      </div>
   )
}
export default NewDriver