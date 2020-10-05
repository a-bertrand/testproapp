import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout, Text, TabBar, Tab, TabView } from '@ui-kitten/components';
import AvailableUpdate from '../components/Update/AvailableUpdate';
import BoughtUpdate from '../components/Update/BoughtUpdate';


const { Navigator, Screen } = createMaterialTopTabNavigator();


export default class Upgrade extends React.Component {
    constructor(prop) {
      super(prop)
      this.state = {
        selectedIndex: 0
      }
    }
    setSelectedIndex(selectedIndex) {
      console.log('clickn', selectedIndex)
      this.setState({'selectedIndex': selectedIndex})
    }
    render() {
        return (
          <Layout>
          <TabView
            selectedIndex={this.state.selectedIndex} 
            onSelect={index => this.setSelectedIndex.bind(this)}
          >
            <Tab title='Eligible'>
                <Layout style={styles.tabContainer}>
                  
                </Layout>
            </Tab>
            <Tab title='Acquis'>
                <Layout style={styles.tabContainer}>
                  <BoughtUpdate 
                    title='Zéro gachis' 
                    price={666} 
                    description='Etiam non lacus justo. Donec molestie sagittis dolor ac ullamcorper. '
                  />
                </Layout>
            </Tab>
          </TabView>
        </Layout>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Upgrade;
