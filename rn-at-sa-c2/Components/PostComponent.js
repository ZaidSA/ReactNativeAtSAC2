import React, { Component } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableWithoutFeedback, Dimensions, RefreshControl } from 'react-native'

const DATA = [
    {
        title: 'Session 5',
        id: '1'
    },
    {
        title: 'Session 5 New',
        id: '2'
    },
    {
        title: 'Session 3 New',
        id: '3'
    },
    {
        title: 'Session 5 New',
        id: '2'
    },
    {
        title: 'Session 3 New',
        id: '3'
    },
]
export default class PostComponent extends Component {
    onPostClick = (item) => {
        console.log('====================================');
        console.log(item);
        console.log('====================================');
    }

    render() {
        return <View style={{ backgroundColor: 'pink', flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: 'yellow', flex: 1 }}>
                <FlatList
                refreshControl={
                    <RefreshControl></RefreshControl>
                }
                    data={DATA}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return <View style={{margin: 10, backgroundColor: 'cyan', height: 150, width: ((Dimensions.get('window').width-60)/3) }}>
                            <TouchableWithoutFeedback onPress={() => this.onPostClick(item)}>
                                <Text>{item.title}</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    }}
                    style={{ backgroundColor: 'pink', flex: 1 }}
                    keyExtractor={(item) => item.id}
                    // extraData={this.state}
                ></FlatList>
            </SafeAreaView>
        </View>
    }
}