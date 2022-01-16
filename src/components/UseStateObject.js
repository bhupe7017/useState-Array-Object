import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, SetmyObject] = useState({
        myName : "Bhupendra Singh", myAge : 27, degree : "BCA"
    });

    const changeObject = () => {
        SetmyObject({ ...myObject, myName : 'Rahul Singh'})
    }

    return (
        <div>
            <h1>Name: {myObject.myName} & Age: 27 , Degree: BCA </h1>
            <button onClick={changeObject}> Update </button>
        </div>
    )
}

export default UseStateObject
