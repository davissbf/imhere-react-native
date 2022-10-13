import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { style } from './styles';

export const Home = () => {
  const handleParticipantAdd = () => {
    console.log("Você clicou no botão de adicionar participante!!!")
  }

  return (
    <View style={style.container}>
      <Text style={style.eventName}>
        Davi - Dev Muito Doido..
      </Text>

      <Text style={style.eventDate}>
        Sexta, 14 de outubto de 2022.
      </Text>

        <View style={style.form}>
          <TextInput
            style={style.input}
            placeholder="Nome do Participante"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity style={style.button} onPress={handleParticipantAdd}>
            <Text style={style.buttonText}>
            +
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
