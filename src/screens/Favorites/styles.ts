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
  productCard: {
    backgroundColor: colors.blue,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: colors.orange,
    marginTop: 5,
  },
});

export default styles;