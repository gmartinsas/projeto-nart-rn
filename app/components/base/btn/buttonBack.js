import React from "react-native";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function BotaoVoltar() {
    return (
        <Pressable 
            style={Estilos.container}
            onPress={() => alert("Foi!")}
            android_disableSound={true} >
                <AntDesign name="arrowleft" size={24} color="white" />    
        </Pressable>
    );
}

const Estilos = StyleSheet.create({
    container: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center'
    }
});