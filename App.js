import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Text style={styles.navText}>Para você</Text>
        <Image 
          source={{uri: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'}}
          style={styles.navImage}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#776231',
    height: 110,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
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
    borderRadius: 50
  }
});
