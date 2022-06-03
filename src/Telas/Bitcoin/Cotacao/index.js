import React from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity, FlatList} from 'react-native';
import Itens from './Itens';

export default function Cotacao(props){

    const diasConsulta = props.filtroDia;


    return(
        <>
            <View style={estilos.filtros}>
                <TouchableOpacity style={estilos.botao} onPress={()=> diasConsulta(7)}>
                    <Text style={estilos.texto}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=> diasConsulta(15)}>
                    <Text style={estilos.texto}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=> diasConsulta(30)}>
                    <Text style={estilos.texto}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=> diasConsulta(90)}>
                    <Text style={estilos.texto}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={()=> diasConsulta(180)}>
                    <Text style={estilos.texto}>6M</Text>
                </TouchableOpacity>
            </View>
            {/* <Itens/> */}
            <ScrollView>
                <FlatList 
                    nestedScrollEnabled
                    data={props.listaValores}
                    renderItem={({item}) => {
                        return <Itens valor={item.valor} data={item.data} />
                    }}
                />
            </ScrollView>
        </>
    );

}

const estilos = StyleSheet.create({
    filtros:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#312C7A',
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:'#7A6A14',
        paddingVertical:0,
    },
    botao:{
        width:'25%',
        height:50,
        backgroundColor:'#312C7A',
        alignItems:'center',
        justifyContent:'center',
    },
    texto:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        
    },
})