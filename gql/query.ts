import {gql} from '@apollo/client';

export const GET_ALL_POST_QUERY = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
    }
  }
`;
