import {gql} from 'apollo-server';

const carDefs = gql`
  type Car {
    title: String
    author: String
  }

  type Query {
    cars: [Car]
  }
`;

export default carDefs;