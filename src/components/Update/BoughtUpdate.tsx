import { Layout, } from "@ui-kitten/components";
import {UpdateDescription } from "./UpdateDescription"
import React from "react";
import { StyleSheet } from "react-native";


interface BoughtUpdateProps {
    title: string,
    price: number,
    description: string
}


export default class BoughtUpdate extends React.Component<BoughtUpdateProps>{
    render() {
        return (
            <Layout style={styles.box}>
                <UpdateDescription {...this.props} onlyText={false}/>
            </Layout> 
        )
    }
}

const styles = StyleSheet.create({
    box: {
        padding: 35,
    },
});