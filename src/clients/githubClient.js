import axios from 'axios';
import { GITHUB_KEY } from '../GITHUB_KEY';

class GitHubClient {
  constructor() {
    console.log('~= CREATING NEW INSTANCE')
    this.session = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 5000,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${GITHUB_KEY}`
      }
    })
  }

  static setKey(token) {
    this.session.defaults.headers.Authorization = `token ${token}`;
  }

  static get instance() {
    console.log('~= GETTER')
    if (!this.session) {
      this.session = new GitHubClient();
    }

    return this.session;
  }

  getRepos = () => this.session.get('/user/repos');
  // TODO
  getIssues = (repoId) => this.session.get()
}

export default GitHubClient.instance;