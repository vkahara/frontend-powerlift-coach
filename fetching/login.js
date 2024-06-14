import { useQuery, gql } from "@apollo/client";

const LOGIN_USER = gql`
  query Query($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      id
      username
      token
    }
  }
`;
export const useUserLogin = (username, password) => {
  const { loading, error, data } = useQuery(LOGIN_USER, {
    variables: { username: username, password: password }
  });
  console.log(data);
  return { loading, error, data };
};
