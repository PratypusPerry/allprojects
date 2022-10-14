import React from 'react'
import { Performs } from './Calcu'

const Chooper = ({dispatch , operation}) => {
    return (<button onClick={()=>dispatch({type: Performs.chooseOperation,payload:{operation}})}>{operation}</button>)
}

export default Chooper