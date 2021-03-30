// import '../src/index.css'; //👈 The app's CSS file goes here
import 'sanitize.css'
import '../my-app/styles/global.scss';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};