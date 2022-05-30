import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cotacao from './Cotacao';
import Grafico from './Grafico';


// Referencía a API DA Coindesk
// Requisição https://api.coindesk.com/v1/bpi/historical/close.json?start-2022-05-01&end=2022-05-25


//funções acessórias
function ajustaValor(valor){
    if(valor <= 9){
        return "0" + valor;
    }
    else{
        return valor;
    }
}

function url(numDias){
    const dt = new Date();
    const intervalo = numDias;
    // Construir a data final e inicial formatada pelo padrão da API
    const final = `${dt.getFullYear()} -${ajustaValor(dt.getMonth() +1)}- ${ajustaValor(dt.getDate())}`;
    // Definindo a data de inicio retroagindo o intervalo
    dt.setDate(dt.getDate() - intervalo);
    const inicial = `${dt.getFullYear()} -${ajustaValor(dt.getMonth() +1)}- ${ajustaValor(dt.getDate())}`;
    // Montar a URL de Requisição
    const saida = `https://api.coindesk.com/v1/bpi/historical/close.json&start=${inicial}&end=${final}`
    return saida;
}

// Consulta da API para a Lista de Cotações
async function getListaValores(endereco){
    const resposta = await fetch(endereco);
    const retorno = await resposta.json();
    const valores = retorno.bpi;
    const consulta = Object.keys(valores).map(key => {
        return {
            data:key.split("-").reverse().join("/"),
            valor: valores[key]
        }
    })
    const dados = consulta.reverse()
    return dados
}

//Consulta da API para o gráfico
async function getValoresGrafico(endereco){
    const respostaG = await fetch(endereco);
    const retornoG = await respostaG.json();
    const valoresG = retornoG.bpi;
    
    const dadosG = Object.keys(valoresG).map(key => valoresG[key])
    return dadosG;
}

export default function Bitcoin(){

    const [listaMoedas, setListaMoedas] = useState([]);
    const [valGrafico, setValGrafico] = useState([0]);
    const [numDias, setNumDias] = useState(30)
    const [mudaData, setMudaData] = useState(true);
    const [preco, setPreco] = useState(0);

    function mudaDia(valor){
        setNumDias(valor)
        setMudaData(true);
    }

    function cotacaoAtual(){
        setPreco(0);//TODO
    }

    useEffect(() => {
        getListaValores(url(numDias)).then(dados => {
            setListaMoedas(dados)
        })
        getValoresGrafico(url(numDias)).then(dadosG => {
            setValGrafico(dadosG)
        })
        //Para não entrar em Loop Infinito
        if(mudaData)
            setMudaData(false)
    }, [mudaData])

    return(
        <View style={estilos.conteudo}>
            <View style={estilos.atual}>
                <Text style={estilos.precoatual}>BTC #####.###</Text>
                <Text style={estilos.mensagem}>Cotação Atual</Text>
            </View>
            <Grafico/>
            <Cotacao filtroDia={mudaDia} listaValores={listaMoedas}/>
        </View>
    );
}

const estilos = StyleSheet.create({
    conteudo: {
        backgroundColor: 'cornflowerblue',
        flex: 1,
        alignItems: 'center',
    },
    atual: {
        width: '90%',
        height: '34%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
    },
    precoatual: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    mensagem: {
        fontSize: 20,
        color: "navy",
    },
})