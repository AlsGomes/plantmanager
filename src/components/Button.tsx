import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts'

export interface ButtonProperties extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProperties) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: colors.green,
            height: 56,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 16,
            color: colors.white,
            fontFamily: fonts.heading
        }
    }
)