import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={estilos.conteudo}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={estilos.cabecalho}>
        <Text style={estilos.mensagem}> Bem Vindo(a) </Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={estilos.formulario}>
        <Text style={estilos.titulo}> E-mail </Text>
        <TextInput placeholder="Digite o seu e-mail" style={estilos.entrada} placeholderTextColor="#a2a2a2" />

        <Text style={estilos.titulo}> Senha: </Text>
        <TextInput style={estilos.entrada} secureTextEntry={true} />

        <TouchableOpacity
          style={estilos.btnAutentica}
          onPress={() => navigation.navigate('Bitcoin')}>
          <Text style={estilos.txtbotao}>AUTENTICAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.lnkRegistra}>
          <Text style={estilos.txtregistra}>
            Não Possui conta? Cadastre-se AQUI
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const estilos = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: '#12112E',
  },
  cabecalho: {
    marginTop: '15%',
    marginBottom: '10%',
    paddingStart: '5%',
  },
  mensagem: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  formulario: {
    backgroundColor: '#312F47',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  titulo: {
    fontSize: 20,
    color:'#7A6A14',
    marginTop: 25,
    fontWeight:'bold',
  },
  entrada: {
    borderBottomWidth: 1,
    borderBottomColor:'#7A6A14',
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color:'#a2a2a2',
  },
  btnAutentica: {
    backgroundColor: '#12112E',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtbotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lnkRegistra: {
    marginTop: 15,
    alignSelf: 'center',
  },
  txtregistra: {
    color: '#a3a3a3',
  },
});
