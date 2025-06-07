import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const FiltroItem = ({ filtro, selecionado, onPress}) => {
  return (
    <TouchableOpacity
        style={[styles.filtroItem, selecionado && styles.filtroSelecionado]}
        onPress={onPress}
    >
        <Text style={[styles.filtroText, selecionado && styles.filtroTextoSelecionado]}>{filtro}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  filtroItem: {
    backgroundColor: '#000000B2',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 10
    
  },
  filtroSelecionado: {
    backgroundColor: '#575757'
  },
  filtroText: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  filtroTextoSelecionado: {

  }
})
