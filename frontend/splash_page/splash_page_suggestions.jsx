import React from 'react';
// import { withRouter } from 'react-router-dom';

const SplashSuggestions = (props) => {
    
    // const handleClick = (category) => () => {
    //     debugger
    //     props.history.push({
    //         pathname: "/search",
    //         search: category,
    //     })
    // };

    return (
        <div className="splash-suggestions">
            <h2 className="suggestion-title">Find the Best Business in Town</h2>
            <div className="splash-cat-list">
                <div className="category" >
                    <a href="#/businesses/search/resturants"><img src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"></img></a>
                    <div><p>Resturants</p></div>
                </div>
                <div className="category" >
                    <a href="#/businesses/search/bar"><img src="https://images.unsplash.com/photo-1528907061761-f2aa74665321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img></a>
                    <div><p>Bars</p></div>
                </div>
                <div className="category" >
                    <a href="#/businesses/search/cafe"><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" /></a> 
                    <div><p>Cafe</p></div>
                </div>
                <div className="category" >
                    <a href="#/businesses/search/pizza"><img src="https://media-cdn.tripadvisor.com/media/photo-s/07/5e/ee/77/lotsa-pepperoni.jpg"></img></a>
                    <div><p>Pizza</p></div>
                </div>
            </div>
        </div>
    );

};

export default SplashSuggestions;