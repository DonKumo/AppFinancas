import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Importar o arquivo que controla as Rotas
import Rotas from './src/Rotas';

export default function App() {
    return(
        <NavigationContainer>
            <StatusBar
                backgroundColor = "cornflowerblue"
                barStyle="light-content"
            />
            <Rotas/>
        </NavigationContainer>
    );
}