import React from 'react'
import {View, Text, StyleSheet, ScrollView} 
    from 'react-native'

import HistoryEntry from './HistoryEntry'

export default class History extends React.Component{

    navigate(input, cipher, cipheredText){

        if(this.props.route.params.title === 'DECIFRAR'){

            let aux = input
            input = cipheredText
            cipheredText = aux
        }

        this.props.navigation.navigate('Encrypt', 
            {input, cipher, cipheredText})
    }

    render(){

        const {history} = this.props

        return(

            <ScrollView>
                <View style={!history.length && styles.container}>
                    
                    {!history.length && <Text style={styles.text}>
                                            Não há nada aqui...
                                        </Text>}

                    {history.map((item, index) => {
                        
                        let {input, cipher, cipheredText} = item

                        if(input.length > 37){

                            input = input.slice(0, 37) + '...'
                        }

                        if(cipheredText.length > 48){

                            cipheredText = 
                                cipheredText.slice(0, 48) + '...'
                        }

                        return (
                            <HistoryEntry key={index}
                                number={cipher}
                                title={input}
                                subtitle={cipheredText}
                                onPress={() => 
                                    this.navigate(item.input, 
                                        item.cipher, 
                                        item.cipheredText)}
                            />
                        )}
                    )}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#fefefe'
    },
    text: {

        alignSelf: 'center',
        fontSize: 20,
        color: '#bbb',
        padding: 10
    }
})