# Developer Notes

## Technology used:

- [react](https://reactjs.org) cause its sweet 🍰
- [tailwind](https://tailwindcss.com) cause its fast
  🏃

## Learned:

- Latest tailwind versions
- Craco
- gitgraph
- git2json
- testing-library
- twin.macro

## Complications:

- Logic for coloring branches and tags
- Not many alternatives for git graph visualization (will recreate in d3 probs)
- Necessity to finish in 3 days

## Questions:

- What might be functionality of the table: header sort?, paginated? number of items at the same time
- Mobile versoin of the Figma mockups, should I hide Author, Hash and Date fields ? need to confirm
- Layout specs for xsm-xlg screens, print?
- Circle icons are different shape under origin than under local, doesn't make sense, so replaced it
- Should the first origin dropdown be always auto opened? if more than multiple origins in the list?
- What is the query applied on? makes sense to query / search only visible fields except date
- More colors for more branches
- Some branch tags in the description field has no padding from the right side? intentional?

## Notes:

- I used create-react-app to quickly bootstrap and get access to a flexiable bundler, plus its quite easy to scale from already setup bundle, just `yarn eject` will get you all configuration you possibly need
- Will recommend a UX of debounced filter, remove Filter button, add debounced on change directly on the input field ("When a user types text into the filter input, it should immediately show the filtered results" is confusing as it clashes with existing button)
- Will prompt for a styleguide, if there would be future development on this ideally this app would be build with a theme in mind
- Not a big fan of NavItem onClick, but didn't want it to be broken down component wise any otherway
- Regarding a question about noting down what i did for the build pipeline, I did the eject and fixed all outstanding issues with latest create-react-app ejects additionally modified Babel config to suit my tailwind and style-components needs

**Mobile report is not ideal**

- Performance issue can be resolved with the server and more poking at the build
- Accessibility issue can be resolved with better UI bg colors and labels for the input

![Mobile report](https://i.imgur.com/WQ113wk.png)

**Desktop repot is alright**

- Accessibility issue can be resolved with better UI bg colors and labels for the input

![Desktop report](https://i.imgur.com/yIiXoq0.png)

## Didn't do:

- Proper theming
- Better color assignment logic (right now breaks if you insert a pull request merge), getting colors per commit will make more sense, need to access graph generation
- Will make better graph library decisions; graph library shows branching in a strange way, will figure out why and address it (comparing to sourcetree)
- HEAD and origin/HEAD is not styled the same as siblings
- Tests throws on not cleaned up, didn't have enough time to investigate why
- ErrorBoundry for rendering the list fallback state when render fails
- Will implement a qicker mobile first paint

# Running the project locally

### Pre-requisites:

- `node > v14.3.0`
- `yarn`

### Setting things up:

- Clone the repository: `git clone <git tag>`
- Install dependencies: `yarn install`
- Bootstrap the project: `yarn start`
- Test the project: `yarn start`

# Getting Started with the App

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
