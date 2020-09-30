import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

interface Prop {
    text: string,
    navigate: any,
    destination: strint,
    borderBottomActivate: boolean | null
}

export default class MenuItem extends React.Component<Prop>{
    render() {
        const navigate  = this.props.navigate;
        const destination  = this.props.destination
        return (
            <Layout style={
                    this.props.borderBottomActivate === true ? 
                    styles.bottomBox : styles.box
                }>
                    <TouchableHighlight 
                        underlayColor='rgba(200,200,200,0.2)'
                        onPress={() => navigate(destination)}
                    >
                        <Text style={styles.text}>
                            {this.props.text}
                        </Text>
                    </TouchableHighlight>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(100,100,100,0.5)',
        width:'80%',
        justifyContent:'center',
        backgroundColor: 'transparent'
    },
    bottomBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100,100,100,0.5)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(100,100,100,0.5)',
        width:'80%',
        justifyContent:'center',
        backgroundColor: 'transparent'
    },
    text: {
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});