import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

export interface ButtonProperties extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProperties) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} {...rest}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: colors.green,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            marginBottom: 10,
            height: 56,
            marginHorizontal: 10
        },
        buttonText: {
            color: colors.white,
            fontSize: 24
        }
    }
)