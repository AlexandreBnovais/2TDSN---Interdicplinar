import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export const singUpScreen = () => {
    const [user , setUse] = useState();
    const [nome , setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigation = useNavigation();

    return(
        <LinearGradient
            colors={["#E3B2FA" , "#B983CC" , "#44344B"]}
            style={styles.container}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
        >
            <View style={styles.formContainer}>
                <Image style={styles.UniIcon} source={require('../../assets/proUnit.png')} resizeMode='contain'/>

                <TextInput 
                    placeholder='Usuario'
                    onChangeText={(texto) => setUse(texto)}
                    value={user}
                    keyboardType='default'
                    style={styles.textInput}
                /> 
                <TextInput 
                    placeholder='Nome Completo'
                    onChangeText={(texto) => setNome(texto)}
                    value={nome}
                    keyboardType='default'
                    style={styles.textInput}
                /> 
                <TextInput 
                    placeholder='Email'
                    onChangeText={(texto) => setEmail(texto)}
                    value={email}
                    keyboardType='email-address'
                    style={styles.textInput}
                /> 
                <TextInput 
                    placeholder='Senha'
                    onChangeText={(texto) => setSenha(texto)}
                    value={senha}
                    keyboardType='numeric'
                    secureTextEntry
                    style={styles.textInput}
                /> 

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textButton}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );

}