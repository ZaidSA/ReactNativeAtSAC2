import React from 'react'
import { View, Button, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import * as Permission from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default class ImageComponent extends React.Component {
    constructor() {
        super()
        this.state = { image: null }
        Permission.askAsync(Permission.CAMERA)
        Permission.askAsync(Permission.CAMERA_ROLL)
    }

    render() {
        return <View style={{ top: 30 }}>
            <SafeAreaView>
                <Button title='Camera' onPress={this.onCamera}></Button>
                <Button title='Image Gallery' onPress={this.onGallery}></Button>
                {this.state.image && <Image style={{ width: 300, height: 300 }} source={{ uri: this.state.image }}></Image>}
            </SafeAreaView>
        </View>
    }

    onCamera = () => {
        ImagePicker.launchCameraAsync().then((result) => {
            this.setState({ image: result.uri })
            console.log(result);
        })
    }

    onGallery = () => {
        ImagePicker.launchImageLibraryAsync().then((result) => {
            this.setState({ image: result.uri })
            console.log(result);
        })
    }
}