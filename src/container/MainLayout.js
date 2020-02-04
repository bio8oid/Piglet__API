import React from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import RecipiesList from "../components/RecipiesList/RecipiesList";
import './MainLayout.scss';

/// Temporary data \\\
import fakeData from '../data.json';


class MainLayout extends React.Component {

    state = {
        recipiesList: null,
        inputData: ''
    }

    getList = () => {
        const prefix = "https://cors-anywhere.herokuapp.com/";
        const quoteUrl = "http://www.recipepuppy.com/api/";
        // console.log(this.state.inputData)
        fetch(prefix + quoteUrl + '?i=' + this.state.inputData)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(this.createRecipesList);
    }

    createRecipiesList = data => {
        this.setState({ recipiesList: data.results });
    }

    buttonHandle = () => {

        ///// Uncomented Line below suppose to fetch data from puppy's server \\\\\

        // this.getList();

        ///// End \\\\\


        /////   Due to Server Error App layout can be tested with these two lines \\\\

        const data = fakeData;
        this.setState({ recipiesList : data});

        ///// End \\\\\
    }

    valueHandle = value => {
        // console.log(value)
        // console.log(value.map(x=> x.label).toString())
        const inputData = value.map(x => x.label).toString();
        this.setState({ inputData });
    }

    render() {
        return (
            <div className="main-component">
                <SearchComponent onChange={value => this.valueHandle(value)} onClick={() => { this.buttonHandle() }} />
                <RecipiesList recipiesList={this.state.recipiesList} />
                <div className="logo"><h3>© bio8oid</h3></div>
            </div>
        );
    }
}

export default MainLayout;