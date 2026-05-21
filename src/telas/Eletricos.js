import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Switch
} from 'react-native';

import estilos from '../styleSheet/estilo';

export default function Eletricos() {
  const [economico, setEconomico] = useState(false);

  return (
    <View style={estilos.fundoEletrico}>
      <ScrollView style={estilos.caixa}>

        <View style={estilos.cabecalho}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4564/4564336.png' }}
            style={estilos.imagemTela}
          />

          <View>
            <Text style={estilos.miniTituloVerde}>ELÉTRICOS</Text>
            <Text style={estilos.tituloTela}>Curiosidades</Text>
          </View>
        </View>

        <Text style={estilos.subtituloVerde}>Introdução:</Text>
        <Text style={estilos.texto}>
          Carros elétricos são veículos movidos por motores elétricos e baterias
          recarregáveis. Eles são considerados uma alternativa mais sustentável
          aos carros tradicionais.
        </Text>

        <Text style={estilos.subtituloVerde}>Benefícios:</Text>
        <Text style={estilos.texto}>
          Entre os principais benefícios estão menor emissão de poluentes,
          menos ruído, economia de combustível e tecnologia avançada.
        </Text>

        <Text style={estilos.subtituloVerde}>Modo Econômico:</Text>

        <View style={estilos.switchArea}>
          <Text>Ativar economia de bateria</Text>

          <Switch
            value={economico}
            onValueChange={(valor) => setEconomico(valor)}
          />
        </View>

        <Text style={estilos.resultado}>
          {economico
            ? 'Economia máxima de bateria ativada.'
            : 'Modo normal ativado.'}
        </Text>

        <Text style={estilos.subtituloVerde}>Curiosidade:</Text>
        <Text style={estilos.texto}>
          Alguns carros elétricos modernos conseguem rodar mais de 500 km
          com apenas uma carga completa.
        </Text>

        <View style={estilos.rodape}>
          <Text>Wanderson Silva</Text>
          <Text>2026</Text>
        </View>

      </ScrollView>
    </View>
  );
}