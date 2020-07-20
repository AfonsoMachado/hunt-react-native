import React from 'react';
import { Text } from 'react-native';

import { WebView } from "react-native-webview";

// REMOVIDO
// import { WebView } from "react-native";

// Definindo um componente sem estado

const Product = ({navigation}) => (
  <WebView source={{ uri: navigation.state.params.product.url }} />
)

// Definindo propriedades estática
Product.navigationOptions = ({ navigation }) => ({
  // Capturando o titulo
  title: navigation.state.params.product.title
})

export default Product;
