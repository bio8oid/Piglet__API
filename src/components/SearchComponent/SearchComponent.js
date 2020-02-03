import React from 'react';
// import React, { Component } from 'react';
import './SearchComponent.scss';
// import RecipiesList from '../RecipiesList/RecipiesList';
// import React, { useState } from 'react';
import Selectrix from "react-selectrix";

const options = [
    {
        key: "eggplant",
        label: "eggplant"
    },
    {
        key: "artichokes",
        label: "artichokes"
    },
    {
        key: "asparagus",
        label: "asparagus"
    },
    {
        key: "pumpkin",
        label: "pumpkin"
    },
    {
        key: "wine vinegar",
        label: "wine vinegar"
    },
    {
        key: "olive oil",
        label: "olive oil"
    }
]

const SearchComponent = props => {

    return (
        <div className="container-search">
            <div className="header-search">
                <img alt="left" className="wrap-image left" src="./images/jane-left.png" />
                <h1>find something yummy <br />with jane the piglet</h1>
                <img alt="right" className="wrap-image right" src="./images/jane-right.png" />
            </div>
            <div className="wrap-search">
            <Selectrix className="input-search"
                multiple={true}
                materialize={true}
                tags={true}
                height={300}
                options={options}
            />
            <button className="button-search" id="getQuote" onClick={props.onClick}>SEARCH</button>
            </div>
        </div>
    )
}

export default SearchComponent;









///Hooks testing

// const SearchComponent = props => {
// Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//       </button>
//         </div>
//     );
// }


//// Working Class Component
// class SearchComponent extends Component {

//     state = {
//         text: "",
//         author: ""
//     }

//     getList = () => {
//         const prefix = "https://cors-anywhere.herokuapp.com/";
//         const quoteUrl = "https://api.quotable.io/random";
//         // const quoteUrl = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3";
//         fetch(prefix + quoteUrl, { cache: "no-store" })
//             .then(res => res.json())
//             // .then(data => console.log(data))
//             .then(this.createRecipe);
//     }

//     createRecipe = input => {
//         this.setState({ text: input.content, author: input.author })
//     }

//     buttonHandle = () => {
//         this.getList();
//     }

//     render() {

//         return (
//             <div>
//                 <h1>SearchComponent</h1>

//                 {/* <EditableSelect
//                     options={["1", "2", "3"]}
//                     // value={selectedOption}
//                     getOptionValue={(option) => option.id}
//                     getOptionLabel={(option) => option.name}
//                     createOption={(text) => { return { id: 1, name: text } }}
//                     // onChange={(ev, option) => ...}
//                 /> */}

//                 <div>
//                     <p>{this.state.text}</p>
//                     <p>{this.state.author}</p>
//                 </div>
//                 <button id="getQuote" onClick={() => { this.buttonHandle() }}> RANDOM QUOTE </button>
//                 <RecipiesList text={this.state.text} author={this.state.author} />
//             </div>
//         )
//     }
// }





//// Simple presentational component 


