import React ,{useState} from 'react'
import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incrementByAmount , decrementByAmount } from './redux/CounterSlice'
// import { decremenAction, increamentAction , incrementgByVal , decrementByVal } from './redux/action/CounterActions';

export default function Counter() {
    // const [counter , setcounter]=useState(0)
    const count = useSelector(state => state.counter.count)
    console.log(count);
    const dispatch = useDispatch()

    const handlerIncreament =()=>{
        // setcounter(counter +1)
        dispatch(increment())
    }

    const handlerDecreament = ()=>{
        // setcounter(counter-1)
       dispatch(decrement())
    }
    const hndlerIncrementByVal =(val)=>{
        dispatch(incrementByAmount(val))
    }
    const hndlerDEcrementtByVal =(vl)=>{
        dispatch(decrementByAmount(vl))
    }
  return (
   <>
   <button onClick={handlerIncreament}>Increamnet</button>
   <button  onClick={handlerDecreament}>decreament</button>
   <p>{count} </p>
   <button onClick={()=>hndlerIncrementByVal(3)}>Increment by 3</button>
   <button onClick={()=>hndlerDEcrementtByVal(3)}> Decrement by 3</button>
   </>
  )
}

