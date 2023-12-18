## Required tools

> Node v20.x

## Developing

Once you've cloned the project and have installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Updating the database

> Create, udpdate, and delete tables in the schema.ts file.
> Generate migration using `npm run generate`
> Migrate the new changes using `npm run migrate`

## Checking linting

> Always check linting after making updates in order to make sure the files are all uniformally formatted.
> Look at potential issues using `npm run lint`
> Fix potential issues using `npm run format`

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
