import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },   
    formContainer: {
        backgroundColor: '#FFFFFF',
        width: 355,
        height: 621,
        padding: 20,
        borderRadius: 30
    },
    UniIcon: {
        width: '100%',
        height: 143,
    },
    textInput: {
        backgroundColor: '#D9D9D9',
        borderRadius: 30,
        marginBottom: 20,
        width: '100%',
        height: 62,
        paddingHorizontal: 20,
        fontWeight: 600
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
})