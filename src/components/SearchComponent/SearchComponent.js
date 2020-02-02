import React from 'react';
// import React, { Component } from 'react';
import './SearchComponent.scss';
// import RecipiesList from '../RecipiesList/RecipiesList';
// import React, { useState } from 'react';
import Selectrix from "react-selectrix";


const options = [
    {
        key: "javascript",
        label: "Javascript"
    },
    {
        key: "go",
        label: "Go"
    },
    {
        key: "ruby",
        label: "Ruby On Rails"
    },
    {
        key: "php",
        label: "PHP"
    }
]

const SearchComponent = props => {
// class SearchComponent extends Component {



    // render() {
        
          return (
        <div>
                  <Selectrix
                      multiple={true}
                      materialize={true}
                      tags={true}
                      options={options}
                      onChange={props.onChange}
                    //   onChange={value => console.log(value)}
                  />
            <button id="getQuote" onClick={props.onClick}> RANDOM QUOTE </button>
        </div>
    )
    // }
  
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


