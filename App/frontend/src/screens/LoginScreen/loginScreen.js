import React, {useEffect, useState} from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios, { Axios } from 'axios'
import { styles } from './style';

export function LoginScreen() {
    const navigation = useNavigation();
    const [isName, setName] = useState('');
    const [isPassword, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleLogin()
    }, []);

    const handleLogin = async () => {
        const url = 'http://192.168.15.2:5000/api/login';

        if(!isName || !isPassword) {
            Alert.alert('Preencha os campos obrigatorios')
        }
        
    }    
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
