import { colors } from '@/utils/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  profileInfo: {
    backgroundColor: colors.blue,
    padding: 20,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: colors.orange,
    marginBottom: 10,
  },
});

export default styles;