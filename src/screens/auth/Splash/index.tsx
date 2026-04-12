import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

type SplashProps = {
    onSignUp?: () => void;
    onSignIn?: () => void;
};

const Splash: React.FC<SplashProps> = ({ onSignUp, onSignIn }) => {
    return(
        <View style={styles.container}>
            <Image
            resizeMode='contain'
            style={styles.image}
            source={require('../../../assets/images/splash-icon.png')}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> You&apos;ll find</Text>
                <Text style={[styles.title, styles.innerTitle]}> All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button title="Sign up" onPress={onSignUp} />
            <Button title="Sign in" onPress={onSignIn} />
        </View>
    )
}
export default Splash;
