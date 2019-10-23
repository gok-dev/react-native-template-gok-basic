import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Pages
import Main from '~/pages/Main';

// Routes
const Routes = createAppContainer(createSwitchNavigator({ Main }));

export default Routes;
