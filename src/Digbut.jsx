import React from 'react'
import { Performs } from './Calcu'

const Digbut = ({dispatch, digit}) => {
  return (<button onClick={()=>dispatch({type: Performs.addDig,payload:{digit}})}>{digit}</button>)
}

export default Digbut