import React,{useState} from 'react';
import './Counter.css'

function Counter(){
    const [count,setcount]=useState(0);
    function DecHandler(){
        setcount(count-1);
    }
    function Inchandler(){
        setcount(count+1);
    }
    function Reshandler(){
        setcount(0);
    }
    return(
        <div className='wrapper' >
            <div className='header'>Increment & Decrement</div>
            <div className='btns'>
                <button onClick={DecHandler}  className='Decr'>
                    -
                </button>
                <div className='num'>
                    {count}
                </div>
                <button onClick={Inchandler} className='Incr'>
                    +
                </button>
            </div>
            <button onClick={Reshandler} className='ReBtn'>Reset</button>
        </div>
    );
}
export default Counter;