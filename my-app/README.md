# Steps to Create Vite React App with Jest and RTL

- create a folder for your project
- open in vscode
- run the following:

```js
npx degit fabri4c/vite-react-starter#main
```

- this will copy a repo from git that is a template project that includes different libraries including Jest and RTL
- `git init`
- `npm i`
- create a new repo on GitHub
- `git remote add origin linkToGitHubRepo`
- `git add .`
- `git commit --m "message" --m "details"`
- `git push -u origin main`

# React Testing Course for Beginners - Code and Test 3 Apps

## Github actions

- never used this before
- we click the Github actions tab in GH
- we scroll down to CI and choose 'building-and-testing-nodejs'
- we commit changes and this adds a yml file to our project
- yml contains config stuff
- examining the yml file, let's take a look at what some of it means

```js
on: push: branches: ['main'];
pull_request: branches: ['main'];
```

- this is saying our continuous integration (CI) should run on push and pull requests to the 'main' branch
- we'll run on ubuntu latest

```yml
runs-on: ubuntu-latest
```
