/**
 * GraphQL with React Native
 * https://studio.apollographql.com/public/countries/variant/current/explorer
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Continents from './components/Continents';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.title}>Continents with GraphQL</Text>

        <Continents />
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
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
