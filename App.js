import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Navbar from './app/components/navbar';
import TesteDeComponentes from './app/components/testes';

export default function App() {
  return (
    <SafeAreaView style={Estilos.parent}>
      <View style={Estilos.container}>
        <Text style={Estilos.navText}>Para você</Text>
        <Image 
          source={{uri: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'}}
          style={Estilos.navImage}/>
      </View>

      <Navbar />
      <TesteDeComponentes />

      <StatusBar />
    </SafeAreaView>
  );
}

const Estilos = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#776231',
    height: 80,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
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
