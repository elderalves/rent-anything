import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType
} from 'graphql';

import greeting from './queries/greeting';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      greeting
    }
  })
});

export default schema;
