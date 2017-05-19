import React from 'react'
import {
	Image,
	View,
	StyleSheet,
	Text,
	ScrollView
} from 'react-native';

export default StylingImageDemo1 = () => {
	return (
		<ScrollView style={styles.viewStyle}>
			<View style={styles.row}>
				<Text style={[styles.textStyle]}>Stretch</Text>
				<Image
					source={require('../assets/minion2.png')}
					style={{ width: 150, height: 200, flex:2 }}
					resizeMode='stretch'
				/>
			</View>
			<View style={styles.row}>
				<Text style={[styles.textStyle]}>Cover</Text>
				<Image
					source={require('../assets/minion2.png')}
					style={{ width: 150, height: 200, flex:2 }}
					resizeMode='cover'
				/>
			</View>
			<View style={styles.row}>
				<Text style={[styles.textStyle]}>Center</Text>
				<Image
					source={require('../assets/minion2.png')}
					style={{ width: 150, height: 200, flex:2 }}
					resizeMode='center'
				/>
			</View>
			<View style={styles.row}>
				<Text style={[styles.textStyle]}>Contain</Text>
				<Image
					source={require('../assets/minion2.png')}
					style={{ width: 150, height: 200, flex:2 }}
					resizeMode='contain'
				/>
			</View>
			<View style={styles.row}>
				<Text style={[styles.textStyle]}>Repeat</Text>
				<Image
					source={require('../assets/minion2.png')}
					style={{ width: 150, height: 200, flex:2 }}
					resizeMode='repeat'
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	viewStyles: {
		flex: 1
	},
	row: {
		height: 200,
		borderWidth: 1,
		borderColor: 'red',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'lightseagreen'
	},
	textStyle: {
		width: 150,
		fontSize: 22,
		fontWeight: '900',
		paddingLeft: 10
	}
});

/*

 <Text style={{justifyContent:'center'}}>Stretch</Text>


 * */