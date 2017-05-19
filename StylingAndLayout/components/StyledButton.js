import React from 'react';
import {
	Text,
	TouchableOpacity
} from 'react-native';

export default StyledButton = () => {
	return (
		<TouchableOpacity style={[btn, btnPrimary]}>
			<Text>Submit</Text>
		</TouchableOpacity>
	);
};

const btn = {
	borderStyle: 'solid',
	borderColor: '#d5d5d5',
	borderWidth: 1,
	backgroundColor: '#eee',
	borderRadius: 3,
	padding: 3,
	paddingLeft: 5,
	paddingRight: 5,
	marginTop: 20
};

const btnPrimary = {
	backgroundColor: 'orangered',
	borderColor: 'orange'
};
