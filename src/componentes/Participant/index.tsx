import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles'

interface InoutParticipant {
    name: string;
    onRemove: () => void;
}

export const Participant = (props: InoutParticipant) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
};
