import React from 'react';
import {
	ListView,
	Text,
	View,
	StyleSheet,
	Image,
	ActivityIndicator
} from 'react-native';
import {getRandomColor} from '../utils'


export default  class ContactList extends React.Component {

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});
		this.state = {
			dataSource: ds.cloneWithRowsAndSections(props.contacts),
			loading: true
		}
	}

	renderRow(rowData, sectionIndex, rowIndex) {
		const viewStyleToApply = rowIndex % 2 == 0 ? styles.row : styles.rowReverse;
		const textStyleToApply = rowIndex % 2 == 0 ? styles.title : styles.titleReverse;
		return (
			<View style={viewStyleToApply}>
				<Image source={{uri:rowData.picture.medium}} style={styles.profile}/>
				<Text
					style={textStyleToApply}>{rowData.name.first.charAt(0).toUpperCase() + rowData.name.first.slice(1) }, { rowData.name.last.charAt(0).toUpperCase() + rowData.name.last.slice(1) }</Text>
			</View>
		)
	}

	render() {
		if (this.state.loading) {
			setTimeout(() => this.setState({loading: false}), 2000);
			return <ActivityIndicator animating={this.state.loading} color={"#ad62ef"} size={'large'}/>
		}
		else
			return <ListView
				pageSize={20}
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				renderSectionHeader={(sectionData, alpha) => {
				return (<View>
				<Text style={[styles.sectionHeader, {backgroundColor: getRandomColor()}]}>{alpha.toUpperCase()}</Text>
				</View>)
			}}
			/>
	}

	static
	defaultProps = {
		contacts: require('../data.json')
	}
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		padding: 5,
		marginBottom: 2,
		backgroundColor: '#e6e8ed'
	},
	rowReverse: {
		flex: 1,
		flexDirection: 'row-reverse',
		padding: 5,
		marginBottom: 2,
		backgroundColor: '#e6e8ed'
	},

	title: {
		paddingLeft: 20,
		fontWeight: '700',
		fontSize: 18,
		alignSelf: 'center'
	},
	titleReverse: {
		paddingRight: 20,
		fontWeight: '700',
		fontSize: 18,
		alignSelf: 'center'
	},
	sectionHeader: {
		fontWeight: "bold",
		color: "#ffffff",
		fontSize: 22,
		marginBottom: 8,
		paddingLeft: 20
	},
	profile: {
		height: 75,
		width: 75,
		borderRadius: 37
	}
});