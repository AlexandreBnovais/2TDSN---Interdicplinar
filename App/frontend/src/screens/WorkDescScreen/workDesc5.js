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

export function WorkDesc5() {
  const Navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../../assets/refloresta.png')}
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
            Recuperação de áreas verdes degradadas em parques como o Parque do Carmo ou Jardim Botânico de São Paulo, com plantio de árvores nativas da Mata Atlântica.
          </Text>
        </View>

        <View style={styles.desc}>
          <Text style={styles.descTitle}>Tarefas: </Text>
          <Text style={styles.descText}>
            Participar de mutirões de plantio e manutenção de mudas, monitorar o crescimento das árvores com apoio de biólogos.
          </Text>
        </View>

        <TouchableOpacity style={styles.subscribe} onPress={() => {}}>
          <Text style={styles.textSubscribe}>inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}
