import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} 
    from '@react-navigation/material-bottom-tabs'

import {strCipher, strDecipher} from './src/Ciphers'
import CipherAppNavScreen from './src/CipherAppNavScreen'

const Tab = createMaterialBottomTabNavigator()

export default class App extends React.Component{

    state = {

        history: []
    }

    constructor(){
        super()

        this.addToHistory = this.addToHistory.bind(this)
    }

    addToHistory(input, cipher, cipheredText){

        this.setState({history: [...this.state.history, 
            {input, cipher, cipheredText}]})
    }

    render(){
        return(

            <NavigationContainer style={styles.container}>

                <Tab.Navigator>
                    <Tab.Screen name='Criptografar'>
                        {(props) => 
                            <CipherAppNavScreen
                                action={strCipher}
                                title='CIFRAR'
                                addToHistory={this.addToHistory}
                                history={this.state.history} 
                                {...props}
                            />}
                    </Tab.Screen>

                    <Tab.Screen name='Descriptografar'>
                        {(props) => 
                            <CipherAppNavScreen 
                                action={strDecipher}
                                title='DECIFRAR'
                                addToHistory={this.addToHistory}
                                history={this.state.history}
                                {...props}
                            />}
                    </Tab.Screen>
                </Tab.Navigator>

                <StatusBar style='light'/>
            </NavigationContainer> 

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    }
})