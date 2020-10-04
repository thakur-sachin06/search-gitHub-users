import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [errors, setErrors] = useState({ show: false, msg: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry! you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  });

  const searchGitHubUser = async (user) => {
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((err) => console.log(err));
    if (response) {
      setGithubUser(response.data);
      setErrors({ show: false, msg: "" });
    } else {
      toggleError(true, `There is no user with username ${user}`);
    }
  };

  function toggleError(show, msg) {
    setErrors({ show, msg });
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        errors,
        searchGitHubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
