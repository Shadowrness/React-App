import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map'
import MapView from 'react-native-maps';


const MapScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <View style={tw`h-1/2`}>
                    <Map />
                </View>

                <View style={tw`h-1/2`}>
                    
                </View>
            </View>
        </SafeAreaView>
        
    )
}

export default MapScreen

const styles = StyleSheet.create({})
