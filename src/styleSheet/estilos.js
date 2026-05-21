import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 15,
  },

  fundoEsportivo: {
    flex: 1,
    backgroundColor: 'darkred',
    padding: 12,
  },

  fundoSUV: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 12,
  },

  fundoEletrico: {
    flex: 1,
    backgroundColor: 'green',
    padding: 12,
  },

  caixaPrincipal: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
  },

  caixa: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtituloPrincipal: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
  },

  textoCentral: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },

  imagemPrincipal: {
    width: 180,
    height: 180,
    marginVertical: 25,
  },

  categoria: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  botao: {
    borderWidth: 2,
    borderColor: 'darkred',
    borderRadius: 20,
    width: 250,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
  },

  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingBottom: 20,
    marginBottom: 20,
  },

  imagemTela: {
    width: 120,
    height: 120,
    marginRight: 20,
  },

  miniTituloVermelho: {
    fontSize: 16,
    color: 'darkred',
    fontWeight: 'bold',
  },

  miniTituloAzul: {
    fontSize: 16,
    color: 'darkblue',
    fontWeight: 'bold',
  },

  miniTituloVerde: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },

  tituloTela: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtituloVermelho: {
    fontSize: 22,
    color: 'darkred',
    fontWeight: 'bold',
    marginTop: 15,
  },

  subtituloAzul: {
    fontSize: 22,
    color: 'darkblue',
    fontWeight: 'bold',
    marginTop: 15,
  },

  subtituloVerde: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 15,
  },

  texto: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 8,
  },

  itemLista: {
    fontSize: 18,
    marginVertical: 5,
  },

  pickerBox: {
    backgroundColor: '#eee',
    borderRadius: 10,
    marginTop: 10,
  },

  resultado: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

  switchArea: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rodape: {
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default estilos;