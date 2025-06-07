import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100
    },
    FormContain: {
        width: 355,
        height: 'auto',
        padding: 20,
        borderRadius: 30,   
        backgroundColor: '#FFFFFF'
    },
    unitIcon: {
        width: 300,
        height: 150
    },
    textInput: {
        backgroundColor: '#D9D9D9',
        borderRadius: 30,
        marginBottom: 20,
        width: '100%',
        height: 62,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: '#F7FF16',
        padding: 20,
        marginTop: 30,
        borderRadius: 30
    },
    textButton: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 600
    },
    signUpButton: {
        backgroundColor: '#000',
        width: 355,
        padding: 20,
        marginTop: 50,
        borderRadius: 30
    },
    singUpText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 600,
        color: '#FFFFFF'
    }
})