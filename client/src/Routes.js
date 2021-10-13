import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home.page';
import Auth from './pages/Auth/Auth.page';
import Create from './pages/Create/Create.page';
import Profile from './pages/Profile/Profile.page'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Auth/:id' component={Auth}/>
            <Route exact path='/CreateDiscussion' component={Create}/>
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path='/PrivacyPolicy' component={Create}/>
            <Route exact path='/TermsofUse' component={Create}/>
            <Route exact path='/FAQs' component={Create}/>
            <Route exact path='/Support' component={Create}/>
        </Switch>
    )
}

export default Routes
