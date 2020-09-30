import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem, Layout, Text } from '@ui-kitten/components';

interface Prop {
    text: string,
    value: string,
}

export class ValueBox extends React.Component<Prop>{
    render() {
        return (
            <Layout style={styles.box}>
                <Layout style={styles.content}>
                    <Text>{this.props.text}</Text>
                    <Text>{this.props.value}</Text>
                </Layout>
            </Layout>
        );
    }
};

const styles = StyleSheet.create({
 box: {
    width:'50%',
    padding: 1,
  },
  content: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  }
});

export default ValueBox;
