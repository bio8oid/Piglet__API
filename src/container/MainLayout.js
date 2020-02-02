import React from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import RecipiesList from "../components/RecipiesList/RecipiesList";
import './MainLayout.scss';


class MainLayout extends React.Component {

    state = {
        text: '',
        author: '',
        inputData: ''
    }


    // Testing Fetch as desired API throws Server Error

    // getList = () => {
    //     const prefix = "https://cors-anywhere.herokuapp.com/";
    //     const quoteUrl = "https://api.quotable.io/random";
    //     // const quoteUrl = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3";
    //     fetch(prefix + quoteUrl, { cache: "no-store" })
    //         .then(res => res.json())
    //         // .then(data => console.log(data))
    //         .then(this.createRecipe);
    // }

    // Desired API handle

    getList = () => {
        const prefix = "https://cors-anywhere.herokuapp.com/";
        const quoteUrl = "https://api.quotable.io/random";
        // const quoteUrl = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3";
        console.log(this.state.inputData)
        fetch(prefix + quoteUrl + '?i=' + this.state.inputData)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(this.createRecipe);
    }



    createRecipe = input => {
        this.setState({ text: input.content, author: input.author })
    }

    buttonHandle = () => {
        this.getList();
    }

    valueHandle =  value => {
        console.log(value)
        console.log(value.map(x=> x.label).toString())
        const inputData = value.map(x => x.label).toString();
        this.setState({ inputData: inputData});
    }

    render() {
        return (
            <div className="main-component">
                <SearchComponent onChange={value => this.valueHandle(value)} onClick={() => { this.buttonHandle() }}/>
                <RecipiesList text={this.state.text} author={this.state.author}/>
            </div>
        );
    }
}

export default MainLayout;