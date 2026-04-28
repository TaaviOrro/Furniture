import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
    title: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, ...props }) => {
    const handlepress = () => {
        if (onPress) {
            onPress();
        } else {
            console.log('Button pressed!');
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={handlepress}
            style={[styles.container, style]}
            {...props}
        >
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
