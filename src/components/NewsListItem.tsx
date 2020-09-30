import { Text, Layout, Icon, Divider } from '@ui-kitten/components';
import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { StyleSheet, Image, ImageBackground, View } from 'react-native';
import { Article } from '../models/Article';


interface IProps {
    article: Article,
    id: number,
    navigation: any
}


export default class NewsListItem extends Component <IProps>{
    private MAX_TEXT_LIMIT = 200;

    constructor(props: IProps){
        super(props)
        this.state = {
            navigationShow: false
        }
    }
    
    render() {
        const navigate = this.props.navigation.navigate;
        if(this.props.article) {
            const {title, description, imageUrl} = this.props.article
            const url = { uri: imageUrl };
            return (
                <Layout style={styles.box}>
                    <TouchableHighlight 
                        onPress={() => navigate("NewsDetail", {id: this.props.id})}
                        underlayColor='rgba(200,200,200,0.5)'
                    >
                            <ImageBackground source={url} style={styles.image}>
                                <View style={styles.overlay} />
                                <View style={styles.contentBox}>
                                    <Text category='h4' style={styles.text}>{title}</Text>
                                    <Text category='p1' style={styles.text}> 
                                        { 
                                            ((description).length > this.MAX_TEXT_LIMIT) ? 
                                            (((description).substring(0,this.MAX_TEXT_LIMIT-3)) + '...') : 
                                            description 
                                        }
                                    </Text>
                                </View>
                        </ImageBackground>
                    </TouchableHighlight>
                </Layout>
            ) 
        } else {
            return (<></>)
        }
               
    }
}


const styles = StyleSheet.create({
    box: {
        maxHeight:150,
        marginBottom: 15
    },
    text: {
        color:'white'
    },
    image: {
        width:"100%",
        height: '100%'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    overlay: {
        backgroundColor: 'rgba(50,50,50,0.6)',
        position:'absolute',
        width:'100%',
        height: '100%'
    },
    contentBox: {
        padding: 10,
    }
});