import React from 'react';
import ReactDOM from 'react-dom';

// react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

// styling
import './index.css';

// components
import App from './App';

// context
import { AuthProvider } from './context';

// pwa
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// apollographql
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

const authLink = setContext((_, { headers }) => ({ ...headers, 'Content-Type': 'application/json' }));

const client = new ApolloClient({
	link: authLink.concat(
		createUploadLink({
			uri: '/graphql',
			credentials: 'include'
		})
	),
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache'
		},
		query: {
			fetchPolicy: 'no-cache'
		},
		mutate: {
			fetchPolicy: 'no-cache'
		}
	}
});

const Wrapper = () => (
	<ApolloProvider client={client}>
		<Router>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Router>
	</ApolloProvider>
);
const ele = document.getElementById('root');
ReactDOM.render(<Wrapper />, ele);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
