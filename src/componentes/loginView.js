/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import App from './App';

class loginView extends Component {
  render() {
    return (
           <View style={styles.container}>
             <Text style={styles.titulo}>.:Bienvenido a Mercado:.</Text>
             <Image
                style={{width: 180, height: 150,marginTop: 50}}
               source={require('../img/logo.png')}
             />
             <Text> La aplicacion para tu lista de mercado</Text>
             <TouchableHighlight   onPress={() => this.props.navigation.navigate('Details')} style={styles.boton}>
              <Text style={styles.textoBoton}>COMENZAR</Text>
             </TouchableHighlight>
           </View>
         );
       }
     }

  const RootStack = StackNavigator(
    {
      Home: {
        screen: loginView,
      },
      Details: {
        screen: App,
      },
    },
    {
      initialRouteName: 'Home',
    }
  );


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#8bc34a',
  //  justifyContent: 'center',
    alignItems: 'center'
  },
  boton: {
    width:200,
    height:50,
    backgroundColor: '#5a9216',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  textoBoton:{
    color: 'white',
    fontSize:18
  },
  titulo:{
    marginTop: 100,
    color: 'black',
    fontSize:32
  }

});

export default class Apps extends Component {
  render() {
    return <RootStack />;
  }
}
