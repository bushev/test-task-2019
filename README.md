### Overview

Please, create an Ionic (Angular) application with 2 screens:

1. Login screen
2. List of tasks

This repository already contains the base application, please use it for a quick start. You can run and test application with the command: `ionic serve`

#### Login screen

The login screen should have a username and password text fields. Authentication should be implemented using [AWS Amplify](https://aws-amplify.github.io) library.

#### List of tasks

List of tasks should display a list of items from API. Each item should have a **name** and **last modified** time.

#### Cognito credentials

- User Pool ID: *us-east-1_MPvCeCJvh*
- Client ID: *1sfp40ks5bvhi3j8kgga7gktd2*

User credentials for sign in

- Username: *test@example.com*
- Password: *123456*

#### API

Use `GET https://7vxy32ez3d.execute-api.us-east-1.amazonaws.com/dev/tasks` to fetch a list of tasks. The request should has `Authorization` header: `Bearer <token>`

### Workflow

1. Clone this repository
2. Make changes in your repository
3. Create a PR to merge changes into this repository
