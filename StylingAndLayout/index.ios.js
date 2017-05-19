/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import Header from './components/Header';
import StyledButton from './components/StyledButton';
import HairlineWidthDemo from './components/HairlineWidthDemo';
import BoxModelDemo from './components/BoxModelDemo';
import FlexBoxDemo1 from './components/FlexBoxDemo1';
import FlexBoxDemo2 from './components/FlexBoxDemo2';
import StylingTextDemo from './components/StylingTextDemo';
import StylingImageDemo1 from './components/StylingImageDemo1';
import StylingImageDemo2 from './components/StylingImageDemo2';

export default class StylingAndLayout extends Component {

	render() {
		let demoType = {
			stylesDemo: 1,
			hairlineWidthDemo: 2,
			boxModelDemo: 3,
			flexBoxDemo1: 4, /**/
			flexBoxDemo2: 5, /**/
			stylingTextDemo: 6, /**/
			stylingImageDemo1: 7, /**/
			stylingImageDemo2: 8, /**/

		};

		let demo = demoType.stylingImageDemo2;
		/*
		 stylesDemo = 1;
		 hairlineWidthDemo = 2;
		 boxModelDemo = 3;
		 */
		switch (demo) {
			case demoType.stylesDemo:
				return this.renderStylesDemo();
			case demoType.hairlineWidthDemo:
				return <HairlineWidthDemo/>;
			case demoType.boxModelDemo:
				return <BoxModelDemo/>;
			case demoType.flexBoxDemo1:
				return <FlexBoxDemo1/>;
			case demoType.flexBoxDemo2:
				return <FlexBoxDemo2/>;
			case demoType.stylingTextDemo:
				return <StylingTextDemo/>;
			case demoType.stylingImageDemo1:
				return <StylingImageDemo1/>;
			case demoType.stylingImageDemo2:
				return <StylingImageDemo2/>;
		}

	}

	renderStylesDemo() {
		return (<View style={styles.container}>
			<Header/>
			<Text style={{fontSize:18, fontWeight:'bold'}}>
				Welcome to RN, STYLING!
			</Text>
			<StyledButton/>
		</View>);
	}
}

/* preferred way, as it strict on all style props and throws errors */
/* other styles just throws warning which are avaialble only in DEBUG mode */

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightseagreen',
	}
});

AppRegistry.registerComponent('StylingAndLayout', () => StylingAndLayout);
