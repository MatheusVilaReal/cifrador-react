import React from "react"
import {View, Text, TouchableHighlight} 
    from "react-native"

const Button = ({label, onPress, buttonStyle, labelStyle}) => (

    <TouchableHighlight style={buttonStyle}
        underlayColor={'#dddddd'}
        onPress={onPress}>

        <View style={{flex: 1, justifyContent: 'center', 
            alignItems: 'center'}}>
            
            <Text style={labelStyle}>
                {label}
            </Text>
        </View>
    </TouchableHighlight>
)

export default Button