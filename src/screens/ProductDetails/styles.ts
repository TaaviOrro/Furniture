import { colors } from '@/utils/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.black,
  },
  subtitle: {
    fontSize: 16,
    color: colors.blue,
  },
});

export default styles;
