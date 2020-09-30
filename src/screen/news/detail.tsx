import { Article } from "../../models/Article";
import React from "react";
import {articles} from '../../fakeData';
import Loader from "../../components/Loader";
import { Layout, Text, Divider } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";


interface State {
	article : Article | null
}

export default class NewsDetail extends React.Component<any, State> {
	constructor(props: any){
		super(props)
		this.state = {
            article : null,
		}
	}
	componentDidMount(){
		const {id} = this.props.route.params
		this.setState({'article': articles[id]});
	}
	render() {
		const article = this.state.article;
		if (article === null) {
			return (
				<Layout>
					<Loader />
				</Layout>
			)
		}
		return (
            <Layout>
				<Image
					style={styles.image}
					source={{uri: article.imageUrl}}
				/>
				<Layout style={{padding:25}}>
					<Text category='h2' style={{ textAlign: "center"}}>
						{article.title}
					</Text>
					<Divider style={styles.customDivider}/>
					<Text category='p1'>
						{article.description}
					</Text>
				</Layout>
            </Layout> 
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		httpClient: state.reducer.httpClient
	};
};

const styles = StyleSheet.create({
  image: {
	width: '100%', 
	height: 150,
  },
  stepListBox: {
	marginTop: 25
  },
  customDivider: {
	marginTop:10,
	marginBottom:10,
  },
});
  