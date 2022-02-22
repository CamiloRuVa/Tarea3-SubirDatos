/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React from 'react';
 import { Button, View } from 'react-native';



const App = () =>{
  const hacerFetch = () => {

    const url = 'https://calculadora-server.herokuapp.com/states-control'
    const body = {
      accountNumber : 20191883,
      name: 'CAMILO',
      age: 20,
    }
    return fetch(url,{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body),     
    })
    .then(res => res.json())
    .catch(err => console.error(err.message))
    .then(respuesta => console.log(respuesta))
  
  }
  
  return(
    <View>
      <Button onPress={hacerFetch} title="Enviar"/>
    </View>
    
  )
}

export default App;

