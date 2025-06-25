import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export function SingUpScreen() {
    const [user , setUse] = useState('');
    const [nome , setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const handleRegister = async () => {
        if(!nome || !email ) {
            Alert.alert('Preencha todos os campos');
            return;
        }

        const url = 'http://192.168.15.2:5000/api/createUser';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type':'Application/json' },
                body: JSON.stringify({
                    nome: "nome",
                    email: "email",
                    senha: "senha"
                })
            });

            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao cadastrar usuario')
            }

            const data = await response.json();
            Alert.alert('Usuario cadastrado com sucesso!', data);
            navigation.navigate('Login');

        }catch(err) {
            Alert.alert('Error ao cadastrar', err.message);
            console.error('Error ao cadastrar usuario', err.message)
        }
    }

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

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.textButton}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );

}