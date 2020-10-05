import { View, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";


export interface UpdateDescriptionProps {
    title: string,
    price: number,
    description: string,
    onlyText?: boolean
}


export class UpdateDescription extends React.Component<UpdateDescriptionProps>{
    render() {
        return (
            <Layout style={styles.box}>
                <View style={styles.innerTopTextBlox}>
                    <Text category='p1' style={styles.innerText}>
                        {this.props.title}
                    </Text>
                    { 
                        !this.props.onlyText ? <></> : 
                        <Text category='p1' style={styles.innerTextPrice}>
                            {this.props.price} € / mois
                        </Text> 
                    }
                </View>
                <View style={styles.innerTopTextBlox}>
                    <Text category='p2'>
                        {this.props.description}
                    </Text>
                </View>
            </Layout> 
        )
    }
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    innerTopTextBlox: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    innerText: {
        width: '60%',
        fontWeight: "bold",
    },
    innerTextPrice: {
        width: '40%',
        textAlign: 'right'
    },
});
