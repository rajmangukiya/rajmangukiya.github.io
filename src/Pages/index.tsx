import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Main from './Main'

const Index: React.FC = () => {
    return (
            <Switch>
                <Route exact path="/" component={Main}/> 
            </Switch>
    )
}

export default Index
