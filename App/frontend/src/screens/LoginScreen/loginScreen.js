import React, {useState} from 'react';
import { View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

export const LoginScreen = () => {
    const navigation = useNavigation();
    const [isName, setName] = useState('');
    const [isPassword, setPassword] = useState('');
    
    return (
        <LinearGradient 
            colors={['#34474B','#83BECC','#B2EDFA']}
            style={styles.container}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
        >
            <View style={styles.FormContain}>
                <Image source={require('../../assets/proUnit.png')} resizeMode='contain' style={styles.unitIcon}/>
                <TextInput 
                    placeholder='Email'
                    style={styles.textInput}
                    value={isName}
                    onChangeText={(texto) => setName(texto)}
                />

                <TextInput 
                    placeholder='Senha'
                    style={styles.textInput}
                    onChangeText={(texto) => setPassword(texto)}
                    value={isPassword}
                    keyboardType='numeric'
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tab')}>
                    <Text style={styles.textButton }>Entrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('singUp')}>
                <Text style={styles.singUpText}>Cadastre-se</Text>
            </TouchableOpacity>
        </LinearGradient>
  )
}
