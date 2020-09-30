import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import RoundedBtn from '../components/RoundedBtn';
import Video from "react-native-video";
import { Layout, Input, Button } from '@ui-kitten/components';
import HomeBtn from '../components/HomeBtn';


export default function App({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.overlay}/>
        <Video
            source={require('../../assets/zgVideo.mp4')}
            style={styles.videoPlayer}
            resizeMode='cover'
            muted={true}
        />
        <Layout style={styles.loginContainer}>
            <Input
                placeholder='Login' 
                style={styles.loginComponents}
            />
            <Input
                placeholder='Password'
                style={styles.loginComponents}
            />
            <HomeBtn navigationCallback={() => navigation.navigate('News')}  />
        </Layout>
      </View>
    );
}
  
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    loginComponents: {
        marginBottom:15,
        backgroundColor:'rgba(247, 249, 252, 0.7)',
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    videoPlayer: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        position:'absolute'
    },
    overlay: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        position: 'absolute',
        backgroundColor:'rgba(100, 100, 100, 0.5)',
        zIndex: 1
    },
    loginContainer: {
        zIndex:2, 
        backgroundColor:'transparent',
        width:'100%',
        padding:50,
        marginBottom:20
    }
}
);