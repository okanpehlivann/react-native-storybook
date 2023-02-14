/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StorybookUIRoot from './storybook';

const storyBook = 'false';

AppRegistry.registerComponent(appName, () =>
  storyBook === 'true' ? StorybookUIRoot : App,
);
