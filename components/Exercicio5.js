import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Exercicio5() {
  const [curtidas, setCurtidas] = useState(0);

  const removerCurtida = () => {
    if (curtidas > 0) {
      setCurtidas(curtidas - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Exercício 5</Text>
      <Text style={styles.texto}>Total de curtidas: {curtidas}</Text>
      <View style={styles.botoes}>
        <Button title="Curtir" onPress={() => setCurtidas(curtidas + 1)} />
        <View style={{ width: 10 }} />
        <Button title="Descurtir" onPress={removerCurtida} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  texto: { fontSize: 14, marginBottom: 10 },
  botoes: { flexDirection: 'row' },
});