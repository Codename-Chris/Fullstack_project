import React from 'react';
import {
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import Footer from './footer/footer'

import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import BusinessShowContainer from './businesses/business_show_container'
import BusinessesIndexContainer from './businesses/businesses_index_container'
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import Welcome from '../splash_page/welcome'
import ReviewFormContainer from './reviews/review_form_container'

const App = () => (
    <div>
        {/* <header>
            <Link to="/" className="header-link"><h1>Celp</h1></Link>
        </header> */}
        <Switch>
            <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
            <Route exact path="/businesses" component={BusinessesIndexContainer} />
            <Route exact path="/search" component={BusinessesIndexContainer} />
            <AuthRoute exact path="/login" component={LogInContainer} />
            <AuthRoute exact path="/signup" component={SignUpContainer} />
            <ProtectedRoute exact path="/businesses/:id/reviews" component={ReviewFormContainer} />
            <Route exact path="/" component={Welcome}/>
        </Switch>
        <Footer />
    </div>
);

export default App;