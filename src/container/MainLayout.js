import React from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import RecipiesList from "../components/RecipiesList/RecipiesList";
import './MainLayout.scss';

/// Desired API

const dataResults = [{ "title": "Roasted Garlic Grilling Sauce \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n", "href": "http:\/\/www.kraftfoods.com\/kf\/recipes\/roasted-garlic-grilling-sauce-56344.aspx", "ingredients": "garlic, onions, hot sauce", "thumbnail": "http:\/\/img.recipepuppy.com\/634118.jpg" }, { "title": "Steamed Mussels I", "href": "http:\/\/allrecipes.com\/Recipe\/Steamed-Mussels-I\/Detail.aspx", "ingredients": "garlic, mussels, onions", "thumbnail": "http:\/\/img.recipepuppy.com\/29318.jpg" }, { "title": "Braised Beef and Onions", "href": "http:\/\/www.epicurious.com\/recipes\/food\/views\/Braised-Beef-and-Onions-232969", "ingredients": "allspice, garlic, onions", "thumbnail": "http:\/\/img.recipepuppy.com\/103021.jpg" }, { "title": "Dashi Basic Korean Kelp Stock Recipe", "href": "http:\/\/www.grouprecipes.com\/508\/dashi-basic-korean-kelp-stock.html", "ingredients": "anchovies, garlic, onions", "thumbnail": "http:\/\/img.recipepuppy.com\/351817.jpg" }, { "title": "Oven-Saut&#233;ed Onions and Garlic", "href": "http:\/\/find.myrecipes.com\/recipes\/recipefinder.dyn?action=displayRecipe&recipe_id=1860015", "ingredients": "onions, garlic, olive oil", "thumbnail": "http:\/\/img.recipepuppy.com\/527595.jpg" }, { "title": "Three-in-One Meals Meaty Tomato Sauce", "href": "http:\/\/find.myrecipes.com\/recipes\/recipefinder.dyn?action=displayRecipe&recipe_id=1857779", "ingredients": "ground beef, onions, garlic", "thumbnail": "http:\/\/img.recipepuppy.com\/555389.jpg" }, { "title": "\nPerfect Roast Chicken Recipe\n\n", "href": "http:\/\/cookeatshare.com\/recipes\/perfect-roast-chicken-41630", "ingredients": "onions, garlic, salt", "thumbnail": "http:\/\/img.recipepuppy.com\/806946.jpg" }, { "title": "\nMexican Rice Recipe\n\n", "href": "http:\/\/cookeatshare.com\/recipes\/mexican-rice-47559", "ingredients": "onions, garlic, crisco", "thumbnail": "http:\/\/img.recipepuppy.com\/816298.jpg" }, { "title": "\nCreamed Zucchini Recipe\n\n", "href": "http:\/\/cookeatshare.com\/recipes\/creamed-zucchini-60366", "ingredients": "zucchini, onions, garlic", "thumbnail": "http:\/\/img.recipepuppy.com\/821781.jpg" }, { "title": "\nChile Con Queso (Spicy Cheese Dip) Recipe\n\n", "href": "http:\/\/cookeatshare.com\/recipes\/chile-con-queso-spicy-cheese-dip-2037", "ingredients": "salsa, onions, garlic", "thumbnail": "http:\/\/img.recipepuppy.com\/823756.jpg" }]

// const dataResults = [{"image":"image"}];

// console.log(dataResults)

class MainLayout extends React.Component {
    
    
    state = {
        recipiesList: null,
        // recipiesList: dataResults,
        inputData: ''
    }
    // componentDidMount() {
    //     this.getList();
    // }
    // componentDidUpdate() {
    //     if (this.state.recipiesList !=== "")
    // }
    
    getList = () => {
        this.setState({ recipiesList: dataResults})
        console.log(this.state.recipiesList)
        // return this.state.dataResults


        // const prefix = "https://cors-anywhere.herokuapp.com/";
        // const quoteUrl = "https://api.quotable.io/random";
        // // const quoteUrl = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3";
        // console.log(this.state.inputData)
        // fetch(prefix + quoteUrl + '?i=' + this.state.inputData)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .then(this.createRecipesList);
    }

    createRecipiesList = data => {
        this.setState({ recipiesList : data.results})
    }

    buttonHandle = () => {
        this.getList();
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
            </div>
        );
    }
}

export default MainLayout;



    // Testing Fetch as desired API throws Server Error



// class MainLayout extends React.Component {

//     state = {
//         text: '',
//         author: '',
//         inputData: ''
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

//     createRecipe = data => {
//         console.log(data)
//         this.setState({ text: data.content, author: data.author })
//     }

//     buttonHandle = () => {
//         this.getList();
//     }

//     valueHandle = value => {
//         console.log(value)
//         console.log(value.map(x => x.label).toString())
//         const inputData = value.map(x => x.label).toString();
//         this.setState({ inputData: inputData });
//     }

//     render() {
//         return (
//             <div className="main-component">
//                 <SearchComponent onChange={value => this.valueHandle(value)} onClick={() => { this.buttonHandle() }} />
//                 <RecipiesList text={this.state.text} author={this.state.author} />
//             </div>
//         );
//     }
// }

// export default MainLayout;