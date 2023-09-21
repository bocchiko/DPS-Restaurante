import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import ReservaForm from './src/components/ReservaForm';
import ListaReservas from './src/components/ListaReservas';

export default function App() {
  const [reservas, setReservas] = useState([]);

  const agregarReserva = (nuevaReserva) => {
    setReservas([...reservas, nuevaReserva]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reservas en el Restaurante</Text>
      <ReservaForm agregarReserva={agregarReserva} />

      <Text style={styles.subtitle}>Reservas existentes:</Text>
      <View style={styles.reservasContainer}>
        {reservas.map((reserva, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>Nombre: {reserva.nombre}</Text>
            <Text style={styles.cardText}>Fecha: {reserva.fecha}</Text>
            <Text style={styles.cardText}>Hora: {reserva.hora}</Text>
            <Text style={styles.cardText}>Personas: {reserva.personas}</Text>
            <Text style={styles.cardText}>Sección: {reserva.seccion}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  reservasContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

