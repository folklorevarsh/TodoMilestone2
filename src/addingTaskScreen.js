import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetais: {
        screen: ReviewDetails
    }       
}

const addingTaskScreen = createStackNavigator(screens)

export default createAppContainer(addingTaskScreen);
