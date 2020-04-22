import React from 'react';
// import { withRouter } from 'react-router-dom';

const SplashSuggestions = (props) => {

    const handleClick = (category) => () => {
        props.history.push({
            pathname: "/search",
            search: category,
        })
    };

    return (
        <div className="splash-suggestions">
            <h2 className="suggestion-title">Find the Best Business in Town $$$$</h2>
            <div className="splash-cat-list">
                <div className="category" onClick={handleClick("Resturants")}>
                    <a href="#/businesses"><img src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"></img></a>
                    <div><p>Resturants</p></div>
                </div>
                <div className="category" onClick={handleClick("Bars")}>
                    <a href="#/businesses"><img src="https://images.unsplash.com/photo-1528907061761-f2aa74665321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img></a>
                    <div><p>Bars</p></div>
                </div>
                <div className="category" onClick={handleClick("Hotels")}>
                    <a href="#/businesses"><img src="https://images.unsplash.com/photo-1454388683759-ee76c15fee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /></a> 
                    <div><p>Hotels</p></div>
                </div>
                <div className="category" onClick={handleClick("Dentists")}>
                    <a href="#/businesses"><img src="https://images.unsplash.com/photo-1564420042700-a64e34a54c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img></a>
                    <div><p>Dentists</p></div>
                </div>
            </div>
        </div>
    );

};

export default SplashSuggestions;