import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default BoxModelDemo = () => (
	<View style={styles.main}>
		<Text style={styles.content}>React</Text>
		<Text style={styles.content}>Angular</Text>
	</View>
);

const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingVertical: 20,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	content: {
		padding: 10,
		margin: 0,
		backgroundColor: '#FFFFF0',
		width: 187.5,
		height: 125,
		borderWidth: 1,
		borderColor: 'green',
		textAlign: 'center',
		fontSize:22,
		color: 'green',
		marginHorizontal:0 /* making this value > 0 will impact the layout, give a try */
	}
});