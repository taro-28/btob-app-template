'use client';

import { useQuery, gql, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const GET_LOCATIONS = gql`
query findTodos {
  todos {
    text
    done
    user {
      name
    }
  }
}
`;


export function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.todos.map(({ text, done, user }: any) => (
        <div key={text}>
          <p>{text}</p>
          <p>{done}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8080/query',
    credentials: "same-origin"
  })
});

export const Fuga = ()=> {
  return (
    <ApolloProvider client={client}>
      <DisplayLocations />
    </ApolloProvider>
  )
}