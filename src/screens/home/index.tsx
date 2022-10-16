import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';

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
        
        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={(item) => (
                <Participant
                    key={item.item}
                    name={item.item}
                    onRemove={() => handleParticipantRemove(item.item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Niguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        />
    </View>
    );
}
