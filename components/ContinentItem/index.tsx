import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export type ContinentItemsProp = {
  continent: {
    code: string;
    name: string;
  };
};

const ContinentItems = ({continent}: ContinentItemsProp) => {
  return (
    <Pressable>
      <View style={styles.item}>
        <Text style={styles.name}>{continent.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  name: {
    fontSize: 20,
    color: 'black',
  },
});

export default ContinentItems;
