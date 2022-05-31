import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

 
  //function getDayString(valor){
  //  let dia = valor.split('/');
  //  let day = dia[0]
  //return day
 // }


const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


export default function Grafico(props){
  
 //const dias = props.datas ? props.datas.map(key => getDayString(key.data)) :[0]


const data = {
  //labels: dias ,
  datasets: [
    {
      data: props.listaValores,
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
};
    return(
        <View style={estilos.conteudo}>
       <LineChart
          withDot = {false}
          data={data}
          width={screenWidth - screenWidth/9}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            borderWidth:1,
            borderColor:'#7A6A14',
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        </View>
    );
}

const estilos = StyleSheet.create({
    conteudo:{
        width:'auto',
        height:220,
        borderRadius:15,
        backgroundColor:'#12112E',
        alignItems:'center',
        marginVertical:10,
    },
})