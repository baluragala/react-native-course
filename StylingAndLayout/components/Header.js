import React from 'react';
import {View, Text} from 'react-native';

export default Header = () => {
	return <View style={headerViewStyle}>
		<Text style={textStyles}>This is header</Text>
	</View>
};

const headerViewStyle = {
	backgroundColor: 'maroon',
	marginBottom: 10
};

const textStyles = {
	color: '#fff',
	fontSize: 22,
	fontWeight: '900',
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 5,
	paddingBottom: 5
};