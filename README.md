# cp-project-launchpad

A template for starting new Captivate projects with the following features:

- Cypress E2E testing
- Typescript
- Local host server which automatically updates server files with newly compiled project code (powered by dist2test)
- Jest unit testing

All features are designed to work with GitHuB Codespaces.

## Running Cypress tests

Setup based on https://github.com/cypress-io/cypress-documentation/issues/2956#issuecomment-930527836.

- Click link https://localhost:8080
- Login using `MUST_BE_SOMETHING` as password (and any username)
- Run `yarn dev`

If Cypress tests do not appear to be working, then delete the codespaces and create a new one.

## Npm scripts ordered by popularity

### Development

- dev - Fires off a number of scripts in parallel which gives us...
  - A local host server at port 8081, which can host Captivate export files for testing.
  - A watcher on the dist/index-bundle.js file. When it is updated it will update the files in Captivate on the server that match that file's name.
  - Cypress tests on port 8080, which run on the Captivate exports hosted on port 8081.

### Build scripts

- build - Default build processes which is powered by esbuild to reduce the codebase into a single file.
- build:watch - Same as above, except it watches the codebase and rebuilds every time there's a change.
- build:tsc - Build using the typescript compiler. This is useful if we want a build where the files are NOT combined into a single file. Files will end up in dist/tsc
- build:mini - Use esbuild to create a minified single file export of the code base. Good for final distribution

### Testing

#### Unit tests

- test:unit - Runs Jest unit tests (Any file in the code base ending with .test.ts)

#### End to End testing (cypress)

- test:e2e - Runs the Cypress tests live.
- cy - Boot cypress

### Linting/Formatting

- lint - Run eslint over codebase
- format - Run prettier over code base

### Reset dev environment

- clean - Clears out all generated files
- clean:dist - Clears out the dist/ folder
- clean:cypress - Clears out the folders in Cypress which are not mission critical.

### Others

- cli - Just in case we're also building a cli script for the codebase. Rarely used.
- test-server - the dist2test server which hosts our Captivate exports.
- ts-node - Util script giving us easy access to the ts-node tool.

### NPM Publishing

- prepare, prepublishOnly, preversion, version, postversion - All run at different times during the **npm publish** operation to ensure we are pushing a clean codebase.
