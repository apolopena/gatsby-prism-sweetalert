import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

import Layout from '../components/layout'

const SecondPage = ({ location }) => (
  <Layout>
    <h1>Hi from the second page</h1>
    {console.log(location)}
    <p>The location is {location.pathname}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
