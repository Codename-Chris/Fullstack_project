import React from 'react';

export default () => {
    return (
        <div className="footer">
            <div className="footer-personal">

                <div className="footer-content-item">
                    <h3>Made by</h3>
                    <p className="my-name"> Christopher Garthright </p>
                </div>

                <div className="footer-content-item">
                    <h3>Discover More</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/christopher-garthright/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="https://github.com/Codename-Chris"><i className="fab fa-github"></i> Github</a></li>
                        <li className="last-li"><a href="https://angel.co/christopher-garthright" ><i className="fab fa-angellist"></i> AngelList</a></li>
                    </ul>
                </div>
            </div>
            <img src="https://biz.yelp.com/landing/static/footer_cityscape-573fa19c843556eac5a998fc6d1f80f8.png" alt=""/>
        </div>
    )
}