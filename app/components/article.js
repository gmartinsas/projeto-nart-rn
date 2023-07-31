import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { icon } from "./navbar";

export default function Artigo() {
    return (
        <Pressable 
            style={Estilos.container}
            onPress={() => alert('Artigo')} >
            
            <Image
                style={Estilos.banner}
                source={require('../../src/imgs/banners/banner_1.jpg')}>
            </Image>
            <Pressable
                style={Estilos.icon}
                onPress={() => alert("Favorito")}>
                <Ionicons name="bookmark-outline" size={24} color="white" />
            </Pressable>
            
            
            
            <View style={Estilos.descricao}>
                <View style={Estilos.textBox}>
                    <Text style={Estilos.titulo}>Crochê para Iniciantes:</Text>
                    <Text style={{color: 'white'}}>Como Fazer + Passo a Passo + Dicas</Text>
                    <Text style={{color: 'white'}}>por Júlio Alves</Text>
                </View>
                <Pressable
                    onPress={() => alert('Autor do Artigo')}>
                    <Image
                        style={Estilos.iconP}
                        source={icon}>
                    </Image>
                </Pressable>
                
            </View>

            <View style={Estilos.containerTags}>
                <Pressable
                    style={Estilos.boxTag}
                    onPress={() => alert('Tag Crochê')}><Text style={Estilos.tag}>Crochê</Text></Pressable>
                <Pressable
                    style={Estilos.boxTag}
                    onPress={() => alert('Tag Casa')}><Text style={Estilos.tag}>Casa</Text></Pressable>
                <Pressable
                    style={Estilos.boxTag}
                    onPress={() => alert('Tag Sustentável')}><Text style={Estilos.tag}>Sustentável</Text></Pressable>
            </View>
        </Pressable>
    );
}

const Estilos = StyleSheet.create({
    container: {
        backgroundColor: '#FAB129',
        borderRadius: 16,
        marginTop: 10,
        maxHeight: 320,
        
        // Gerador de box shadow: https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    banner: {
        height: '40%',
        width: '100%'
    },
    icon: {
        position: 'absolute',
        right: 16,
        top: 16
    },
    textBox: {
        position:'relative',
        left: 16,
        top: 8
    },
    titulo: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    iconP: {
        height: 64,
        width: 64,
        borderRadius: 60,
        position: 'relative',
        bottom: 24
    },
    descricao: {
        flexDirection: 'row',
        gap: 32,
    },
    containerTags: {
        flexDirection: 'row',
        position: 'relative',
        left: 16,
        top: 16,
        gap: 8
    },
    boxTag: {
        backgroundColor: '#776231',
        paddingHorizontal: 8,
        borderRadius: 16,
        alignItems: 'center'
    },
    tag: {
        color: 'white',
        fontWeight: 'bold'
    }
});