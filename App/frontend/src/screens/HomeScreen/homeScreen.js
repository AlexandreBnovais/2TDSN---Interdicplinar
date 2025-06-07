import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styled';

export const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.unitImage} source={require('../../assets/proUnit.png')} resizeMode='contain'  />
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}>Colaborador</Text>
            </TouchableOpacity>
        </View>
    )
}


