import React from 'react'
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native'

export default HairlineWidthDemo = () => {
	return (<View style={viewStyles}>
		<TouchableHighlight
			style={[buttonStyles.core, buttonStyles.spacer]}
		>
			<Text>SignIn Normal</Text>
		</TouchableHighlight>
		<TouchableHighlight
			style={[buttonStyles.core, buttonStyles.hairlineBorder, buttonStyles.spacer]}
		>
			<Text>SignIn Hairline</Text>
		</TouchableHighlight>
		<TouchableHighlight
			style={[buttonStyles.core, buttonStyles.primary, buttonStyles.spacer]}
		>
			<Text>Logout Normal</Text>
		</TouchableHighlight>
		<TouchableHighlight
			style={[buttonStyles.core, buttonStyles.primary, buttonStyles.hairlineBorder]}
		>
			<Text>Logout Hairline</Text>
		</TouchableHighlight>
	</View> );
}

const viewStyles = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#FFFFF0'
};

const buttonStyles = StyleSheet.create({
	core: {
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: 'teal',
		borderRadius: 3,
		padding: 3,
		paddingLeft: 5,
		paddingRight: 5
	},
	primary: {
		backgroundColor: 'orangered',
		borderColor: 'black'
	},
	hairlineBorder: {
		borderWidth: StyleSheet.hairlineWidth
	},
	spacer: {
		marginBottom: 10
	}
});