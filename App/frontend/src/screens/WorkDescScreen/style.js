import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        position: 'relative',
        width: '100%',
        height: 300,
    },
    descContainer: {
        backgroundColor: '#fff',
        flex: 1,    
        position: 'absolute',   
        bottom: 0,
        height: '70%', 
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    desc: {
        marginVertical: 20,
    },
    descTitle: {
        fontSize: 20,
        fontWeight: 600
    },
    descText: {
        marginVertical: 10,
        fontSize: 16,
        lineHeight: 25
    },
    subscribe: {
        backgroundColor: '#F7FF16',
        marginVertical: 50,
        paddingVertical: 12,
        borderRadius: 30,
    },
    textSubscribe: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000000'
    }
    
})
