import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity}
    from 'react-native'

const HistoryEntry = ({number, title, subtitle, onPress}) => (

    <TouchableOpacity
        onPress={onPress}>
        <View style={styles.container}>

            <View style={styles.numberContainer}>
                <Text style={styles.number}>
                    {number}
                </Text>
            </View>

            <View style={styles.titlesContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({

    container: {

        margin: 10,
        height: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: '#333',
        borderBottomWidth: 1
    },
    numberContainer: {

        flexDirection: 'column',
        justifyContent: 'center',
        margin: 12
    },
    number: {

        fontSize: 30
    },
    titlesContainer: {

        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {

        fontSize: 18
    },
    subtitle: {

        fontSize: 14,
        color: '#555'
    }
})  

export default HistoryEntry