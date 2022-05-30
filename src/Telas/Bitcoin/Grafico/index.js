import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Grafico(){

    return(
        <View style={estilos.conteudo}>
       
        </View>
    );
}

const estilos = StyleSheet.create({
    conteudo:{
        width:'90%',
        height:220,
        borderRadius:15,
        backgroundColor:'#12112E',
        borderWidth:1,
        borderColor:'#7A6A14',
        alignItems:'center',
        marginVertical:10,
    },
})