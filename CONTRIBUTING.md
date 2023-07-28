# Contributing to Neulabs Handbook Constructs

## Code of Conduct

Please read [the full text](https://github.com/neulabscom/neulabs-handbook/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Issues

We have two type of issue:

1. Bug report
2. Feature reqeust
2. Question

## Development

### Online one-click setup for contributing

Reuirements:

- Node >= v16.14.0
- Yarn >= 1.22

Setup env:

`yarn && yarn start`

## Pull Requests

**Do you want to create/update/delete pages?**

You will have to open the pr ask 2 or more people for revision.
The addition or update must conform to the structure of the handbook. 

For the suggestion of a new section, you can create an issue and possibly implement your solution which will then have to go through approval


**How should I write my commits when merging?**

You have to select _Squash and merge_ and choose a commit message compliant with Conventional Commit messages.

The most important prefixes you should have in mind are:

- `fix:` which represents bug fixes, and correlates to a SemVer patch.
- `feat:` which represents a new feature, and correlates to a SemVer minor.
- `feat!:`, or `fix!:`, `refactor!:`, etc., which represent a breaking change (indicated by the !) and will result in a SemVer major.

Our super set:

- `feat/fix(group): added/deleted/updated PAGE ID`

Example:

- `feat(organization): updated "data-team" with etc..`
- `fix(organization): updated "data-team" with etc..`