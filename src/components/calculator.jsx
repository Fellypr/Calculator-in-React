import React ,{useState} from "react"
import './calculator.css'
import { Box, Container } from '@mui/material' 

export default function Calculator() {
    const [num,setNum] = useState (0);
    function InputResult(e){
        var input = e.target.value
        if(num===0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }
    function resultClear(){
        setNum(0)
    }
    function porcentagem(){
        setNum(num/100);
    }
    function operadorHandler(){
        if(num > 0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }
    function resultado(){
        setNum(eval)
    }
    return (
    <div className="fundo"> 
        <Box m={5}/>
        <Container maxWidth='xs'>  
            <div className='wrapper'>
                <h1 className='windows'>{num}</h1>
                <button onClick={resultClear} className="white">AC</button>
                <button onClick={operadorHandler} className="white">+/-</button>
                <button onClick={porcentagem}className="white">%</button>
                <button className='SideButton' onClick={InputResult} value={"/"}>÷</button>
                <button className='gray' onClick={InputResult} value={7}>7</button>
                <button className='gray' onClick={InputResult} value={8}>8</button>
                <button className='gray' onClick={InputResult} value={9}>9</button>
                <button className='SideButton' onClick={InputResult} value={"*"}>X</button>
                <button className='gray' onClick={InputResult} value={4}>4</button>
                <button className='gray' onClick={InputResult} value={5}>5</button>
                <button className='gray' onClick={InputResult} value={6}>6</button>
                <button className='SideButton' onClick={InputResult} value={"-"}>-</button>
                <button className='gray' onClick={InputResult} value={1}>1</button>
                <button className='gray' onClick={InputResult} value={2}>2</button>
                <button className='gray' onClick={InputResult} value={3}>3</button>
                <button className='SideButton' onClick={InputResult} value={"+"}>+</button>
                <button className='gray' id='zero' onClick={InputResult} value={"0"}><span>0</span></button>
                <button className='gray'onClick={InputResult} value={"."}>,</button>
                <button className='SideButton' onClick={resultado}>=</button>
            </div>
        </Container>
    </div>
    )
}
