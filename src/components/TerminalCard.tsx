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
    divider: {
        marginBottom: 15,
        marginTop: 15,
    },
    card: {
        width:150,
        margin: 10,
    },
    image: {
        width: 30,
        height: 70
    },
    subTextSuccess: {
        fontSize: 12,
    },
    subTextError: {
        fontSize: 12,
    }, 
    cardContent: {
        alignItems: 'center',
    }
});

export default TerminalCard;
