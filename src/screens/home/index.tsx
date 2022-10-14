import {Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import { styles } from './styles';
import { Participant } from "../../componentes/Participant";

export const Home = () => {
    const participants = ['Davi', 'Marcelo', 'Elizabete', 'Lucas', 'Pedro', 'Marcelo  Junior', 'Katia', 'Sheila', 'Andressa', 'Joao', 'Maria'];

    const handleParticipantAdd = () => {
    console.log("Você clicou no botão de adicionar participante!!!")
    }

    const handleParticipantRemove = (name: string) => {
      console.log(`Você clicou no botão de remover o participante ${name}!!`)
    }

    return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Davi - Dev Muito Doido..
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 14 de outubto de 2022.
      </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do Participante"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
            +
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map((participant: string) => (
                    <Participant
                        key={participant}
                        name={participant}
                        onRemove={() => handleParticipantRemove(participant)}
                    />
                ))
            }
        </ScrollView>
    </View>
    );
}
