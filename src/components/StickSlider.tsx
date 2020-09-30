import React from 'react';
import { StyleSheet, Text } from "react-native";
import { Card, Layout } from "@ui-kitten/components";
import Slider from '@react-native-community/slider';

export const STATE_SUCCESS = 'success'
export const STATE_ERROR = 'danger'

interface IStickSliderProps {}
interface IStickSliderState {
    value: number,
}

export class StickSlider extends React.Component<IStickSliderProps, IStickSliderState> {
    constructor(prop: IStickSliderProps) {
        super(prop)
        this.state = {
            value: 40,
        }
    }
    onValueChange(newValue: number) {
        this.setState({value: newValue})
    }
    render() {
        return (
            <Layout>
                <Text category='h5'>Plafond maximale de réduction : {this.state.value} % </Text>
                <Slider
                    style={{width: '100%', height: 40}}
                    minimumValue={0}
                    value={this.state.value}
                    maximumValue={100}
                    onValueChange={this.onValueChange.bind(this)}
                    minimumTrackTintColor="rgb(0,200,0)"
                    maximumTrackTintColor="rgb(0,200,0)"
                    step={1}
                />
            </Layout>
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

export default StickSlider;
