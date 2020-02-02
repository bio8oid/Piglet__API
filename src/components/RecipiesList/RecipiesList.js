import React from 'react';
// import React, { Component } from 'react';
// import React, { useState, createContext, useContext, useEffect } from 'react';
import './RecipiesList.scss';



const RecipiesList = props => {
    return (
        <div>
            <h1>{props.text}</h1>
            <p>{props.author}</p>
        </div>
    )
}




// const RecipiesList = props => {

//     const [count, setCount] = useState(props);
//     // console.log(useState(props))
//     console.log(props)
//     console.log(count)


//     // const countDispatch = createContext(null);
//     // const api = useContext(props);
//     // console.log(props.api)

//     // useEffect(() => {
//     //     // setProfileState(props);
//     //     console.log(props.count)
//     // }, [props]);

//     // console.log(count, props, setCount)
//     // console.log(setProfileState(props))

//     return (
//         <div>
//             <p>You clicked {props.count} times</p>
//         </div>
//     );
// }

// class RecipiesList extends Component {

//     render() {

//        return <h1>RecipiesList</h1>
//     }
// }

export default RecipiesList;