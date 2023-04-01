/**
 * GraphQL with React Native
 * API and documents from https://graphqlzero.almansi.me/
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import MainPage from './pages/MainPage';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api', //API endpoint
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <MainPage />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
});

export default App;
