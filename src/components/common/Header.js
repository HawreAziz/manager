import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



const Header = ({ headerText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>{headerText}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        height: 50,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset:  { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 10,
    },
    headerStyle: {
        fontSize: 22,
        alignSelf: 'center'
    }
});

export  { Header };
