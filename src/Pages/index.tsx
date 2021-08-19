import React from 'react'
import { Route, Switch} from 'react-router-dom'
import AboutUs from './AboutUs'
import Homepage from './Homepage'

const Index: React.FC = () => {
    return (
            <Switch>
                <Route exact path="/" component={Homepage}/> 
                <Route path="/About_us" component={AboutUs}/> 
            </Switch>
    )
}

export default Index
