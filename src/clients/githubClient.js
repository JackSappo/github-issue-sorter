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
  
  getUser = () => this.session.get('/user')
  getRepos = () => this.session.get('/user/repos');
  // TODO: Handle when repo is undefined (which happens when you close one)
  getIssues = (user, repo) => this.session.get(`/repos/${user}/${repo}/issues`)
}

export default GitHubClient.instance;