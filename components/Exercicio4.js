import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Exercicio4() {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Exercício 4</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={!mostrarSenha}
      />
      <Button
        title={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
        onPress={() => setMostrarSenha(!mostrarSenha)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5, marginBottom: 10, backgroundColor: '#fff' },
});