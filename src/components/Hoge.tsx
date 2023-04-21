'use client';

import { useQuery, gql, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const GET_LOCATIONS = gql`
query findCompanies {
  companies {
    id
    name
  }
}
`;


export function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.companies.map(({ id, name }: any) => (
        <div key={id}>
          <p>{id}</p>
          <p>{name}</p>
        </div>
      ))}
    </div>
  )
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://btob-app-template-server.an.r.appspot.com/',
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