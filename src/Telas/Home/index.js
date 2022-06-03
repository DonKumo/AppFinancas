import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={estilos.conteudo}>
            <View style={estilos.imagem}>
                <Animatable.Image
                    animation = "flipInY" 
                    source={require('../../../assets/logoCesar.png')} 
                    style={{ width: '100%'}}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View
                delay= {600}
                animation="fadeInUp" 
                style={estilos.formulario}>

                <Text style={estilos.titulo}>Controle Digital Financeiro</Text>
                <Text style={estilos.texto}>Clique no botão para Login</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress ={() => navigation.navigate('Login')}>

                  <Text style={estilos.txtbotao}>CONECTAR</Text>
                 </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#312F47'
    },
    imagem: {
        flex: 2,
        backgroundColor: '#12112E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formulario: {
        flex: 1,
        backgroundColor: '#312F47',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingBottom: '5%',
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 15,
        color: '#7A6A14'
    },
    texto: {
        fontSize: 16,
        color: '#a2a2a2',
    },
    botao: {
        backgroundColor: '#12112E',
        position: 'absolute',
        borderRadius: 15,
        width: '60%',
        alignSelf: 'center',
        paddingVertical: 10,
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtbotao: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
})