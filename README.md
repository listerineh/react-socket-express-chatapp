# Socket Chatapp

- [About the application](#about-the-application)
- [Stack](#stack)
- [Installation & Setup](#installation--setup)
    - [Requirenments](#requirenments)
    - [Steps](#steps)
    - [Setup the project](#setup-the-project)
- [Run the project](#run-the-project)
- [Contributions](#contributions)
    - [For branches](#for-branches)
    - [For commits](#for-commits)
    - [For pull requests](#for-pull-requests)

## About the application

We're trying to create a web application similar to Discord just for fun and learning 🚀.

## Stack

- Node
- React JS
- Socket.io
- Tailwind

## Installation & Setup

### Requirenments

- Git
- Node 16.x
- Make

### Steps

First, you need to clone the repo locally:

```
git clone https://github.com/listerineh/react-socket-express-chatapp.git
```

### Setup the project

In the root path of the project, run:

```
make prepare
```

## Run the project

In the root path of the project, run:

- To only start the frontend:

```
make start-frontend
```

- To only start the backend:

```
make start-backend
```

- To start frontend & backend:

```
make start
```

## Contributions

If you want to contribute to this project, you'll need to follow the next recommendations:

### For branches

You'll need to create a branch for every change that you want to make to the code following this format:

_"prefix/descriptive-branch-name-separeted-by-hyphens"_

Example:

```
git checkout -b "feature/new-navbar-menu-in-the-ui"
```

Prefixes:

- fix: for fixing any functionallity of the application.
- feature: for adding a new functionallity to the application.
- bug: to repare a bug in the application.
- hotfix: to repare/add/delete something in the ```main``` branch of the application.

### For commits

In every commit that you make, you'll need to follow the next format:

_"prefix: the change that you made"_

Example:

```
git commit -m "add: new class to define the user"
```

Prefixes:

- add: to describe that you're adding something.
- fix: to describe that you're fixing something.
- delete: to describe that you're deleting something.
- test: to describe that you're testing something.

### For pull requests

Every branch need to show their changes with a pull request, this PR needs to have a description following the template that automatically fill it.

The name of the PR will follow the next format:

-"Prefix: Simple description of the PR"_

Prefixes:

- Fix: for fixing any functionallity of the application.
- Feature: for adding a new functionallity to the application.
- Bug: to repare a bug in the application.
- Hotfix: to repare/add/delete something in the ```main``` branch of the application.

**Note: Every PR need a reviewer that validate and tests it.**
