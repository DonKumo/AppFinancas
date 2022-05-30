import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

export default function Itens(props){
    return(
        <View style={estilos.principal}>
            <View style={estilos.esquerda}>
                <View style={estilos.caixa}>
                    <Image style={estilos.moeda}
                        source={require("../../../../../assets/Bitcoin.png")}
                        />
                    <Text style={estilos.dtcotacao}>{props.data}</Text>
                </View>
            </View>
            <View style={estilos.direita}>
                <Text style={estilos.preco}>BTC {props.valor}</Text>
            </View>
        </View>
    );
}


 const estilos = StyleSheet.create({
     principal:{
         width:'95%',
         backgroundColor:'#fff',
         marginLeft:'3%',
         marginRight:'3%',
         marginBottom:15,
         borderRadius:10,
         flexDirection:'row',
         alignItems:'center',
         padding:5,

    },
     esquerda:{
        width:'36%',
        alignItems:'flex-start',
     },
     caixa:{
         flexDirection:'row',
         alignItems:'center',
     },
     moeda:{
         width:40,
         height:40,
         marginLeft:2,

     },
     dtcotacao:{
         fontSize:16,
         paddingLeft:2,
         color:'navy',
         fontWeight:'bold',
     },
     direita:{
         width:'60%',
         alignItems:'flex-end',
     },
     preco:{
         fontSize:18,
         paddingLeft:2,
         color:'navy',
         fontWeight:'bold',
     },
 })