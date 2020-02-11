import React, { Component } from 'react'
import { View, Button, Text, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

class ScoreComponent extends Component {
    constructor() {
        super()
    }

    render() {
        return <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Score: {this.props.score}</Text>
            </View>
        </SafeAreaView>
    }
}

const mapStateToProps = (state) => {
    return { score: state.score }
}

export default connect(mapStateToProps)(ScoreComponent)