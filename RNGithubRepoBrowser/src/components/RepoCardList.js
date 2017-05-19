/**
 * Created by moksha on 22/01/17.
 */
/**
 * Created by moksha on 22/01/17.
 */
import React, {Component} from 'react';
import {
    Text,
    ListView,
    StyleSheet
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import * as CONSTANTS from '../Constants';
import RepoCard from './RepoCard';

export default class UserCardList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {loading: true, datasource: ds.cloneWithRows([])};
    }

    componentWillMount() {
        fetch(`${CONSTANTS.API_ENDPOINT}/users/${this.props.username}/repos`)
            .then(response => response.json())
            .then(repos => this.setState({datasource: this.state.datasource.cloneWithRows(repos), loading: false}))
    }

    renderRepoCards() {
        return this.state.repos ? this.state.repos.map(repo => <RepoCard key={repo.id} user={repo}/>) : null;
    }

    render() {
        return (
            <ListView>
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(repo) => <RepoCard key={repo.id} user={repo}/>}
                />
            </ListView>
        )
    }

}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});