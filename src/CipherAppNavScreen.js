import {StyleSheet} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import CipherAppScreen from './CipherAppScreen'
import History from './History'
 
const Stack = createStackNavigator()

const CipherAppNavScreen = ({action, addToHistory, 
    history, title}) => (

    <Stack.Navigator style={styles.container}>

        <Stack.Screen name='Encrypt'
            options={{title: 'Insira um texto'}}>
            {(props) => <CipherAppScreen {...props} action={action} 
                    title={title}
                    addToHistory={addToHistory}/>}
        </Stack.Screen>
        
        <Stack.Screen name='History' 
            options={{title: 'Histórico'}}>
            {(props) => <History {...props} history={history}/>}
        </Stack.Screen>

    </Stack.Navigator>
)

const styles = StyleSheet.create({

    container: {

        flex: 1,
    }
})

export default CipherAppNavScreen