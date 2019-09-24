# Contributing

## Branching model
- `master` is the main branch.
- everything you work on should be associated to a ticket in the Github project, so it has an issue number associated.
- whenever you start to work on a new ticket, branch from `master` (update your local branch beforehand) and name the branch `issue-X` where `X` is the issue number associated to the ticket.
- once your work is ready, create a pull request from `issue-X` to `master` and assign [@goodengineer](https://github.com/goodengineer) for code review.

## Pull requests
- this project uses Circle CI for Continuous Integration. for every commit a pipeline will perform checks on the code (runs linter and tests).
- the most recent commit on the PR's branch must pass all checks before the PR can be merged
- the PR must be approved before it can be merged

## Environments
- this project has 3 environments (production, staging and review)
- production is manually updated when we want to release a new version to production
- staging is updated automatically for every commit on master
- review is there for you to show work updates on a feature branch. in order to deploy to review, simply push an empty commit with the message `[review]` and wait for Circle CI pipeline to finish.
- the link to each environment can be found in the `README.md` file
