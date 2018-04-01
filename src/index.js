import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// Import modules
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-client-preset'

// Create connection link
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GQL_ENDPOINT })

// Authenticate with token
const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('scotch_auth_gcool_token')
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})
const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

// Configure client with link
const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache()
})

// Render App component with Apollo provider
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
