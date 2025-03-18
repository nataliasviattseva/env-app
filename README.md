# env-app

## Overview
**env-app** is a JavaScript project using Webpack for bundling, Jest for testing, JSDoc pour generer la documentation, ESLint for linting, SASS pour gestion de styles, and Husky for Git hooks. It includes Babel for transpiling modern JavaScript and supports React development.

## Installation

To set up the project, install the dependencies:

```sh
npm install
```

## Scripts
The project includes the following scripts:

```sh
# Build the project for production using Webpack
npm run prod

# Start a development server with Webpack and auto-open the browser
npm run dev

# Run ESLint with the specified configuration
npm run lint

# Run tests using Jest with coverage enabled
npm run test

# Generate documentation using JSDoc
npm run doc

# Initialize Husky for Git hooks
npm run prepare
```

## Git Hooks
This project uses **Husky** for managing Git hooks. The following hook is configured:

- **commit-msg**: Ensures commit messages follow conventional commit guidelines using Commitlint.

## Linting
ESLint is configured for JavaScript and React. Run the following command to check for linting issues:

```sh
npm run lint
```

## Testing
Jest is used for unit testing. To run tests with coverage:

```sh
npm run test
```

## Documentation
JSDoc is used to generate project documentation. Run the following command to generate docs:

```sh
npm run doc
```

## Dependencies

### Development Dependencies
- Babel (for JavaScript transpiling)
- Webpack (for bundling)
- ESLint (for linting)
- Jest (for testing)
- Husky (for Git hooks)
- Commitlint (for commit message enforcement)
- JSDoc (for documentation)

### Production Dependencies
- Lodash

## License
This project is licensed under the ISC License.

