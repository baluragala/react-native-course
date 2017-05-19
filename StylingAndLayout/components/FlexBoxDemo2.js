import React from 'react';
import {View,StyleSheet} from 'react-native';


export default FlexBoxDemo2 = () => (
	<View style={styles.container}>
		<View style={[styles.item, {backgroundColor:'purple'}]}/>
		<View style={[styles.item,{flex:-20},{backgroundColor:'darkcyan'}]}/>
		<View style={[styles.item,{flex:-3}]}/>
	</View>
);

/*

 flex is simply a shorthand for setting flexGrow, flexShrink, and flexBasis.

 If flex is set to a positive number, it sets flexGrow to that same value and
 sets flexShrink and flexBasis to 0.


 If flex is a negative value, it sets flexShrink to the inverse of that value
 and flexGrow to 0, and leaves flexBasis unset.

 flex: 2 -> flex: 2 0 0
 flex: -2 -> flex: 0 2 0


 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems:'stretch'
	},
	item: {
		backgroundColor: '#FFFFF0',
		borderWidth: 1,
		borderColor: 'green',
		height:50,
		width:50
	}
});