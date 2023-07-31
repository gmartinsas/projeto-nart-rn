import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Navbar from './app/components/navbar';
import Artigo from './app/components/article';
import Titulo from './app/components/titulo';
import TesteDeComponentes from './app/components/testes';

export default function App() {
  return (
    <SafeAreaView style={Estilos.parent}>
      <Navbar type={''}/>
        <View style={{paddingHorizontal: 16}}>
          <Titulo string={'Artigos'} />

          <Artigo />
        </View>
      
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
});
