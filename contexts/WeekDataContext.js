import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const WeekDataContext = createContext();

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

export const WeekDataProvider = ({ children, username, week }) => {
  const { loading, error, data } = useQuery(GET_WEEK, {
    variables: { username, week }
  });
  const [weekData, setWeekData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (data) {
      setWeekData(data.week);
    }
  }, [data]);

  return (
    <WeekDataContext.Provider
      value={{ weekData, loading, error, selectedDay, setSelectedDay }}
    >
      {children}
    </WeekDataContext.Provider>
  );
};

export const useWeekData = () => {
  return useContext(WeekDataContext);
};
