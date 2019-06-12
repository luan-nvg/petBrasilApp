import { createAppContainer, createSwitchNavigator , createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Page1 from '~/pages/Page1';
import Page2 from '~/pages/Page2';
// const Routes = createAppContainer(createSwitchNavigator({ Main }));

const Routes = createAppContainer(
    createStackNavigator({
      Main :  Main,
      Home: Page1,
      About: Page2,
    },{
      headerMode: 'screen',
      cardStyle: { backgroundColor: '#2C90FA' },
    })
  );
export default Routes;