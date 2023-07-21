import React from "react-native";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function Navbar() {
    return (
        <SafeAreaView>
            <StatusBar />
                <View>
                    <Text>Customizar com os mocks!</Text>
                </View>
        </SafeAreaView>
    );
}