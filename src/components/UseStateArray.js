import React, { useState } from 'react'

const UseStateArray = () => {

    const myBioData = [
        {
            id: 0, myName: "Bhupendra", age: 27
        },
        {
            id: 1, myName: "Rahul", age: 29
        },
        {
            id: 2, myName: "Soni", age: 29
        },
        {
            id: 3, myName: "  ", age: 29
        }

    ]

    const [myArray, setMyArray] = useState(myBioData);

    const clearArray = () => {
        setMyArray([]);
    }

    const removeElem = (id) => {
       // alert(id);
        const myNewArray = myArray.filter((curElm) => {
            return curElm.id !== id;
        } )
        setMyArray(myNewArray);
    }

    return (
        <>
            {
                myArray.map((curElm) => {
                    
                    return (

                <h1 key={curElm.id}> Name: {curElm.myName} & Age: {curElm.age}

                <button onClick={ () => removeElem(curElm.id)}> remove </button>
                </h1>
                );
            } )
            
        }

            <button onClick={clearArray}>Clear</button>
        </>
    )
}

export default UseStateArray
