## Required tools

- Node v20.x
- Git (and connect to Github)

## Developing

Once you've cloned the project and have installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Updating the database

When you create, udpdate, and delete tables in the schema.ts file run the following commands to update the database:

```bash
# prepares and creates the migration scripts
npm run generate

# pushes the changes to the database on Supabase
npm run migrate
```

## Checking linting

> Always check linting after making updates in order to make sure the files are all uniformally formatted.

```bash
# checks for incorrect formatting
npm run lint

# formats the page to comply to Prettier standards
npm run format
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
