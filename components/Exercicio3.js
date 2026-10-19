import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Exercicio3() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Exercício 3</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.texto}>
        {nome.trim() === '' ? 'Digite seu nome' : nome}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5, marginBottom: 10, backgroundColor: '#fff' },
  texto: { fontSize: 14 },
});