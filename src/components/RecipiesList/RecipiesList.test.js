import React from 'react';
import { shallow } from 'enzyme';
import RecipiesList from './RecipiesList';


it('renders without crashing', () => {

    const recipies = [
        {
            "title": "Roasted Garlic Grilling Sauce",
            "href": "http:\/\/www.kraftfoods.com\/kf\/recipes\/roasted-garlic-grilling-sauce-56344.aspx",
            "ingredients": "garlic, onions, hot sauce",
            "thumbnail": "http:\/\/img.recipepuppy.com\/634118.jpg"
        },
        {
            "title": "Steamed Mussels I",
            "href": "http:\/\/allrecipes.com\/Recipe\/Steamed-Mussels-I\/Detail.aspx",
            "ingredients": "garlic, mussels, onions",
            "thumbnail": "http:\/\/img.recipepuppy.com\/29318.jpg"
        }
    ]

    shallow(<RecipiesList recipiesList={recipies}/>);
});