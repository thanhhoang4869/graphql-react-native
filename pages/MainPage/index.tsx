import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useMutation, useQuery} from '@apollo/client';
import {CREATE_POST_MUTATION, GET_ALL_POST_QUERY} from '../../gql/query';
import PostItem from '../../components/PostItem';

const MainPage = () => {
  //Get all post with pagination
  const options = {
    paginate: {
      page: 1,
      limit: 5,
    },
  };

  const getAllPostResponse = useQuery(GET_ALL_POST_QUERY, {
    variables: {
      options,
    },
  });

  console.log(JSON.stringify(getAllPostResponse.data, null, 2));

  //Create new post
  const input = {
    title: 'My new post',
    body: 'My new post body',
  };

  const [createPost, createPostResponse] = useMutation(CREATE_POST_MUTATION, {
    variables: {
      input,
    },
  });

  const [newPost, setNewPost] = React.useState<any>([]);

  const onCreatePost = async () => {
    createPost();

    const {loading, error, data} = createPostResponse || {};

    if (loading === false && error === undefined && data !== undefined) {
      Alert.alert('Post created');
      console.log('Create new post response', JSON.stringify(data, null, 2));
      setNewPost(data.createPost);
    } else {
      console.log(error);
    }
  };

  //See new post
  const onSeeNewPost = () => {
    const newPostString = `
      ID: ${newPost.id} \n
      Title: ${newPost.title} \n
      Body: ${newPost.body}
    `;

    Alert.alert('New post', newPostString);
  };

  return (
    <>
      <Text style={styles.title}>List of Posts</Text>

      <FlatList
        data={getAllPostResponse.data?.posts?.data}
        renderItem={({item}) => <PostItem post={item} />}
        keyExtractor={item => item.id}
      />
      <Button
        onPress={() => {
          onCreatePost();
        }}
        title="Create post"
      />

      <View
        style={{
          marginTop: 30,
        }}
      />

      <Button
        title="See new post"
        onPress={() => {
          onSeeNewPost();
        }}
      />

      <View
        style={{
          marginTop: 30,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainPage;
