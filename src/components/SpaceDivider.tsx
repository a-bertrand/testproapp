import React from 'react';
import { StyleSheet } from "react-native";
import { Divider } from "@ui-kitten/components";

const SpaceDivider = () => {
    return (
        <Divider style={styles.divider}/>
    )
}

const styles = StyleSheet.create({
    divider: {
        marginBottom: 20,
        marginTop: 20,
    },
});

export default SpaceDivider;
