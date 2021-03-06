import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import  Main  from './pages/Main';
import  Report from './pages/Report';
import  SetReport from './pages/SetReport';

const Routes  = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Acessa City'
            }
        },
        Report: {
            screen: Report,
            navigationOptions: {
                title: 'Lista de Denúncias'
            }
        },
        SetReport: {
            screen: SetReport,
            navigationOptions: {
                title: 'Denúnciar'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#909090',
                
            },
            headerTintColor: '#fff',
            headerTitleAlign: "center"
        },
    })
);

export default Routes;