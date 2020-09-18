import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Location>
      {({ location }) => {
        console.log(location)
        return <p>The location is {location.pathname}</p>
      }}
    </Location>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
