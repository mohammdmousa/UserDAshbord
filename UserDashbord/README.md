# UserDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.
This project is a web application built using Angular, designed to display a list of users and view details for each user. The application uses the [ReqRes](https://reqres.in/) API to fetch user data.
## Components

The application consists of three main components:

1. **SearchComponent**
2. **UserDetailComponent**
3. **UserCardComponent**


### 1. UserCardComponent

- **Description**: Displays a list of all users. Data is fetched from the API and displayed in a list format.
- **Features**:
  - Fetches a list of users from the API when the component is loaded.
  - Displays user names,id  and avatars.
  - Allows navigation to user details when a button is clicked.
  ### 2. UserDetailComponent

- **Description**: Displays details for a specific user. Information such as the full name and user avatar is shown.
- **Features**:
  - Fetches user details based on the selected user ID.
  - Displays user information in a formatted view.
  - Provides a way to return to the user list.

  ## How to Run

To get started with the application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohammdmousa/UserDashbord
   cd repo-name
   
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
