import React, {useState, useEffect} from 'react';
import { 
    View, 
    FlatList,
    Image,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { FiltroItem } from '../../components/filtroItem';
import { CardItem } from '../../components/cardItem';

export function TimeScreen() {    
    const [vagas, setVagas] = useState([]);
    const [filtro, setFiltro] = useState(['Popular', 'Local', 'Novo', 'Escolar']);
    const [filtroSelecionado, setFiltroSelecionado] = useState(null);
    const [vagasFiltradas, setVagasFiltradas] = useState([]);

    useEffect(() => {
        const Data = [
            {
                id: '1', 
                title: 'Recicla ZS', 
                local: '(Agua branca)', 
                area: 'Popular',
                image: require('../../assets/reciclazs.png'),
                screen: 'WorkDesc1'
            },
            {
                id: '2', 
                title: 'Cine comunidade', 
                local: '(Embu das Artes)', 
                area: 'Popular',
                image: require('../../assets/cine.png'),
                screen: 'WorkDesc2'
            },
            {
                id: '3', 
                title: 'Aulas de Capoeira', 
                local: '(Embu das artes)', 
                area: 'Local',
                image: require('../../assets/capoeira.png'),
                screen: 'WorkDesc3'
            },
            {
                id: '4', 
                title: 'Horta solidaria', 
                local: '(Paraisopolis)', 
                area: 'Novo',
                image: require('../../assets/horta.png'),
                screen: 'WorkDesc4'
            },
            {
                id: '5', 
                title: 'Refloresta sul SP', 
                local: '(Chacara Klabin)', 
                area: 'Novo',
                image: require('../../assets/refloresta.png'),
                screen: 'WorkDesc5'
            },
            {
                id: '6', 
                title: 'Feira verde das mulheres', 
                local: '(Pinheiros)', 
                area: 'Escolar',
                image: require('../../assets/feira.png'),
                screen: 'WorkDesc6'
            }
            
        ];
        setVagas(Data);
        setVagasFiltradas(Data);
    },[]);

    useEffect(() => {
        if(filtroSelecionado) {
            const NovaVagaFiltrada = vagas.filter(vaga => 
                vaga.area === filtroSelecionado
            );
            setVagasFiltradas(NovaVagaFiltrada);
        }else {
            setVagasFiltradas(vagas)
        }
    }, [filtroSelecionado, vagas]);

    const handFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro === filtroSelecionado ? null : filtro);
    }

    const renderFiltroItem = ({item}) => (
        <FiltroItem 
            filtro={item}
            selecionado={item === filtroSelecionado}
            onPress={() => handFiltroClick(item)}
        />
    );

    const renderCardItem = ({ item }) => (
        <CardItem  vaga={item}/>
    );

    return (
        <SafeAreaView style={{flex: 1, padding: 25}}>
           <View style={styles.logoContainer}>
                <Image 
                    style={styles.imageContainer}
                    source={require('../../assets/proUnit.png')} 
                    resizeMode='cover'
                /> 
                <Feather name="mail" size={38} color="black" />
           </View>
           
            <View style={styles.viewFiltro}>
                <FlatList 
                    data={filtro} 
                    renderItem={renderFiltroItem}
                    keyExtractor={(item) => item}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <FlatList 
                data={vagasFiltradas}
                renderItem={renderCardItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewFiltro: {
        marginVertical: 20,
        paddingVertical: 10,
    },
    imageContainer: {
        width: 100,
        height: 100,
    },
})

