import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

function SettingScreen() {
  const Navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userContainer}>
        <View style={styles.subUserContainer}>
          <FontAwesome5 name="user" size={100} color="#656565" />
        </View>
      </View>

      <View style={styles.configContainer}>
        <TouchableOpacity style={styles.helpContainer}>
          <FontAwesome5 name="question-circle" size={25} color="black" />
          <Text style={styles.textHelpContainer}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpContainer} onPress={() => Navigation.navigate('Home')}>
          <Ionicons name="exit-outline" size={25} color="black" />
          <Text style={styles.textHelpContainer}>Sair</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export {SettingScreen}
