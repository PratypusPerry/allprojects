import React,{useReducer} from 'react'
import Digbut from './Digbut'
import Chooper from './Chooper'
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalculateIcon from '@mui/icons-material/Calculate';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, Link } from "react-router-dom";
import './Default.css'
import './Calcu.css'
export const Performs={
    addDig: 'addDigit',
    chooseOperation:'choose',
    allClear: 'clear',
    delDig:'deleteDigit',
    result:'Answer'
}
const reducer=(state,{type,payload})=>{
    switch(type){
        case Performs.addDig:
            if(state.overwrite)
            {
                return{
                    ...state,
                    currentTypes:payload.digit,
                    overwrite:false
                }
            }
            if(payload.digit==='0' && state.currentTypes==='0')
            return state
            if(payload.digit==='.' && state.currentTypes.includes('.'))
            return state
            return{
                ...state,
                currentTypes: `${state.currentTypes || ""}${payload.digit}`
            }   
            case Performs.chooseOperation:
                if(state.currentTypes == null && state.previousTypes == null){
                    if(payload.operation=="÷" || payload.operation=="*")
                    return (state)
                    else
                    return {
                        ...state,
                        currentTypes: `${state.currentTypes || ""}${payload.operation}`
                    }
                }
            if(state.currentTypes== null){
                if(payload.operation=="÷" || payload.operation=="*")
                return {...state,
                        operation:payload.operation
                        }
                else
                return {
                    ...state,
                    currentTypes: `${state.currentTypes || ""}${payload.operation}`
                }
            }
                if(state.previousTypes== null){
                    return {
                        ...state,
                        operation: payload.operation,
                        previousTypes: state.currentTypes,
                        currentTypes: null,
                    }
                }
                
            
                // var result=eval(this.previousTypes+this.operation+this.currentTypes);
                return {
                    ...state,
                    previousTypes: evaluate(state),
                    operation:payload.operation,
                    currentTypes: null
                }
            case Performs.allClear:
                return {}
            case Performs.delDig:
                if(state.overwrite)
                return{
                    ...state,
                    overwrite:false,
                    currentTypes:null
                }
                if(state.currentTypes==null)
                return state
                if(state.currentTypes.length==1)
                return{
                    ...state,
                    currentTypes:null
                }
                return{
                    ...state,
                    currentTypes: state.currentTypes.slice(0,-1)
                }
            case Performs.result:
                if(state.operation== null || state.previousTypes== null || state.currentTypes== null)
                return state;
                return{
                    ...state,
                    overwrite:true,
                    previousTypes:null,
                    operation:null,
                    currentTypes:evaluate(state)
                }
            

    }
}
const evaluate=({currentTypes, previousTypes,operation})=>{
    const prev=parseFloat(previousTypes);
    const curr=parseFloat(currentTypes);
    if(isNaN(prev) || isNaN(curr))
    return "";
    let computedVal="";
    switch(operation){
        case "+":
            computedVal=prev+curr;
            break;
        case "-":
            computedVal=prev-curr;
            break;
        case "*":
            computedVal=prev*curr;
            break;
        case "÷":
            computedVal=prev/curr;
            break;
    }
    return (computedVal.toString());
}
const intFormat= new Intl.NumberFormat("en-us",{maximumFractionDigits:0});
const formatOper=(operAnd)=>{
    if(operAnd=='+'||operAnd=='-')
    return operAnd;
    if(operAnd==null) return
    const [integer,deccimal]=operAnd.split('.');
    if(deccimal==null) return intFormat.format(integer);
    return `${intFormat.format(integer)}.${deccimal}`
}
const Calcu = () => {
    const [{currentTypes, previousTypes,operation}, dispatch] = useReducer(reducer, {});
  return (
    <>
      
    <div className='calculatorGrid'>
        <div className='outputTerminal'>
            <div className='previousTypes'>{formatOper(previousTypes)} {operation}</div>
            <div className='currentTypes'>{formatOper(currentTypes)}</div>
        </div>
        <button className='twoColumns' onClick={()=> dispatch({type: Performs.allClear})}>AC</button>
        <button onClick={()=> dispatch({type: Performs.delDig})}>DEL</button>
        <Chooper operation='÷' dispatch={dispatch}/>
        <Digbut digit='1' dispatch={dispatch}/>
        <Digbut digit='2' dispatch={dispatch}/>
        <Digbut digit='3' dispatch={dispatch}/>
        <Chooper operation='*' dispatch={dispatch}/>
        <Digbut digit='4' dispatch={dispatch}/>
        <Digbut digit='5' dispatch={dispatch}/>
        <Digbut digit='6' dispatch={dispatch}/>
        <Chooper operation='-' dispatch={dispatch}/>
        <Digbut digit='7' dispatch={dispatch}/>
        <Digbut digit='8' dispatch={dispatch}/>
        <Digbut digit='9' dispatch={dispatch}/>
        <Chooper operation='+' dispatch={dispatch}/>
        <Digbut digit='.' dispatch={dispatch}/>
        <Digbut digit='0' dispatch={dispatch}/>
        <button className='twoColumns' onClick={()=> dispatch({type: Performs.result})}>=</button>
    </div>
    
    </>
  )
}

export default Calcu