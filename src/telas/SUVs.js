import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import estilos from '../styleSheet/estilo';

export default function SUVs() {
  const [carro, setCarro] = useState('Jeep Compass');

  const descricoes = {
    'Jeep Compass': 'SUV confortável, moderno e bastante popular no Brasil.',
    'Toyota Corolla Cross': 'SUV com boa tecnologia, conforto e versões híbridas.',
    'Hyundai Creta': 'SUV compacto, econômico e muito usado na cidade.',
    'Volkswagen T-Cross': 'SUV compacto com bom desempenho e tecnologia.',
  };

  return (
    <View style={estilos.fundoSUV}>
      <ScrollView style={estilos.caixa}>

        <View style={estilos.cabecalho}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3774/3774278.png' }}
            style={estilos.imagemTela}
          />

          <View>
            <Text style={estilos.miniTituloAzul}>SUVs</Text>
            <Text style={estilos.tituloTela}>Curiosidades</Text>
          </View>
        </View>

        <Text style={estilos.subtituloAzul}>Introdução:</Text>
        <Text style={estilos.texto}>
          SUVs são carros que combinam conforto, espaço interno e posição elevada
          de direção. São muito procurados por famílias e motoristas que gostam
          de veículos versáteis.
        </Text>

        <Text style={estilos.subtituloAzul}>Escolha um modelo:</Text>

        <View style={estilos.pickerBox}>
          <Picker
            selectedValue={carro}
            onValueChange={(itemValue) => setCarro(itemValue)}
          >
            <Picker.Item label="Jeep Compass" value="Jeep Compass" />
            <Picker.Item label="Toyota Corolla Cross" value="Toyota Corolla Cross" />
            <Picker.Item label="Hyundai Creta" value="Hyundai Creta" />
            <Picker.Item label="Volkswagen T-Cross" value="Volkswagen T-Cross" />
          </Picker>
        </View>

        <Text style={estilos.resultado}>
          {descricoes[carro]}
        </Text>

        <Text style={estilos.subtituloAzul}>Vantagens:</Text>
        <Text style={estilos.texto}>
          Entre as vantagens dos SUVs estão o conforto, o espaço para bagagens,
          maior altura em relação ao solo e sensação de segurança ao dirigir.
        </Text>

        <View style={estilos.rodape}>
          <Text>Wanderson Silva</Text>
          <Text>2026</Text>
        </View>

      </ScrollView>
    </View>
  );
}