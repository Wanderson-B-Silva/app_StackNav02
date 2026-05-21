import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList
} from 'react-native';

import estilos from '../styleSheet/estilo';

export default function Esportivos() {
  const carros = [
    { id: '1', nome: 'Ferrari SF90' },
    { id: '2', nome: 'Lamborghini Huracán' },
    { id: '3', nome: 'Porsche 911' },
    { id: '4', nome: 'McLaren 720S' },
    { id: '5', nome: 'Nissan GT-R' },
  ];

  return (
    <View style={estilos.fundoEsportivo}>
      <ScrollView style={estilos.caixa}>

        <View style={estilos.cabecalho}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/741/741407.png' }}
            style={estilos.imagemTela}
          />

          <View>
            <Text style={estilos.miniTituloVermelho}>ESPORTIVOS</Text>
            <Text style={estilos.tituloTela}>Curiosidades</Text>
          </View>
        </View>

        <Text style={estilos.subtituloVermelho}>Introdução:</Text>
        <Text style={estilos.texto}>
          Carros esportivos são veículos criados para oferecer alto desempenho,
          velocidade, design moderno e uma experiência de direção emocionante.
        </Text>

        <Text style={estilos.subtituloVermelho}>História:</Text>
        <Text style={estilos.texto}>
          Os carros esportivos ficaram famosos por causa das competições,
          velocidade e tecnologia. Marcas como Ferrari, Porsche, Lamborghini
          e McLaren são conhecidas mundialmente.
        </Text>

        <Text style={estilos.subtituloVermelho}>Modelos famosos:</Text>

        <FlatList
          data={carros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={estilos.itemLista}>🏎️ {item.nome}</Text>
          )}
        />

        <Text style={estilos.subtituloVermelho}>Curiosidade:</Text>
        <Text style={estilos.texto}>
          Alguns carros esportivos conseguem acelerar de 0 a 100 km/h em menos
          de 3 segundos.
        </Text>

        <View style={estilos.rodape}>
          <Text>Wanderson Silva</Text>
          <Text>2026</Text>
        </View>

      </ScrollView>
    </View>
  );
}