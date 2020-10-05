import React, { Component } from "react"
import { Layout, Icon } from "@ui-kitten/components"
import { TouchableHighlight, StyleSheet, Platform } from "react-native"
import MenuItem from "./MenuItem"


export default class Menu extends Component {
    render() { 
        const { navigate, goBack } = this.props.navigation;
        if(navigate != undefined) {
            return (
                <Layout style={styles.box}>
                    <TouchableHighlight
                        style={styles.button}
                        underlayColor='rgba(200,200,200,0)'
                        onPress={() => goBack()}
                    >
                        <Icon
                            fill='#8F9BB3'
                            name='close-outline'
                            style={styles.icon}
                        />
                    </TouchableHighlight>
                    <Layout style={styles.contentItem}>
                        <MenuItem
                            text="Nouveautés"
                            navigate={navigate}
                            destination='News'
                        />
                        <MenuItem
                            text="Mes statistiques"
                            navigate={navigate}
                            destination='Stats'
                        />
                        <MenuItem
                            text="Paramètres"
                            navigate={navigate}
                            destination='Settings'
                            borderBottomActivate={true}
                        />
                    </Layout>
                </Layout>
            )
        } else {
            return (<></>)
        }
        
    }
}
const styles = StyleSheet.create({
    box: {
        height:'100%',
        backgroundColor: 'transparent',
        paddingTop: Platform.OS === 'ios' ? 90 : 0
    },
    closeButton: {
        width:40
    },
    icon : {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 10,
    },
    contentItem: {
        alignItems:'center',
        justifyContent: 'center',
        marginTop:100,
        backgroundColor: 'transparent'
    }
});