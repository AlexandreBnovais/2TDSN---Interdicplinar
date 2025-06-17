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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        paddingVertical: 50,
        boxShadow: '0px 9px 24px -6px rgba(0, 0, 0, 0.25)',
        width: '100%',
        borderRadius: 20
    },
    subUserContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        backgroundColor: '#F7FF16',
        borderRadius: '50%'
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