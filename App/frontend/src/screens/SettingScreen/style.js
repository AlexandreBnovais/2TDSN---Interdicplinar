import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 30,
        marginHorizontal: 45
    },
    userContainer: {
        padding: 30,
        borderRadius: '50%',
        borderWidth: 2        
    },
    configContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '100%',
    },
    helpContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    textHelpContainer: {
        fontSize: 25
    }
})