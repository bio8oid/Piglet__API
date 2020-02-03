import React from 'react';
import './SearchComponent.scss';
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
                    onChange={props.onChange}
                />
                <button className="button-search" id="getQuote" onClick={props.onClick}>SEARCH</button>
            </div>
        </div>
    )
}

export default SearchComponent;