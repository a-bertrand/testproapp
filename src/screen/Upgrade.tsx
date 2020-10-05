import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Tab, TabView } from '@ui-kitten/components';
import AvailableUpdate from '../components/Update/AvailableUpdate';
import BoughtUpdate from '../components/Update/BoughtUpdate';


class Upgrade extends React.Component {
    constructor(prop) {
      super(prop)
      this.state = {
        selectedIndex: 0
      }
    }
    setSelectedIndex(selectedIndex: number) {
      this.setState({'selectedIndex': selectedIndex})
    }
    render() {
        return (
          <Layout>
            <TabView
              selectedIndex={this.state.selectedIndex}
              onSelect={this.setSelectedIndex.bind(this)}
            >
              <Tab title='Eligible'>
                  <Layout style={styles.tabContainer}>
                    <AvailableUpdate 
                      title='EasyTurn'
                      price={400}
                      description=' Sed lacus enim, convallis non euismod ac, elementum id metus. Nulla facilisi. Phasellus faucibus eros id neque faucibus elementum. Aenean pellentesque dapibus molli'
                    />
                    <AvailableUpdate 
                      title='Aiguillage'
                      price={400}
                      description=' Sed lacus enim, convallis non euismod ac, elementum id metus. Nulla facilisi. Phasellus faucibus eros id neque faucibus elementum. Aenean pellentesque dapibus molli'
                    />
                    <AvailableUpdate 
                      title='Tester le module de don'
                      price={0}
                      description=' Sed lacus enim, convallis non euismod ac, elementum id metus. Nulla facilisi. Phasellus faucibus eros id neque faucibus elementum. Aenean pellentesque dapibus molli'
                    />
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
      height: '100%'
    },
  });

export default Upgrade;
