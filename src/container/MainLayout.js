import React from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import RecipiesList from "../components/RecipiesList/RecipiesList";
import './MainLayout.scss';

class MainLayout extends React.Component {

    render() {
        return (
            <div className="main-component">
                <SearchComponent />
                <RecipiesList />
            </div>
        );
    }
}

export default MainLayout;