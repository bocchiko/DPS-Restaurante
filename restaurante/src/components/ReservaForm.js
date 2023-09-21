import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReservaForm = ({ onReservaSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState('');

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setFecha(date.toISOString()); // Convierte la fecha seleccionada en una cadena ISO
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (time) => {
    hideTimePicker();
    const selectedTime = new Date(time);
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    setHora(`${hours}:${minutes}`); // Formatea la hora seleccionada como "HH:mm"
  };

  const handleSubmit = () => {
    // Validar los campos aquí
    if (!nombre || !fecha || !hora || !cantidadPersonas) {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }

    // Crear un objeto con los datos de la reserva
    const reserva = {
      nombre,
      fecha,
      hora,
      cantidadPersonas: parseInt(cantidadPersonas, 10), // Convierte a número
    };

    // Llamar a la función de devolución de llamada para enviar la reserva
    onReservaSubmit(reserva);

    // Limpiar los campos después de enviar
    setNombre('');
    setFecha('');
    setHora('');
    setCantidadPersonas('');
  };

  return (
    <View>
      <Text>Nombre:</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre del cliente"
      />

      <Text>Fecha:</Text>
      <Button title="Seleccionar Fecha" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <Text>Hora:</Text>
      <Button title="Seleccionar Hora" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />

      <Text>Cantidad de Personas:</Text>
      <TextInput
        value={cantidadPersonas}
        onChangeText={setCantidadPersonas}
        placeholder="Cantidad de personas"
        keyboardType="numeric"
      />

      <Button title="Hacer Reserva" onPress={handleSubmit} />
    </View>
  );
};

export default ReservaForm;
