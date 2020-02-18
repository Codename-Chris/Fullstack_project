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
            <h2 className="suggestion-title">Find the Best Business in Town</h2>
            <div className="splash-cat-list">
                <div className="category" onClick={handleClick("Resturants")}>
                    <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                    <div><p>Resturants</p></div>
                </div>
                <div className="category" onClick={handleClick("Bars")}>
                    <img src="https://images.unsplash.com/photo-1528907061761-f2aa74665321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                    <div><p>Bars</p></div>
                </div>
                <div className="category" onClick={handleClick("Hotels")}>
                    <img src="https://images.unsplash.com/photo-1454388683759-ee76c15fee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <div><p>Hotels</p></div>
                </div>
                <div className="category" onClick={handleClick("Dentist")}>
                    <img src="https://images.unsplash.com/photo-1564420042700-a64e34a54c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                    <div><p>Dentists</p></div>
                </div>
            </div>
        </div>
    );

};

export default SplashSuggestions;