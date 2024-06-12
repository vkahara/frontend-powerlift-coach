import { useQuery, gql } from "@apollo/client";

const GET_WEEK = gql`
  query week($username: String!, $week: Int!) {
    week(username: $username, week: $week) {
      days {
        exercises {
          name
          sets
          reps
          intensity
          load
          rpe
        }
      }
    }
  }
`;

export const useWeekData = (username, week) => {
  const { loading, error, data } = useQuery(GET_WEEK, {
    variables: { username, week }
  });

  return { loading, error, data };
};
