import React, { Component } from 'react';
import { NativeTouchEvent, NativeSyntheticEvent, TouchableHighlight, Text, StyleSheet } from 'react-native';


interface IRoundedBtnProps {
    BackgroundColor: string;
    navigationCallback: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
    BtnText: string;
    BorderColor: string;
}


export default class RoundedBtn extends Component<IRoundedBtnProps, any> {
    static DefaultProps = {
        BackgroundColor: 'transparent',
        BtnText: '',
        BorderColor: 'white',
    }
    constructor(props: IRoundedBtnProps) {
        super(props);
    }
	render() {
        const { 
            BackgroundColor, 
            BorderColor, 
            BtnText, 
            navigationCallback 
        } = this.props;

		return (
            <TouchableHighlight 
                onPress={navigationCallback} 
                style={{
                    ...styles.BtnStyle,
                    borderColor: BorderColor,
                    backgroundColor: BackgroundColor,
                    
                }}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
            >
            <Text style={styles.ContentText}>
                {BtnText}
            </Text>
            </TouchableHighlight>
		);
	}
}


const styles = StyleSheet.create({
    BtnStyle: {
        marginTop: 25,
        minWidth: 250,
        borderRadius: 50,
        padding: 25,
        width: 340,
    },
    ContentText : {
        fontSize:20,
        fontFamily:'OpenSans_400Regular',
        textAlign:'center',
    },
});