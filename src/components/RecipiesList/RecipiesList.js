import React from 'react';
import './RecipiesList.scss';

class RecipiesList extends React.Component {

    state = {
        page: 1,
        recipiesList: []
    }

    handlePage = value => e => {
        let id = e.target.id;
        this.setState({ page: id });
    }

    static getDerivedStateFromProps(props, recipiesList) {
        if (props.recipiesList !== recipiesList) {
            return { recipiesList: props.recipiesList };
        }
        else return recipiesList;
    }


    render() {

        const dataset = this.props.recipiesList;
        const pageSet = this.state.page;
        const offset = (pageSet - 1) * 10
        const paginatedItems = dataset.slice(offset).slice(0, 10)
        const pages = Math.ceil(dataset.length / 10);
        const pageNumbers = Array.from({ length: pages }, (x, page) => ++page);

        return (

            <div className="list-wrapper">

                {paginatedItems.map((item, index) => (

                    <div className="list-item" key={index}>
                        <h3>{item.recipe.label}</h3>
                        <div className="image-and-tags-wrapper">
                            <img className="list-image" alt="thubnail" src={item.recipe.image} />
                            <div className="list-ingredients-tags">
                                {item.recipe.healthLabels.map((item, index) => (
                                    <a key={index} className="tag" href="https://www.lidl.com/" target="blank">{item}</a>))}
                            </div>
                        </div>
                        <a className="list-item-link" href={item.recipe.url} target="blank">link to recipe</a>
                    </div>))}

                <div>
                    {pageNumbers.map(id => {
                        return (
                            <button className="pagination-button" id={id} key={id} onClick={this.handlePage(id)}>{id}</button>
                        );
                    })}
                </div>

            </div>

        )
    }
}

export default RecipiesList;