import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

type SplashProps = {
  onSignUp?: () => void;
  onSignIn?: () => void;
};

const Splash: React.FC<SplashProps> = ({ onSignUp, onSignIn }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/images/splash-icon.png')}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>You&apos;ll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Text style={styles.subtitle}>Find your perfect furniture for every room with confidence.</Text>

      <View style={styles.actions}>
        <Button title="Sign up" onPress={onSignUp} />
        <Button title="Sign in" onPress={onSignIn} />
      </View>
    </View>
  );
};

export default Splash;
