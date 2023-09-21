import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, TimePickerAndroid, DatePickerAndroid } from 'react-native';

export default function ReservaForm({ agregarReserva }) {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('');
  const [seccion, setSeccion] = useState('No fumadores');

  const handleAgregarReserva = () => {
    const nuevaReserva = {
      nombre,
      fecha,
      hora,
      personas,
      seccion,
    };

    agregarReserva(nuevaReserva);

    setNombre('');
    setFecha('');
    setHora('');
    setPersonas('');
    setSeccion('No fumadores');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese su nombre"
      />

      <Text style={styles.label}>Fecha:</Text>
      <TextInput
        style={styles.input}
        value={fecha}
        onChangeText={setFecha}
        placeholder="Seleccione la fecha"
      />

      <Text style={styles.label}>Hora:</Text>
      <TextInput
        style={styles.input}
        value={hora}
        onChangeText={setHora}
        placeholder="Seleccione la hora"
      />

      <Text style={styles.label}>Cantidad de Personas:</Text>
      <TextInput
        style={styles.input}
        value={personas}
        onChangeText={setPersonas}
        placeholder="Ingrese la cantidad de personas"
      />

      <Text style={styles.label}>Sección:</Text>
      <Picker
        style={styles.picker}
        selectedValue={seccion}
        onValueChange={(itemValue) => setSeccion(itemValue)}
      >
        <Picker.Item label="No fumadores" value="No fumadores" />
        <Picker.Item label="Fumadores" value="Fumadores" />
      </Picker>

      <Button title="Agregar Reserva" onPress={handleAgregarReserva} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    fontSize: 16,
    marginBottom: 15,
  },
});
