import { useState } from "react";
import { useEffect } from "react";
function Useeffect(){
    const [text,setText]=useState('')
    // useEffect(()=>{
    //     console.log("Rendering");
    // });
    // useEffect(()=>{
    //     console.log("rendering");
    // },[]);
    // useEffect(()=>{
    //     console.log("renders");
    // },[text]);
    // useEffect(()=>{
    //     console.log("utkarsh");/
    //     return ()=>{
    //         console.log("vijay");
    //     }
    // },[text]);
    function chHandler(event){
        setText(event.target.value)
        console.log(text)
    }
    return(
        <div>
            <input type="text" onChange={chHandler}></input>
        </div>
    );
}
export default Useeffect;