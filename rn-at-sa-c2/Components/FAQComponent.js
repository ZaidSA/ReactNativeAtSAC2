import React, { Component } from 'react'
import { View, Text, ScrollView, Button, SafeAreaView, TextInput } from 'react-native'


export default class FAQComponent extends Component {
    componentDidMount() {
        console.log('====================================');
        console.log('FAQComponent: componentDidMount');
        console.log(this.props.navigation.state['params']['token']);
        console.log('====================================');
        this.props.navigation.addListener('willFocus', () => {
            console.log('====================================');
            console.log('FAQComponent: willFocus');
            console.log('====================================');
        })

        this.props.navigation.addListener('didFocus', () => {
            console.log('====================================');
            console.log('FAQComponent: didFocus');
            console.log('====================================');
        })

        this.props.navigation.addListener('willBlur', () => {
            console.log('====================================');
            console.log('FAQComponent: willBlur');
            console.log('====================================');
        })

        this.props.navigation.addListener('didBlur', () => {
            console.log('====================================');
            console.log('FAQComponent: didBlur');
            console.log('====================================');
        })
    }
    
    
    componentWillUnmount() {
        console.log('====================================');
        console.log('FAQComponent: componentWillUnmount');
        console.log('====================================');
    }

    render() {
        return <View>
            <SafeAreaView>
            <ScrollView keyboardDismissMode='on-drag'>
            <Button title='Login' onPress={() => this.props.navigation.popToTop()}></Button>
            <Button title='Back' onPress={() => this.props.navigation.pop()}></Button>
            <Button title='FAQ' onPress={() => this.props.navigation.push('FAQ')}></Button>
                <TextInput placeholder='Email'></TextInput>
                <Text>
                    How does Google protect my privacy and keep my information secure?
        We know security and privacy are important to you – and they are important to us, too. We make it a priority to provide strong security and give you confidence that your information is safe and accessible when you need it.
        
        We’re constantly working to ensure strong security, protect your privacy, and make Google even more effective and efficient for you. We spend hundreds of millions of dollars every year on security, and employ world-renowned experts in data security to keep your information safe. We also built easy-to-use privacy and security tools like Google Dashboard, 2-step verification and Ads Settings. So when it comes to the information you share with Google, you’re in control.
        
        You can learn more about safety and security online, including how to protect yourself and your family online, at the Google Safety Center.
        
        Learn more about how we keep your personal information private and safe — and put you in control.
        
        How can I remove information about myself from Google's search results?
        Google search results are a reflection of the content publicly available on the web. Search engines can’t remove content directly from websites, so removing search results from Google wouldn’t remove the content from the web. If you want to remove something from the web, you should contact the webmaster of the site the content is posted on and ask him or her to make a change. Once the content has been removed and Google has noted the update, the information will no longer appear in Google’s search results. If you have an urgent removal request, you can also visit our help page for more information.
        
        Are my search queries sent to websites when I click on Google Search results?
        In some cases, yes. When you click on a search result in Google Search, your web browser also may send the Internet address, or URL, of the search results page to the destination webpage as the Referrer URL. The URL of the search results page may sometimes contain the search query you entered. If you are using SSL Search (Google’s encrypted search functionality), under most circumstances, your search terms will not be sent as part of the URL in the Referrer URL. There are some exceptions to this behavior, such as if you are using some less popular browsers. More information on SSL Search can be found here. Search queries or information contained in the Referrer URL may be available via Google Analytics or an application programming interface (API). In addition, advertisers may receive information relating to the exact keywords that triggered an ad click.
        
        How does Google protect my privacy and keep my information secure?
        We know security and privacy are important to you – and they are important to us, too. We make it a priority to provide strong security and give you confidence that your information is safe and accessible when you need it.
        
        We’re constantly working to ensure strong security, protect your privacy, and make Google even more effective and efficient for you. We spend hundreds of millions of dollars every year on security, and employ world-renowned experts in data security to keep your information safe. We also built easy-to-use privacy and security tools like Google Dashboard, 2-step verification and Ads Settings. So when it comes to the information you share with Google, you’re in control.
        
        You can learn more about safety and security online, including how to protect yourself and your family online, at the Google Safety Center.
        
        Learn more about how we keep your personal information private and safe — and put you in control.
        
        How can I remove information about myself from Google's search results?
        Google search results are a reflection of the content publicly available on the web. Search engines can’t remove content directly from websites, so removing search results from Google wouldn’t remove the content from the web. If you want to remove something from the web, you should contact the webmaster of the site the content is posted on and ask him or her to make a change. Once the content has been removed and Google has noted the update, the information will no longer appear in Google’s search results. If you have an urgent removal request, you can also visit our help page for more information.
        
        Are my search queries sent to websites when I click on Google Search results?
        In some cases, yes. When you click on a search result in Google Search, your web browser also may send the Internet address, or URL, of the search results page to the destination webpage as the Referrer URL. The URL of the search results page may sometimes contain the search query you entered. If you are using SSL Search (Google’s encrypted search functionality), under most circumstances, your search terms will not be sent as part of the URL in the Referrer URL. There are some exceptions to this behavior, such as if you are using some less popular browsers. More information on SSL Search can be found here. Search queries or information contained in the Referrer URL may be available via Google Analytics or an application programming interface (API). In addition, advertisers may receive information relating to the exact keywords that triggered an ad click.
            </Text>
            </ScrollView>
            </SafeAreaView>
        </View>
    }
}