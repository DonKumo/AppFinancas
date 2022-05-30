import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Grafico(){

    return(
        <View style={estilos.conteudo}>
            <Text>Grafico de Cotações</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    conteudo:{
        width:'90%',
        height:220,
        borderRadius:15,
        backgroundColor:'#66c',
        alignItems:'center',
        marginVertical:10,
    },
})