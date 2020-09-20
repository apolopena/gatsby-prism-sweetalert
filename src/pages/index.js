import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

import { useEffect } from 'react'

import Prism from 'prismjs'

import Layout from '../components/layout'

import 'antd-mobile/dist/antd-mobile.css'
import { Button } from 'antd-mobile'

const sampleCode = `
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
`

const IndexPage = () => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Layout>
      <h1>Hi people</h1>
      <Location>
        {({ location }) => {
          console.log(location)
          return <p>The location is {location.pathname}</p>
        }}
      </Location>
      <Button>antd-mobile button</Button>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className="code-container">
        <pre>
          <code className="language-jsx">{sampleCode}</code>
        </pre>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
