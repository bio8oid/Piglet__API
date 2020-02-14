import React from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import RecipiesList from "../components/RecipiesList/RecipiesList";
import './MainLayout.scss';

class MainLayout extends React.Component {

    state = {
        recipiesList: null,
        inputData: ''
    }

    getList = async () => {
        const prefix = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.edamam.com/search?q=";
        const apiId = "&app_id=19b48c8f";
        const apiKey = "&app_key=61efd35f9492002d6e7b57f58fa90f63";
        const rangeOfItems = "&from=0&to=50";

        try {
            const res = await fetch(prefix + url + this.state.inputData + apiId + apiKey + rangeOfItems);
            const data = await res.json();
            this.createRecipiesList(data);
        } catch (err) {
            console.log(err);
        }
    }

    createRecipiesList = data => {
        this.setState({ recipiesList: data.hits });
    }

    buttonHandle = () => {
        this.getList();
    }

    valueHandle = value => {
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