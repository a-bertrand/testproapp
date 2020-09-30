import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Divider, List } from '@ui-kitten/components';
import NewsMenuItem from '../../components/NewsListItem';
import { articles } from '../../fakeData';

class News extends React.Component<any> {
  render() {
    const _this = this;
    const renderItem = ({ item, index }) => (
      <NewsMenuItem article={item} id={index} navigation={_this.props.navigation}/>
    );
  
    return (
      <List
        style={styles.container}
        data={articles}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    );
  }
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    maxHeight: height,
    marginTop: 15,
  },
});

export default News;
