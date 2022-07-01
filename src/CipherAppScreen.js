import React from 'react'
import {View, ScrollView, Text, StyleSheet, Alert} 
    from 'react-native'
import {StatusBar} from 'expo-status-bar'

import Input from './Input'
import Button from './Button'

export default class CipherAppScreen extends React.Component{
    
    state = {

        query: {

            input: '',
            cipheredText: '',
            cipher: ''
        }
    }

    constructor(props){
        super(props)

        this.submitInput = this.submitInput.bind(this)
    }
    
    componentDidMount(){
        
        this._unsubscribe = this.props.navigation
            .addListener('focus', () => {
            
            const {params} = this.props.route

            if(params != null){

                const {input, cipher, cipheredText} = params
                this.setState({query: {input, cipher, 
                    cipheredText}})
            }
        });
      }
    
    componentWillUnmount(){

        this._unsubscribe();
    }

    updateInput(input){

        let {query} = this.state

        query.input = input

        this.setState({query})
    }

    updateCipher(cipher){

        const cleanCipher = cipher.replace(/[^0-9]/g, '')
        let {query} = this.state

        query.cipher = cleanCipher

        this.setState({query})
    }

    submitInput(){

        const {query} = this.state

        if(query.input !== ''){
            
            const cipher = parseInt(query.cipher)

            if(query.cipher !== '' && cipher >= 0 && cipher <= 26){
                
                query.cipheredText = 
                    this.props.action(query.input, cipher)

                this.props.addToHistory(query.input, query.cipher, 
                    query.cipheredText)

                this.setState({query})

            } else
                this.errorMessage('Cifra inválida', 
                    'Insira um valor numérico entre 0 e 26.')

        } else 
            this.errorMessage('Entrada vazia', 
                'Não há como cifrar um texto vazio!')
    }

    openHistory(){

        this.props.navigation.navigate('History', {
            
            history: this.props.history, 
            title: this.props.title
        })
    }

    errorMessage(errorTitle, errorText){

        Alert.alert('Erro: ' + errorTitle, errorText, 
            [{text: 'OK', style: 'destructive'}])
    }

    render(){

        const {query} = this.state
        const {title} = this.props

        return(

            <View style={styles.container}>
                <Input input={query.input}
                    update={(text) => this.updateInput(text)}
                    label='Insira um texto'
                    height={150}
                    multiline={true}
                />

                <View style={styles.lowerInputContainer}>
                    <Input input={query.cipher}
                        update={(text) => this.updateCipher(text)}
                        label='Cifra (0 a 26)'
                        keyboardType='number-pad'
                    />

                    <Button label={title}
                        labelStyle={styles.cipherButtonText}
                        buttonStyle={styles.cipherButton}
                        onPress={() => this.submitInput()}
                    />
                </View>

                <ScrollView style={styles.cipheredTextContainer}>
                    <Text style={styles.cipheredText}>
                        {query.cipheredText}
                    </Text>
                </ScrollView>

                <Button label='HISTÓRICO' 
                    buttonStyle={styles.historyButton}
                    labelStyle={styles.historyButtonText}
                    onPress={() => this.openHistory()}
                />
            
                <StatusBar style="light" />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#fefefe',
        padding: 10
    },
    lowerInputContainer: {

        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    cipheredTextContainer: {

        height: 300,
        margin: 5,
        padding: 10,
        borderColor: '#cacaca',
        borderWidth: 1,
        borderRadius: 10,
        shadowOpacity: 0.17,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        multiline: true
    },
    cipheredText: {

        fontSize: 16
    },
    historyButton: {

        flex: 1,
        margin: 5,
        padding: 10
    },
    historyButtonText: {

        fontSize: 20,
        color: '#08a8ff',
        fontWeight: '600'
    },
    cipherButton: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#08a8ff',
        padding: 10,
        margin: 5,
        borderRadius: 40
    },
    cipherButtonText: {

        color: '#fff',
        fontSize: 17,
        fontWeight: '500'
    }
})