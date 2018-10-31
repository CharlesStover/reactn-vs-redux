# ReactN vs Redux

This repository contains a test that compares an implementation of the same application using both ReactN and Redux. The resulting applications are compared in size, speed, and memory usage.

## Foundation

The applications are bootstrapped using `create-react-app@2.1.0`, then upgraded to `react@16.7.0-alpha.0` and `react-dom@16.7.0-alpha.0`.

### reactn

The `reactn` application installs the `reactn@0.0.9` dependency.

### redux

The `redux` application installs the `react-redux@5.1.0`, `redux@4.0.1`, and `redux-thunk@2.3.0` dependencies.

## Foundation Testing

Before the implementation even occurs, these are the comparisons of merely the foundations on which the implementations are based.

An empty global state is initialized and the `App` component is connected to the global state.

### Methodology: reactn

The `App.js` file was adjusted to import from `reactn` instead of `react`.

### Methodology: redux

The `index.js` file was adjusted to create a store and implement the Provider HOC as follows:

```JavaScript
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({ }),
  applyMiddleware(thunk)
);
```

The `<App />` component was then wrapped in `<Provider store={store}>`.

The `App.js` file was adjusted to wrap the default export in the `connect` HOC.

```JavaScript
import { connect } from 'react-redux';

export default connect(
  null,
  null
)(App);
```

### File Count

The file count metric measures how many files are required to exist in your file system to implement one of these global state management packages.

The baseline, `create-react-app`, has 24,384 files. The following statistics _include_ `create-react-app`'s files.

| Application      | Files  | Files Diff.  | CRA Diff.    |
| ---------------- | ------ | ------------ | ------------ |
| reactn           | 24,396 | -213 (-0.9%) | +12  ( 0.0%) |
| redux            | 24,609 | +213 (+0.9%) | +225 (+0.9%) |

Comparisons were determined using `ls -r | measure -s Length` in Windows PowerShell.

Using ReactN will increase your file count by 0.0%.

Using Redux will increase your file count by 0.9%.

Converting from Redux to ReactN will decrease your additional file count by 0.9%.

Converting from ReactN to Redux will increase your additional file count by 0.9%.

### Production Bundle Size

The production size in bytes measures how many bytes are contained in the production-ready bundle that the end user downloads.

The baseline, `create-react-app`, is 465,572 bytes. The following statistics _include_ `create-react-app`'s files.

| Application | Size    | Size Diff.       | CRA Diff.         |
| ----------- | ------- | ---------------- | ----------------- |
| reactn      | 534,729 | -76,818 (-12.6%) | + 69,157 (+14.9%) |
| redux       | 611,547 | +76,818 (+14.4%) | +145,975 (+31.4%) |

Comparisons were determined using `ls -r | measure -s Length` in Windows PowerShell after building the application using `yarn build`.

Using ReactN will increase your production bundle size by 14.9%.
Using ReactN over Redux will decrease your additional production bundle size by 12.6%.

Using Redux will increase your production bundle size by 31.4%.
Using Redux over ReactN will increase your additional production bundle size by 14.4%.

## Application Testing

The following tests instantiate a store, reducer, render data from the store, and update that data in response to user interaction.

The store contains an integer `x` and an object `data`.
For `reactn`, these properties are on the global object, as that is a limitation of ReactN.
For `redux`, these properties are on a `demo` object, as that is a limitation of Redux.

The `App` React Component is updated to fetch data on mount and store the response in the global state.

The `App` React Component is updated to read from the global state and display the value of `x` on a button.
When the button is clicked, a reducer is used to increment the value of `x` by 1.

### Production Memory Size

The production memory size is how much memory is required to run a production build of your application.

| Application | Code   | Strings  | JS Arrays | Typed Arrays | System Objects | Total (KB) | Total (MB) | Total Diff.    |
| ----------- | ------ | -------- | --------- | ------------ | -------------- | ---------- | ---------- | -------------- |
| reactn      | 392 KB | 177 KB   | 12 KB     | 0 KB         | 1,620 KB       | 3,642 KB   | 3.6 MB     | +24 KB (+0.7%) |
| redux       | 397 KB | 184 KB   | 13 KB     | 0 KB         | 1,512 KB       | 3,618 KB   | 3.5 MB     | -24 KB (-0.7%) |

Comparisons were determined using the Memory development tool built into Chrome 68.0.3440.75 (Official Build) (64-bit) after building the application using `yarn build`.

Converting from Redux to ReactN will increase your production memory by 0.7%.

Converting from ReactN to Redux will decrease your production memory by 0.7%.

### Production Bundle Size

The production size in bytes measures how many bytes are contained in the production-ready bundle that the end user downloads.

| Application | Size w/ .map  | Size Diff. w/ .map | Size w/o .map) | Size Diff. w/o .map |
| ----------- | ------------- | ------------------ | -------------- | ------------------- |
| reactn      | 531,736       | -80,256 (-13.1%)   | 141,142        | -10,512 (-6.9%)     |
| redux       | 611,992       | +80,256 (+15.1%)   | 151,654        | +10,512 (+7.4%)     |

Comparisons were determined using `ls -r | measure -s Length` in Windows PowerShell after building the application using `yarn build` both including and excluding the `.map` files.

Converting from Redux to ReactN will decrease your production bundle size by 13.1% or 6.9%, depending on if you consider `.map` files as a part of your bundle size.

Converting from ReactN to Redux will increase your production bundle size by 15.1% or 7.4%, depending on if you consider `.map` files as a part of your bundle size.
