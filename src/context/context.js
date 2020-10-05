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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((err) => console.log(err));
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios.get(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios.get(`${followers_url}?per_page=100`),
      ])
        .then((result) => {
          const [repos, followers] = result;
          if (repos.status === "fulfilled") setRepos(repos.value.data);
          if (followers.status === "fulfilled")
            setFollowers(followers.value.data);
        })
        .catch((err) => console.log(err));

      setErrors({ show: false, msg: "" });
    } else {
      toggleError(true, `There is no user with username ${user}`);
    }
    setIsLoading(false);
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
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
