import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ListaReservas = ({ reservas }) => {
  return (
    <View>
      <Text>Reservas existentes:</Text>
      {reservas.length === 0 ? (
        <Text>No hay reservas aún.</Text>
      ) : (
        <FlatList
          data={reservas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Nombre: {item.nombre}</Text>
              <Text>Fecha: {item.fecha}</Text>
              <Text>Hora: {item.hora}</Text>
              <Text>Cantidad de Personas: {item.cantidadPersonas}</Text>
              <Text>Sección: {item.seccion}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ListaReservas;
