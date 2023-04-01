/**
 * GraphQL with React Native
 * https://studio.apollographql.com/public/countries/variant/current/explorer
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Posts from './components/Posts';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.title}>List of Posts</Text>

        <Posts />
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
