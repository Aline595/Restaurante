import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const RestauranteTela = (props) => {
  return(
    <View style={estilos.container}>
      <Text>Restaurantes</Text>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate ('AdicionarRestaurante')
      }}
        style={estilos.fab}
      >
        <Text style={estilos.iconFab}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container:{
    flex: 1
  },
  fab: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  iconFab: {
    fontSize: 20,
    color: 'white'
  }
});

export default RestauranteTela;