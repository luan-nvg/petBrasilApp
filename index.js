import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
console.ignoredYellowBox = ['Remote debugger'];

AppRegistry.registerComponent(appName, () => App);
