import { Layout, CheckBox } from "@ui-kitten/components";
import {UpdateDescription, UpdateDescriptionProps } from "./UpdateDescription"
import React from "react";
import { StyleSheet, View } from "react-native";


interface AvailableUpdateProps extends  UpdateDescriptionProps {}


export default class AvailableUpdate extends React.Component<AvailableUpdateProps, any>{
    constructor(prop: any) {
        super(prop)
        this.state = {
            isChecked: false  
        } 
    }
    check() {
        this.setState({'isChecked': !this.state.isChecked})
    }
    render() {
        return (
            <Layout style={styles.box}>
                <View style={styles.boxCheckbox}>
                    <CheckBox
                        checked={this.state.isChecked}
                        onChange={this.check.bind(this)}
                        status='info'
                    />
                </View>
                <View style={styles.boxDescription}>
                    <UpdateDescription {...this.props} onlyText={true}/>
                </View>    
            </Layout> 
        )
    }
}

const styles = StyleSheet.create({
    box: {
        padding: 35,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent: 'flex-start'
    },
    boxCheckbox: {
        width: '15%',
    },
    boxDescription: {
        width: '85%',
        backgroundColor: 'yellow',
    },
});
