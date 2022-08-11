

import React from 'react'

import {useState} from 'react'

function PersonCard(props) {

    const {item:{firstName, lastName, age, hairColor}} = props

    const [state,setState]= useState(age)

    const clickHandler = (e)=>{
        
        setState(state+1)
    }

  return (
    <div>
       <h2>{lastName} {firstName}</h2>
       <p> age:{age}</p>
        <p>Hair Color:{hairColor}</p>
        <button onClick={clickHandler}> birthday button {firstName}</button>
    </div>
  )
}

export default PersonCard