import axios from 'axios';

class GitHubClient {
  constructor() {
    this.session = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 5000,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: ''
      }
    });
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

  getUser = () => this.session.get('/user');
  getRepos = () => this.session.get('/user/repos');
  getIssues = (user, repo) => this.session.get(`/repos/${user}/${repo}/issues`);
}

export default GitHubClient.instance;
