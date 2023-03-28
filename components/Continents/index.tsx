import React from 'react';
import {FlatList, Text} from 'react-native';

import {useQuery} from '@apollo/client';
import {CONTINENT_QUERY} from '../../gql/query';
import ContinentItem from '../ContinentItem';

const Continents = () => {
  const {data, loading} = useQuery(CONTINENT_QUERY);

  if (loading) {
    return <Text>Fetching data...</Text>;
  }

  console.log(JSON.stringify(data.continents, null, 2));

  return (
    <FlatList
      data={data.continents}
      renderItem={({item}) => <ContinentItem continent={item} />}
      keyExtractor={item => item.code}
    />
  );
};

export default Continents;
