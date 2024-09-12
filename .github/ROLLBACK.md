# Rollback strategy

In the event that a breaking change happens we have prepared a simple rollback branch to allow a quick reset to the latest stable version of Pathways.

To enact a rollback development teams need only pull the branch `rollback-branch` and merge this to main. That will trigger the CD Pipeline and deploy the latest stable version once more.

> Be mindful of resorting to this strategy as it will overrule any potential changes that did not get merged into the rollback branch.
> This branch was update on the date of delivery (12 September 2024) and should either be update with future changes to the codebase or be replaced entirely in favour of a different strategy.

## Step-by-step

In order to enact a rollback simply follow the steps below:

```bash
  git fetch
  git checkout rollback-branch
  git push origin rollback-branch:main --force
```
This will replace all code in `main` with the stable version on `rollback-branch`
