import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export type PostItemsProp = {
  post: {
    id: string;
    title: string;
  };
};

const PostItems = ({post}: PostItemsProp) => {
  return (
    <Pressable>
      <View style={styles.item}>
        <Text style={styles.id}>ID: {post.id}</Text>
        <Text style={styles.title}>Post title: {post.title}</Text>
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
  id: {
    fontSize: 20,
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PostItems;
