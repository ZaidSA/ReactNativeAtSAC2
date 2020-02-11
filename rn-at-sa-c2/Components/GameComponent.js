import React, { Component } from 'react'
import { View, Button, Text, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class GameComponent extends Component {
    constructor() {
        super()
    }

    render() {
        return <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Button title='+' onPress={this.props.onPlus}></Button>
                <Text style={{ fontSize: 30 }}>Score: {this.props.score}</Text>
                <Button title='-' onPress={this.props.onMinus}></Button>
            </View>
        </SafeAreaView>
    }

}


const onPlus = () => {
    return {
        type: 'PLUS'
    }
}

const onMinus = () => {
    return {
        type: 'MINUS'
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onPlus,
        onMinus
    }, dispatch)
}
const mapStateToProps = (state) => {
    return { score: state.score }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent)