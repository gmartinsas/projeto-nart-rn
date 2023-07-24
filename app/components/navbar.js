import React from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export const icon = {uri :'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'}

import BotaoVoltar from "./base/btn/buttonBack";

export default function Navbar({type}) {
  if (type == 'search') {
    return <View />
  } else if (type == 'back') {
    return <View><BotaoVoltar /></View>
  } else {
    return (
      <View style={Estilos.container}>
        <Text style={Estilos.navText}>Para você</Text>
          <Image 
            source={icon}
            style={Estilos.navImage} />
      </View>
    );
  }
}

const Estilos = StyleSheet.create({
    container: {
        backgroundColor: '#776231',
        height: 80,
        padding: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 16
      },
      navText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      navImage: {
        width: 48,
        height: 48,
        borderRadius: 40
      }
});