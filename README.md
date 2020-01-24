# Genbank Database Parser

## Purpose
This app serves to allow a user to access their available repos, and for each, access and sort the repo's issues how they'd like.

## Getting Started
1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Get a GitHub Personal Access Token for use with the app: https://github.com/settings/tokens/new

## Component Map
```
App
|_Header
|_Loader
|_RepoList
| |_Repo
|
|_IssueList
  |_Issue
  |_Loader
```

## Design Decisions
### Visual
I went with a very simplistic design. It is a single-column design when only viewing repos, and becomes two columns when the issue list is opened.
### State
The app uses Redux, and as such each individual component is able to directly access the store for any relevant props or actions.
### Caching
Redux offers a very handy subscribe method, allowing me to serialize state and persist it in localStorage on change.
### Error Handling
For the most part, errors are limited to fetching repos and fetching issues, and are handled and rendered accordingly.

## Wishlist
* Pagination: A user could realistically have thousands of issues (or repos), so it would be beneficial to paginate these.
* Alternate caching methods: While persisting state to localStorage is extremely convenient, with a high enough repo/issue count this will quickly become a gigantic stringified object. I would want to investigate using indexDB or chrome storage for this use case.
* Actual persistence: Of course, persisting this issue ordering to the Github API would be very convenient. Not only for the sake of permanence, but the current method is also very vulnerable to data drift, if another user made any changes.
* SCSS preprocessor: CSS quickly got out of hand, and SCSS would greatly clarify what the stylesheets achieve.
* Sorting UX: Would be fun to implement a UX where the user is able to drag each item to its destination, rather than clicking arrows.
* Single-column design: General improvements
* Issue search functionality

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
