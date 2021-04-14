# Github Pages Deploy

If you have just a regular website or just a complete front-end application using react, angular, vue or anything that doesn't have a back-end, github pages is a nice free solution for it.

we will use `gh-pages` which is a NPM module and it allows us to create a separate branch called `gh-pages` and that's where all the stuff we want to host goes.

Below is the simple method for deploying an Angular App to Github pages :

## Step 1
### Create angular app :
first of all create new angular application using :
```
ng new angular-app-name
```

---
## Step 2
### Install gh-pages module :
after installing the angular application we have to install gh-pages module using :
```
npm install gh-pages
```

---
## Step 3
### Configuration angular app for gh-pages module :
Open `package.json` file and add these lines below :

```json
{
  "scripts": {
    ...
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://yes-soft-de.github.io/yes-soft-de.github.io",
  "dependencies": {
    ...
  },
}
```
> NOTE :
* `deploy` : Is the script that will use to build, push and publish the app using  `npm run deploy` .
* `npm run build` : Build the application first
* `-d ` : d flag Refers to the directory
* `dist` : The directory name that contain all application files after build and compile
* `homepage` : The path for our repository which consists from 
    * `https://<organization>.github.io/<repositoryName>`
    * To publish an organization site, you must create a repository owned by an organization that's named <organization>.github.io  `ex : yes-soft-de.github.io`

---
## Step 4
### Create Github Repository:
The first thing to do if you want to deploy your Angular App on Github pages is to create a repo for your project, and lets called for example : `yes-soft-de.github.io`

---
## Step 5 
### Connect The Angular app with Github Repository :
Just follow all git steps `(init, add, commit, remote and push)` to initialize the repository

and after that the angular app will be on Github

---
## Step 6
### Deploy gh-pages :
If we look at branches in the repo we create we will see that we have `master` branch and we don't have the `gh-pages`, so to deploy to gh-pages all we have to do is run
```
npm run deploy
```

---
## Step 7
### Visit the App Page:
Visit the URL to your Angular app gh-pages :
* Go to the repo we create, for example : `yes-soft-de.github.io`
* After that go to `Settings > pages`
* You Will See : `Your site is published at http://yes-soft-de.github.io/`