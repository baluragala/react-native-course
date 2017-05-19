import React from 'react'
import {
	Image,
	View,
	StyleSheet,
	Text,
	ScrollView
} from 'react-native';

export default StylingImageDemo2 = () => {
	return (
		<Image
			source={require('../assets/prize.png')}
			style={styles.bgImage}
		>
			<View style={styles.root}>
				<Text style={styles.textStyle}>Inspiring Store</Text>
			</View>
		</Image>
	);
}

const styles = StyleSheet.create({
	bgImage: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover'
	},
	root: {
		flex: 1,
		alignItems: 'center'
	},
	textStyle: {
		color: 'orange',
		backgroundColor: 'rgba(0,0,0,0)',
		marginTop:150,
		fontWeight: '900',
		fontSize: 48,
	}
});

/*

 <Text style={{justifyContent:'center'}}>Stretch</Text>


 * */