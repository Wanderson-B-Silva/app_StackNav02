import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import estilos from '../styleSheet/estilo';

export default function Principal() {
  const nav = useNavigation();

  return (
    <View style={estilos.fundo}>
      <View style={estilos.caixaPrincipal}>

        <Text style={estilos.titulo}>Universo dos Carros</Text>
        <Text style={estilos.subtituloPrincipal}>Stack Navigation</Text>
        <Text style={estilos.textoCentral}>Desenvolvimento Mobile</Text>

        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/744/744465.png' }}
          style={estilos.imagemPrincipal}
        />

        <Text style={estilos.categoria}>Categorias</Text>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => nav.navigate('Esportivos')}
        >
          <Text style={estilos.textoBotao}>Carros Esportivos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => nav.navigate('SUVs')}
        >
          <Text style={estilos.textoBotao}>SUVs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => nav.navigate('Eletricos')}
        >
          <Text style={estilos.textoBotao}>Carros Elétricos</Text>
        </TouchableOpacity>

        <View style={estilos.rodape}>
          <Text>Wanderson Silva</Text>
          <Text>2026</Text>
        </View>

      </View>
    </View>
  );
}