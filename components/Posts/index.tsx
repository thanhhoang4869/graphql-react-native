import React from 'react';
import {FlatList, Text} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_ALL_POST_QUERY} from '../../gql/query';
import PostItem from '../PostItem';

const Posts = () => {
  const options = {
    paginate: {
      page: 1,
      limit: 5,
    },
  };

  const {data, loading} = useQuery(GET_ALL_POST_QUERY, {
    variables: {
      options,
    },
  });

  if (loading) {
    return <Text>Fetching data...</Text>;
  } else {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <FlatList
      data={data.posts.data}
      renderItem={({item}) => <PostItem post={item} />}
      keyExtractor={item => item.code}
    />
  );
};

export default Posts;
