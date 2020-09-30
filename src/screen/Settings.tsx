import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text} from '@ui-kitten/components';
import SpaceDivider from '../components/SpaceDivider';
import {TerminalCard, STATE_SUCCESS, STATE_ERROR} from '../components/TerminalCard';
import { StickSlider } from '../components/StickSlider';
import { ScrollView } from 'react-native-gesture-handler';
import SwitchBtn from '../components/SwitchBtn';


const data = new Array(8).fill({
  title: 'Item',
  description: 'Description for Item',
});

const ListDividersShowcase = () => {
  return (
    <Layout>
      <ScrollView style={{padding:25}}>
        <StickSlider />
        <SpaceDivider />
        <Text style={{textAlign:'center', marginBottom:25}}>Mes terminaux :</Text>
        <Layout style={styles.terminalBox}>
          <TerminalCard state={STATE_SUCCESS} text='Terminal A'/>
          <TerminalCard state={STATE_SUCCESS} text='Terminal B'/>
          <TerminalCard state={STATE_ERROR} text='Terminal C'/>
          <TerminalCard state={STATE_SUCCESS} text='Terminal D'/>
        </Layout>
        <SpaceDivider/>
        <Layout style={styles.notificationsBox}>
        <Text>Notifications :</Text>
          <Layout style={styles.innerNotificationsBox}>
            <SwitchBtn  text='Nouvel article'/>
            <SwitchBtn  text='Terminal non synchro'/>
            <SwitchBtn  text='Nouvelles stats'/>
            <SwitchBtn  text='Taux de stick trop faible'/>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  boxCasseTotale: {
    maxHeight: 200,
  },
  terminalBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  notificationsBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  innerNotificationsBox: {
    paddingTop: 25,
    width:'100%',
    alignItems: 'flex-start',
    marginBottom: 30,
  }
});

export default ListDividersShowcase;
