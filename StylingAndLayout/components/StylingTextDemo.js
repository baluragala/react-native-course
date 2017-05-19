import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export default StylingTextDemo = () => (
	<View style={styles.viewStyle}>
		<Text style={[styles.text, styles.center, styles.thin]}>
			lean in center
		</Text>
		<Text style={[styles.text,styles.code]}>let name='React';</Text>
		<Text style={styles.text}>
			<Text style={styles.bold}>Bold</Text> normal <Text style={styles.italic}>italic</Text>
		</Text>
		<Text style={[styles.text, styles.moreLineHeight, styles.right]}>
			text aligned to right.
		</Text>

	</View>
);

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		justifyContent: 'center',
		margin: 0,
		padding: 15
	},
	text: {
		fontSize: 22,
		marginBottom: 20
	},
	bold: {
		fontWeight: 'bold'
	},
	thin: {
		fontWeight: '200'
	},
	italic: {
		fontStyle: 'italic'
	},
	moreLineHeight: {
		lineHeight: 40
	},
	right: {
		textAlign: 'right'
	},
	center: {
		textAlign: 'center'
	},
	code: {
		fontFamily: 'Courier'
	}
});