import React from 'react';
import { StyleSheet, Image, Text, Alert } from "react-native";
import { Card, Layout } from "@ui-kitten/components";


export const STATE_SUCCESS = 'success'
export const STATE_ERROR = 'danger'

interface ITerminalCardProps {
    text: string,
    state: string,
}

export class TerminalCard extends React.Component<ITerminalCardProps>{
    onPressCard() {
        Alert.alert('', 'Derniere synchro le 22/04/2020')
    }
    render() {
        return (
            <Card style={styles.card} status={this.props.state} onPress={this.onPressCard}>
                <Layout style={styles.cardContent}>
                    <Image style={styles.image} source={require('../../assets/terminal.png')}/>
                    <Text>{this.props.text}</Text>
                    <Text style={ 
                            this.props.state == STATE_SUCCESS ? 
                            styles.subTextSuccess : 
                            styles.subTextError
                        }
                    > 
                        { 
                            this.props.state == STATE_SUCCESS ? 'Synchronisé': 'Non-synchronisé'
                        }
                    </Text>
                </Layout>
                
            </Card>
        )
    }
}; 

const styles = StyleSheet.create({
    card: {
        width:120,
        margin: 10,
    },
    image: {
        width: 30,
        height: 75
    },
    subTextSuccess: {
        fontSize: 8,
        color: 'rgba(0,150,0,0.8)'
    },
    subTextError: {
        fontSize: 8,
        color: 'rgba(200,0,0,0.8)'
    }, 
    cardContent: {
        alignItems: 'center',
    }
});

export default TerminalCard;
