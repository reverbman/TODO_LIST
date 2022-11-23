import React, { useState } from 'react'
import '../assets/Home.css'
import trash from '../assets/img/trash.png'


export default function Home() {

    // // const [write, setgetWrite ] = useState("");
    // console.log(write);
    
    const[updateArr, setupdateArr] = useState([]);
    const[updateIn, setupdateIn] = useState('');
    
    return (
        <div className="containers">
            <div id="header">
                <h1>TO DO LIST</h1>
            </div>
            <div id="AddTodo">
                <input id='AddTodoInpt' type="text" placeholder='New todo' onChange={(e) => {
                    setupdateIn(e.target.value);
                }}/>
                <button id='AddTodoBtn' onClick={() => {
                    setupdateArr(arr => [...arr, updateIn])
                    console.log(updateArr)
                }}>Add new task</button>
            </div>
            <div className="toDoSpawn">
                {updateArr.map((to) => (
                    <div className='inTodoSpawn'>{to} <img id='trash' src={trash}></img> </div>
                ))}
            </div>
            
        </div>
    )
}
