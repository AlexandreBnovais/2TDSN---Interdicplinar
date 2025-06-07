import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {styles} from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const WorkDesc2 = () => {
  const Navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../../assets/cine.png')}
        resizeMode='cover'
        style={styles.image}
      />
      <View style={styles.descContainer}>
        <TouchableOpacity onPress={() => Navigation.goBack('Tab')}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.desc}>
          <Text style={styles.descTitle}>Oportunidade: </Text>
          <Text style={styles.descText}>
             Montar sessões gratuitas de cinema ao ar livre em praças públicas, com debates sobre temas sociais..
          </Text>
        </View>

        <View style={styles.desc}>
          <Text style={styles.descTitle}>Tarefas: </Text>
          <Text style={styles.descText}>
            Organização de equipamentos, divulgação e mediação de discussões pós-filme.
          </Text>
        </View>

        <TouchableOpacity style={styles.subscribe} onPress={() => {}}>
          <Text style={styles.textSubscribe}>inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}
