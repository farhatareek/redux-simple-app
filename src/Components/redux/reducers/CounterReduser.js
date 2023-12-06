// import { type } from "@testing-library/user-event/dist/type";
import { INCREMENT , DECREMENT , INC_BY_VAL, DEC_BY_VAL } from "../action/types";

const CounterReduser = (state = {count:0 }, action )=>{
  
switch (action.type) {
    case INCREMENT:
        return {...state , count:state.count + 1}
        case DECREMENT:
            return{...state , count:state.count -1}
            case INC_BY_VAL:
                return {...state, count:state.count + action.value}
                case DEC_BY_VAL:
                    return{...state, count:state.count -action.vale}

    default:
        return state
  
}
}
export default CounterReduser