import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import Navbar from './app/components/navbar';
import TesteDeComponentes from './app/components/testes';
import Titulo from './app/components/titulo';

export default function App() {
  return (
    <SafeAreaView style={Estilos.parent}>
      <Navbar type={''}/>
        <View style={{paddingHorizontal: 16}}>
          <Titulo string={'Artigos'} />

          <TesteDeComponentes />
        </View>
      
      
      
      <StatusBar />
    </SafeAreaView>
  );
}

const Estilos = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
