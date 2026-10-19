import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Exercicio1() {
  const [isLigada, setIsLigada] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Exercício 1</Text>
      <Text style={styles.texto}>
        {isLigada ? 'Luz ligada' : 'Luz desligada'}
      </Text>
      <Button 
        title={isLigada ? 'Desligar' : 'Ligar'} 
        onPress={() => setIsLigada(!isLigada)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  texto: { fontSize: 14, marginBottom: 10 },
});