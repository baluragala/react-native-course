/**
 * Created by moksha on 22/01/17.
 */
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const RepoCard = ({repo}) => {
    const {forks_count, watchers, created_at, name} = repo;
    const {
        rootContainerStyle,
        cardContainerStyle,
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <View style={rootContainerStyle}>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{name}</Text>
                <Text>{created_at}</Text>
            </View>
        </View>
    )
};

const styles = {
    rootContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    cardContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 80,
        width: 80
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 500,
        flex: 1,
        width: null
    }
};

export default RepoCard;