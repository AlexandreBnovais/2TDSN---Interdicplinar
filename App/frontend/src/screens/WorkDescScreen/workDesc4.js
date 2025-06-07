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

export const WorkDesc4 = () => {
  const Navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../../assets/horta.png')}
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
            Cultivo de hortas comunitárias em terrenos ociosos, com alimentos doados para famílias em vulnerabilidade.
          </Text>
        </View>

        <View style={styles.desc}>
          <Text style={styles.descTitle}>Tarefas: </Text>
          <Text style={styles.descText}>
            Plantio, colheita, oficinas de alimentação saudável e distribuição de cestas.
          </Text>
        </View>

        <TouchableOpacity style={styles.subscribe} onPress={() => {}}>
          <Text style={styles.textSubscribe}>inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}
