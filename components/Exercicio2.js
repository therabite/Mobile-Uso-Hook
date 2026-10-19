import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Exercicio2() {
  const [emoji, setEmoji] = useState('😐');

  const alternarEmoji = () => {
    setEmoji(emoji === '😐' ? '😁' : '😐');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Exercício 2</Text>
      <Text style={styles.emoji}>{emoji}</Text>
      <Button title="Trocar Emoji" onPress={alternarEmoji} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#ddd', alignItems: 'center' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, alignSelf: 'flex-start' },
  emoji: { fontSize: 40, marginBottom: 10 },
});