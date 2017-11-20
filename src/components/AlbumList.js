import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class AlbumList extends Component {
	componentWillMount() {
		console.log('before loading others');
	}
	render() {
		return (
			<View>
				<Text>AlbumList from server</Text>
			</View>
		);
	}
}
