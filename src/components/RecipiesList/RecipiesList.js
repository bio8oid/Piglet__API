import React from 'react';
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
                                    <a key={index} className="tag" href="https://www.lidl.com/" target="blank">{item}</a>))}
                        </div>
                    </div>
                    <a className="list-item-link" href={item.href} target="blank">link to recipe</a>
                </div>
            </div>
        ))
    }
    return null;
}

export default RecipiesList;