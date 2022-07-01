import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Input = ({input, update, label, 
    keyboardType, height = 60, multiline}) => (

    <View style={styles.inputContainer}>
        <TextInput style={{height: height, outline: 'none'}} 
            value={input} 
            placeholder={label}
            placeholderStyle={styles.placeholder}
            placeholderTextColor={'#cacaca'}
            selectionColor={'#88aaee'}
            underlayColor={'transparent'}
            onChangeText={update}
            keyboardType={keyboardType}
            multiline={multiline}
        />
    </View>
)

const styles = StyleSheet.create({

    inputContainer: {

        justifyContent: 'center',
        margin: 5,
        padding: 5,
        borderColor: '#cacaca',
        borderWidth: 1,
        borderRadius: 10,
        shadowOpacity: 0.17,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0}
    },
    placeholder: {
        shadowOpacity: 0.17,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0}
    }
})

export default Input