# env-app

## Overview
**env-app** is a JavaScript-based project configured with Webpack for module bundling, Babel for transpilation, SASS for styling, ESLint for code linting, Jest for testing, and JSDoc for documentation generation. The project also integrates Husky and Commitlint to enforce commit message conventions.
### Prerequisites
Ensure you have **Node.js** installed on your machine.

### Installation
Clone the repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/nataliasviattseva/env-app.git
cd env-app

# Install dependencies
npm install
```
To set up the project, install the dependencies:

```sh
npm install
```

## Available Scripts

### **Build & Development**

- **`npm run dev`**: Runs linting, testing, documentation generation, and Webpack in development mode.
- **`npm run prod`**: Runs Jest tests with coverage and compiles the project using Webpack in production mode.

### **Code Quality & Documentation**

- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run test`**: Runs Jest tests.
- **`npm run doc`**: Generates documentation using JSDoc.

## Project Structure
```
/env-app
│── /src            # Source code
│── /dist           # Compiled output (generated after build)
│── /docs           # Documentation (generated using JSDoc)
│── package.json    # Project configuration and dependencies
│── webpack.config.js  # Webpack configuration
│── .eslintrc.json  # ESLint configuration
│── jsdoc.json      # JSDoc configuration
│── .husky          # Husky commit hooks
```

## Tools & Technologies Used
- **Webpack**: Bundles JavaScript, CSS, and assets.
- **Babel**: Transpiles modern JavaScript (ES6+) for browser compatibility.
- **SASS**: Preprocessor for CSS styling.
- **ESLint**: Linting tool to enforce coding best practices.
- **Jest**: JavaScript testing framework.
- **Husky**: Git hooks to enforce commit rules.
- **Commitlint**: Ensures commit messages follow the Conventional Commit standard.
- **JSDoc**: Generates API documentation from source code comments.

## Commit Message Convention
This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Example:

```
feat: add new authentication feature
fix: resolve the login page bug
chore: update dependencies
```

Husky and Commitlint ensure that commits follow this convention.

## Automation & Hooks
- **Pre-commit hooks**: ESLint and Jest run before a commit to enforce quality.
- **Commit message validation**: Commitlint checks messages for correct formatting.

## 🛠 How to Run the Project
1. **Development Mode**:
   ```sh
   npm run dev
   ```
2. **Production Build**:
   ```sh
   npm run prod
   ```

 **Happy Coding!** 



