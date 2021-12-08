import axios from 'axios';
import { GITHUB_BASEURL_REST } from '../constants/endpoints';

export const githubApiRest = axios.create({
  baseURL: GITHUB_BASEURL_REST,
});
