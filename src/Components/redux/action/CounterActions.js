import { DECREMENT, DEC_BY_VAL, INCREMENT , INC_BY_VAL} from "./types"

export const  increamentAction = async(dispatch)=>{
    return dispatch({type:INCREMENT})
}
export const decremenAction =async(dispatch)=>{
    return dispatch({type:DECREMENT})
}

export const incrementgByVal = async(val , dispatch)=>{
    return dispatch({type:INC_BY_VAL , value:val})
}

export const decrementByVal=(vl , dispatch)=>{
    return dispatch({type:DEC_BY_VAL,vale: vl})
}