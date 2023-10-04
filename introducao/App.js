import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Questao01 from './components/tarefa01/Questao01';
import Questao03 from './components/tarefa01/Questao03';
import MainScreen from './components/15NavigationStack/MainScreen';
// import PokemonApp from './components/16Pokemon/PokemonApp';
import MainNavApp from './components/15Navigation02/01NavStack/MainNavApp';
import PokemonApp from './components/15Navigation02/05Pokemon/PokemonApp';


export default function App() {
  return (
    <View style={styles.container}>

      {/* <Questao01 />
      <Questao03 cor='blue'/> */}
      <PokemonApp />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
