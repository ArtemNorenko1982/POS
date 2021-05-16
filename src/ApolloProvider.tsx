import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { Token } from './constants/LocalStorageConstants';
import { API_URL, API_PORT } from './appConfig';

const token = localStorage.getItem(Token);

const client = new ApolloClient({
  uri: `${API_URL}:${API_PORT}`,
  cache: new InMemoryCache(),
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
});

export default (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
