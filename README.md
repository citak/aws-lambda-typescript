# AWS Lambda TypeScript

> A template to create AWS Lambda functions with TypeScript using Node 18.


## Prerequisites

This project requires NodeJS (version 18 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
9.3.1
v18.14.0
```

## Table of contents

- [AWS Lambda TypeScript](#aws-lambda-typescript)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
    - [Deployment](#deployment)
  - [Code Style](#code-style)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone git@github.com:citak/aws-lambda-typescript.git
$ cd aws-lambda-typescript
```

To install and set up the lambda, run:

```sh
$ npm install
```

## Environment Variables

Make sure to set your environment variables in you .env file:

* **EXAMPLE_VAR**: Some Info

## Usage


### Running the tests

To execute the unit tests, run *npm test*. The tests will automatically run anytime
you push commits to the repository (and will stop the push if any of the tests fail).

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder


## Code Style

The JavaScript code must conform to the standard set of style guidelines provided by
[ESLint](https://typescript-eslint.io/linting/configs#recommended-configurations). see the *.eslintrc.js* file for more details.

Your code will be checked for syntax errors and style errors anytime you
*git commit*. Please do not circumvent these checks! Some simple style errors can be
fixed automatically by using the handy *npm run lintFix* tool.
