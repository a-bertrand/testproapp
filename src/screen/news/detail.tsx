import { Article } from "../../models/Article";
import React from "react";
import {articles} from '../../fakeData';
import Loader from "../../components/Loader";
import { Layout, Text, Divider, Icon } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView, TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import SpaceDivider from "../../components/SpaceDivider";


interface State {
	article : Article | null,
	currentId: number
}

export default class NewsDetail extends React.Component<any, State> {
	constructor(props: any){
		super(props)
		this.state = {
			article : null,
			currentId: 0,
		}
	}
	componentDidMount(){
		const {id} = this.props.route.params
		this.setState({'article': articles[id], 'currentId': id});
	}
	nextId() {
		const id = this.state.currentId;
		if (id == articles.length - 1 ) {
			return 0
		} else {
			return id + 1
		}
	}
	previousId() {
		const id = this.state.currentId;
		if (id == 0) {
			return articles.length - 1
		} else {
			return id - 1
		}
	}
	navigate(newId: number) {
		this.setState({
			'article': articles[newId],
			'currentId': newId
		});
		this.refs.scrollView.scrollTo({y: 0, animated: true})
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
				<ScrollView ref='scrollView'>
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
					<SpaceDivider />
					<Layout style={styles.buttonsBox}>
						<View style={styles.imageBoxLeft}>
							<TouchableHighlight
								onPress={this.navigate.bind(this, this.previousId()) }
								underlayColor='rgba(200,200,200,0.0)'
							>
								<View style={{flexDirection: 'row', alignItems:'center', marginBottom: 15}}>
									<Icon
										fill='#8F9BB3'
										name='arrowhead-left-outline'
										style={styles.icon}
									/>
									<Text> 
										Précédent 
									</Text>
								</View>
							</TouchableHighlight>	
							<Image
								style={styles.btnImage}
								source={{uri: articles[this.previousId()].imageUrl}}
							/>
						</View>
						<View style={styles.imageBoxRight}>
							<TouchableHighlight
								onPress={this.navigate.bind(this, this.nextId())}
								underlayColor='rgba(200,200,200,0.0)'
							>
								<View style={{flexDirection: 'row', alignItems:'center', marginBottom: 15}}>
									<Text>
										Suivant
									</Text>
									<Icon
										fill='#8F9BB3'
										name='arrowhead-right-outline'
										style={styles.icon}
									/>
								</View>
							</TouchableHighlight>
							<Image
								style={styles.btnImage}
								source={{uri: articles[this.nextId()].imageUrl}}
							/>
						</View>
					</Layout>	
				</ScrollView>
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

	buttonsBox: {
		flexDirection: 'row',
		height: 165,
	},
	imageBoxLeft: {
		width: '50%',
 		flexDirection: 'column',
		alignItems: 'flex-start',
		paddingRight: 15,
		paddingLeft: 15,
	},
	imageBoxRight: {
		width: '50%',
		flexDirection: 'column',
		alignItems: 'flex-end',
		paddingLeft: 15,
		paddingRight: 15,
	},
	btnImage: {
		height: 100,
		width: '100%'
	},
	icon: {
		height: 40,
		width: 40,
	}
});
  