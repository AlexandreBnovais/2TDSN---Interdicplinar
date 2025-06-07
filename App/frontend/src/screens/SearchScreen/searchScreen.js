import React, {useState} from 'react'
import { 
    View,
    TextInput,
    FlatList,
    TouchableOpacity, 
    Text
} from 'react-native'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context';


const DATA = [
    {id: 1, name: 'Ambiental'},
    {id: 2, name: 'Educacional'},
    {id: 3, name: 'Ambiente Familiar'},
    {id: 4, name: 'Arrecadação'},
    {id: 5, name: 'Monetário'}
];

export const SearchScreen = () => {
    const [search, setSearch] = useState('');

    const filterItem = DATA.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    const renderFilter = ({ item }) => (
        <TouchableOpacity style={styles.tag} onPress={() => {}}>
            <Text style={styles.textTag}>{item.name}</Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Pesquisar...'
                value={search}
                onChangeText={setSearch}
            />

            <FlatList 
                data={filterItem}
                keyExtractor={(item) => item.id}
                renderItem={renderFilter}
            />
        </SafeAreaView>
    )
}
