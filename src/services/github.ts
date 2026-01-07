import axios from 'axios';

import { GET_REPOS_INFO, GET_USER_INFO, GITHUB_BASEURL_REST } from 'constants/endpoints';
import { repos } from 'constants/repos';
import { GithubRepo } from 'models/github';

const githubApiRest = axios.create({
  baseURL: GITHUB_BASEURL_REST,
});

const fetchRepo = async (name: string): Promise<GithubRepo> => {
  const { data } = await githubApiRest.get(`${GET_REPOS_INFO}/${name}`);

  return { ...data, htmlUrl: data.html_url };
};

export const fetchAllRepos = async (): Promise<GithubRepo[]> => {
  return Promise.all(repos.map(fetchRepo));
};

interface ProfileDataResponse {
  followers: number;
  publicRepos: number;
}

export const fetchProfileData = async (): Promise<ProfileDataResponse> => {
  const { data } = await githubApiRest.get(GET_USER_INFO);

  return { ...data, publicRepos: data.public_repos };
};
