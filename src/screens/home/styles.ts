import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 48,
  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,  
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    flex: 1,
    marginRight: 12,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 48,
  },

  listEmptyText: {
    color: '#fff',
    fontSize: 16,
  }
});