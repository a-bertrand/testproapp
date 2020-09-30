import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Article', 'Ean', 'Uv poids'],
      tableData: [
        ['Ranou des de jambon tsr 150g', '3250391352333',  '45'],
        ['Ids scsson auvergne lr 300g', '3250390408970', '40'],
        ['Mini bn abricot 175g', '3061990142467', '30'],
        ['Ranou des de jambon tsr 150g', '3250391352333',  '25'],
        ['Ids scsson auvergne lr 300g', '3250390408970', '10'],
        ['Mini bn abricot 175g', '3061990142467', '8'],
        ['Ranou des de jambon tsr 150g', '3250391352333',  '5'],
        ['Ids scsson auvergne lr 300g', '3250390408970', '2'],
        ['Mini bn abricot 175g', '3061990142467', '1'],
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});