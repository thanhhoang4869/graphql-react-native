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

export const CREATE_POST_MUTATION = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;
