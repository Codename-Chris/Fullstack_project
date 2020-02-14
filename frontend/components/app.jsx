import React from 'react';
import {
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import Footer from './footer/footer'

import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import SplashPage from '../splash_page/splash_page';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        {/* <header>
            <Link to="/" className="header-link"><h1>Celp</h1></Link>
        </header> */}
        <Switch>
            <AuthRoute exact path="/login" component={LogInContainer} />
            <AuthRoute exact path="/signup" component={SignUpContainer} />
            <Route exact path="/" component={SplashPage}/>
        </Switch>
        <Footer />
    </div>
);

export default App;