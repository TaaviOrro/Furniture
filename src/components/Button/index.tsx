import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
    title: string;
    onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
    const handlepress = () => {
        if (onPress) {
            onPress();
        } else {
            console.log('Button pressed!');
        }
    };

    return(
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Text style ={styles.title}>{title}</Text>           
        </TouchableOpacity>
    )
}

export default Button;