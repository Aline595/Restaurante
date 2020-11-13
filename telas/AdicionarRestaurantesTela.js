import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  //Picker,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Picker
} from '@react-native-community/picker';

import Slider from '@react-native-community/slider';
import * as ImagePicker from 'expo-image-picker';

const AdicionarRestauranteTela = (props) => {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState(1);
  const [fotoURI, setFotoURI] = useState();

  const tirarFoto = async () =>{
    let foto = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      base64: true
    });
    setFotoURI(foto);
  }

  return(
    <View style={estilos.container}>
      <TextInput
        style={estilos.nomeTextInput}
        placeholder="Nome do restaurante"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />

      <View style={estilos.cidadeECategoriaView}>
        <TextInput
          style={estilos.cidadeTextInput}
          placeholder="Cidade"
          onChangeText={(texto) => setCidade(texto)}
          value={cidade}
        />

        <Picker
          selectedValue={categoria}
          style={estilos.categoriaPicker}
          onValueChange={(value, index) => {
            setCategoria(value)
          }}
          mode="dropdown"
        >
          <Picker.Item label="Categoria" value="Categoria" />
          <Picker.Item label="Japonês" value="Japonês" />
          <Picker.Item label="Brasileiro" value="Brasileiro" />
          
        </Picker>


      </View>

      <View style={estilos.precoView}>
        <Text>Preço</Text>
        <Slider
          style={estilos.precoSlider}
          minimumValue={1}
          maximumValue={5}
          value={preco}
          step={1}
          onValueChange={(value) => setPreco(value)}
        />
      </View>

      <View style={estilos.previewImageView}>
        {
          fotoURI ? 
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: fotoURI}}
            />
          :
          <Text>Sem foto</Text>
        }
      </View>

      <View style={estilos.tirarFotoButton}>
        <Button
          title="Selecionar foto"
          onPress={() => tirarFoto()}
        />
      </View>

      <TouchableOpacity style={estilos.fab}>
        <Text style={estilos.iconFab}>OK</Text>
      </TouchableOpacity>

    </View>
  )
};

const estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  nomeTextInput:{
    width: '90%',
    textAlign: 'center',
    padding: 12,
    fontSize: 16,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginVertical: 8,
    alignSelf: 'center',
  },
  cidadeECategoriaView:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12
  },
  cidadeTextInput:{
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    width: '40%'
  },
  categoriaPicker:{
    width: '40%'
  },
  precoView:{
    marginVertical: 12,
    alignItems: 'center'
  },
  precoSlider:{
    width: '95%',
    marginVertical: 8
  },
  previewImageView:{
    alignSelf: 'center',
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: '#CCC',
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tirarFotoButton:{
    width: '90%',
    alignSelf: 'center'
  },
  fab:{
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor:  '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  iconFab:{
    fontSize: 14,
    color: 'white'
  }

});

export default AdicionarRestauranteTela;