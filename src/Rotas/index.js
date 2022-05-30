import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

//Telas criadas

import Home from '../Telas/Home';
import Login from '../Telas/Login';
import Bitcoin from '../Telas/Bitcoin';

const Telas = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Telas.Navigator>
            <Telas.Screen 
            name='Home' 
            component={Home} 
            options={{headerShow: false}}/>
            <Telas.Screen 
            name='Login' 
            component={Login} 
            options={{headerShow: false}}/>
            <Telas.Screen 
            name='Bitcoin' 
            component={Bitcoin} 
            options={{headerShow: false}}/>
        </Telas.Navigator>
    );
}