import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/pokemonCard';

//SafeAreaView doesn't affect android

export default function App() {

  const charmanderData ={
    name: 'Charmander',
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves:["Scratch", "Ember", "Growl","Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...squirtleData}/>
      <PokemonCard {...pikachuData}/>
      <PokemonCard {...bulbasaurData}/>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS ==="android" ? 30: 0,
  },
});
