import React, { Component } from 'react';
import { NativeTouchEvent, NativeSyntheticEvent, StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';


interface IRoundedBtnProps {
    navigationCallback: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}


export default class HomedBtn extends Component<IRoundedBtnProps, any> {
    constructor(props: IRoundedBtnProps) {
        super(props);
    }
	render() {
        const { 
            navigationCallback 
        } = this.props;

		return (
            <Button 
                status='basic' 
                style={styles.homeStyle}
                onPress={navigationCallback} 
            >
                Connexion
            </Button>
		);
	}
}


const styles = StyleSheet.create({
    homeStyle: {
        marginBottom:15,
        backgroundColor:'rgba(247, 249, 252, 0.7)',
    },
});