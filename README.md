# Sport events typer for friendly competitions
- [Sport events typer for friendly competitions](#sport-events-typer-for-friendly-competitions)
  - [About](#about)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Usage](#usage)
  - [License](#license)
## From template readme:
  - [React + TypeScript + Vite](#react--typescript--vite)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
  
## About
This is a simple web application that allows users to type the results of sport events. The application is designed for friendly competitions, where the results are not official and the main goal is to have fun. The application is designed to be used by a small group of friends, who can create their own competitions and invite other users to join them. The application is built with React, TypeScript, and Vite.

## Technologies
- React
- TypeScript
- Vite
- Firebase
- Material-UI
- React Router
- Redux Toolkit

## Setup
1. Clone the repository
2. Install the dependencies
```bash
npm install
```
3. Create a new Firebase project and add a web app to it
4. Create a `.env` file in the root of the project and add the following environment variables:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
```
5. Run the application
```bash
npm run dev
```

## Usage
The application is designed to be used by a small group of friends. The main features of the application are:
- Creating a new competition
- Joining an existing competition
- Typing the results of sport events
- Viewing the results of sport events
- Viewing the leaderboard
- Viewing the competition details
- Viewing the user profile

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
