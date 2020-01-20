import axios from 'axios';
import { GITHUB_KEY } from '../GITHUB_KEY';

class GitHubClient {
  constructor() {
    this.session = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 5000,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${GITHUB_KEY}`
      }
    })
  }

  static get instance() {
    if (!this.session) {
      this.session = new GitHubClient();
    }

    return this.session;
  }

  setToken(token) {
    this.session.defaults.headers.Authorization = `token ${token}`;
  }

  getRepos = () => this.session.get('/user/repos');
  // TODO: username
  getIssues = (repo) => this.session.get(`/repos/jacksappo/${repo}/issues`)
}

export default GitHubClient.instance;