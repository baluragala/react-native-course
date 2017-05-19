import React from 'react';
import {View,StyleSheet} from 'react-native';


export default FlexBoxDemo1 = () => (
	<View style={styles.container}>
		<View style={[styles.item,{alignSelf:'flex-end'}]}/>
		<View style={[styles.item,{alignSelf:'center'}]}/>
		<View style={styles.item}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between', /*flex-start, center, flex-end,
																		space-between, space-around*/
		alignItems: 'flex-start'  /*flex-start, center, flex-end,
														 stretch(works only if width is not available)*/

	},
	item: {
		backgroundColor: '#FFFFF0',
		borderWidth: 1,
		borderColor: 'green',
		width:100,
		height:100
	}
});