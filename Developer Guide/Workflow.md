## Workflow

It is important to have a good workflow when working on a large projects and large group of people. This is why this repository has rules and a workflow set up.

The workflow will be outlined below and has an assumption that a developer has been issued a task or have something to work on.

1. From the `main` create a branch using `git chechout -b <YOUR BRANCH NAME>`
2. Make your changes in your branch, make sure to make commits consistently to save progress in case stuff breaks!
3. Merge back into main:
   1. Checkout into master and get updated main branch using `git pull origin main`
   2. Checkout back into your branch and rebase using the command `git rebase -i origin/main`
   3. Push your branch to Github using the command `git push origin <YOUR BRANCH NAME`
4. Let a team lead or a review know it is ready to go!

Let us do a good job!
