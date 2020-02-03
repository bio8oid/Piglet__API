import React from 'react';
// import React, { Component } from 'react';
// import React, { useState, createContext, useContext, useEffect } from 'react';
import './RecipiesList.scss';


const RecipiesList = props => {

    if (props.recipiesList !== null) {

        return props.recipiesList.map((item, index) => (

            <div className="list-wrapper">
                <div className="list-item" key={index}>
                    <h3>{item.title}</h3>
                    <div className="image-and-tags-wrapper">
                        <img className="list-image" alt="thubnail" src={item.thumbnail} />
                        <div className="list-ingredients-tags">
                          {item.ingredients.split(',').map((item, index) => 
                                (
                                <a key={index} className="tag" href="/" >{item}</a>))}
                        </div>
                    </div>
                    <a className="list-item-link" href={item.href}>link to recipe</a>
                </div>
            </div>
        ))
    }
    return null;
}




// const RecipiesList = props => {
//     return (
//         <div>
//             <h1>{props.text}</h1>
//             <p>{props.author}</p>
//         </div>
//     )
// }




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

//   componentWillMount() {
//     console.log(this.props.recipiesList)
//     if (this.props.recipiesList !== null) {
//       this.setState({ recipiesList: this.props.recipiesList});
//     }
//   }
//   //   static getDerivedStateFromProps(props, state) {
//     //     if (props.recipiesList !== null) {
//       //       return { recipiesList: props.recipiesList}
//       //      }
//       //      return null;
//       // }

//       render() {

//        return this.state.recipiesList !== null ? <div>{ this.state.recipiesList.map((item, index) => {
// return (
//    <div key={index}>
//             <p>{item.title}</p>
//             <p>{item.href}</p>
//             <p>{item.ingridients}</p>
//             <p>{item.thumbnail}</p>
//           </div>
// )

//         }

//         )} </div> : <div> Loading ... </div>
//       }
//     }


//  {this.props.recipiesList.map((item, index) => {
//       <div key={index}>
//         <p>{item.title}</p>
//         <p>{item.href}</p>
//         <p>{item.ingridients}</p>
//         <p>{item.thumbnail}</p>
//       </div>
//   )
//   })
// }
//   return null;
// }
// }

export default RecipiesList;