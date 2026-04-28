import { colors } from '@/utils/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 15,
    marginBottom: 32,
    lineHeight: 22,
  },
  form: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginVertical: 18,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    color: colors.black,
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  bottomText: {
    color: '#6B7280',
  },
  bottomLink: {
    color: colors.blue,
    fontWeight: '700',
  },
});

export default styles;
