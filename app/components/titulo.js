import { StyleSheet, Text } from "react-native";

export default function Titulo({string}) {
    return (
        <Text style={Estilos.titulo}>{string}</Text>
    );
}

const Estilos = StyleSheet.create({
    titulo: {
        fontSize: 32,
        color: '#333333'
    }
})