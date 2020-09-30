import { Text, Layout, Icon, Divider } from '@ui-kitten/components';
import { StyleSheet, Dimensions } from 'react-native';
import  MenuItem from './NewsListItem';
import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class NavHeader extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Layout style={styles.headerStyle}>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor='rgba(200,200,200,0)'
                    onPress={ () => navigate('Menu')}
                >
                    <Icon
                        fill='#8F9BB3'
                        name='menu-outline'
                        style={styles.icon}
                    />
                </TouchableHighlight>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        height: 50,
        padding:5
    },
    icon: {
        width:30,
        height: 30,
        alignSelf:'flex-start',
    },
    text: {
        marginLeft: 25,
        textTransform: 'capitalize',
    },
});
