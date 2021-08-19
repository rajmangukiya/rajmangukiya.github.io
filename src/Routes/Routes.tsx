import React from 'react'
import { Switch } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Index from '../Pages'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Layout>
                <Index />
            </Layout>
        </Switch>
    )
}

export default Routes
