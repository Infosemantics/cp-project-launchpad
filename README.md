# cp-project-launchpad

A template for starting new Captivate projects with the following features:
- Cypress E2E testing
- Typescript (TBA)
- Local host server which automatically updates server files with newly compiled project code (TBA developed in dist2test project)
- Jest unit testing (TBA)

All features are designed to work with GitHuB Codespaces.

## Setup for Cypress tests
Setup based on https://github.com/cypress-io/cypress-documentation/issues/2956#issuecomment-930527836.

- Click link https://localhost:8080
- Login using `MUST_BE_SOMETHING` as password (and any username)
- Run `yarn test`

If Cypress tests do not appear to be working, then delete the codespaces and create a new one.
