import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

const Splash = () => {
    return(
        <View style={styles.container}>
            <Image
            resizeMode='contain'
            style={styles.image}
            source={require('../../../assets/images/splash_image.png')}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}> You'll find</Text>
                <Text style={[styles.title, styles.innerTitle]}> All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button title="Sign up" />
            <Button title="Sign in" />
        </View>
    )
}
export default Splash;