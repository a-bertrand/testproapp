import React from 'react';
import { StyleSheet } from 'react-native';
import { Toggle } from '@ui-kitten/components';

interface Prop {
    text: string,
}
interface State {
    value: boolean,
}

export class SwitchBtn extends React.Component<Prop, State>{
    constructor(prop: Prop) {
        super(prop)
        this.state = {
            value: true,
        }
    }
    onValueChange() {
        this.setState({value: !this.state.value})
    }
    render() {
        return (
            <Toggle
                style={styles.toggle}
                checked={this.state.value}
                onChange={this.onValueChange.bind(this)}
            >
              {this.props.text}
            </Toggle>
        );
    }
};

const styles = StyleSheet.create({
  toggle: {
    marginBottom: 25,
  },
});

export default SwitchBtn;
