## Technology used:

- react
- tailwind

npx create-react-tailwind-app
the less tech i use the better it is

## Learned:

- Latest tailwind versions
- Craco
- gitgraph
- git2json

## Remembered:

- yarn

## Complications / Questions:

- getting good data is not easy
- table scrolled what ui is suppose to behave like, header specifically
- default active for origins (first item should be opened ?)
- what is maximum size of the layout, what will happen on the extra large screens
- circle icons are different shape under origin, doesn't make sense, replaced it
- is list paginated? decision should be made if we query on the frontend (depends on pagination and in memory list size)
- what is the query applied on? makes sense to query / search only visible fields for now
- colors are hardcoded in gitgraph so need to prompt a designer for more colors (depending on expected number of branches displayed at once)
- some refs tags have no space on the right side (space added)

## Notes:

- Will recommend a UX of debounced filter, remove Filter button, add debounced on change directly on the input field ("When a user types text into the filter input, it should immediately show the
  filtered results" is confusing)
- Will prompt for a styleguide, if there would be future development on this ideally this app would be build with a theme in mind
- Compared functionality and UX with gitgraph for vscode and sourcetree
- Will make better graph library decisions, will make it actually work with commits

## Improvements:

- Graph library shows branching in a strange way, will figure out why and address it (comparing to sourcetree)

## TODO:

- Commit properly to git every day worked

- circles are too big
- Width of the browser md to 800px
- Roboto !important issue
- wierd onClick drill into NavBranch component
- theme integration, primary colors / etc
- value explicit set on search field

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
