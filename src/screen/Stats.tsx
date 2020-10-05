import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import ValueBox from '../components/ValueBox';
import CircularDiagram from '../components/CircularDiagram';
import DataTable from '../components/DataTable';
import { ScrollView } from 'react-native-gesture-handler';
import SpaceDivider from '../components/SpaceDivider';

const data = new Array(8).fill({
  title: 'Item',
  description: 'Description for Item',
});

const Stats = () => {
  return (
    <ScrollView>
      <Layout>
        <Text category='p1' appearance='hint' style={{textAlign: 'center', marginBottom: 15}}>
          ( Dernière actualisation le 28/01/2020 )
        </Text>
        <Layout style={styles.boxTopStats}>
          <ValueBox text="Casse totale" value='15678 €'/>
          <ValueBox text="Revalorisation totale" value='6599 €'/>
          <ValueBox text="Revalorisation totale %" value='28 %'/>
          <ValueBox text="Pertes réelles" value='9250 €' />
        </Layout>
        <SpaceDivider />
        <Layout style={styles.imageBox}>
          <Image 
            style={styles.image}
            source={require('../../assets/podium.png')}
          />
        </Layout>
        <SpaceDivider />
        <Layout style={styles.boxDiagram}>
          <Text category='h5'> Taux D'ailguillage : </Text>
          <CircularDiagram />
        </Layout>
        <SpaceDivider />
        <Text category='h5' style={{marginBottom: 15}}>Top articles stickés</Text>
        <Layout>
          <DataTable />
        </Layout>
        <SpaceDivider />
        <Text category='h5' style={{marginBottom: 15}}>Top fréquence</Text>
        <Layout>
          <DataTable />
        </Layout>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxTopStats: {
    alignContent: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxDiagram: {
    alignItems: 'center',
  },
  boxContentStats: {
    height:100,
    width:'50%',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 250,
  },
  imageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250
  }
});

export default Stats;
