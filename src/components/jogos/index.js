Import React from "react";
import {View, TouchableOpacity, Stylesheet, Text, Image} from "react-native";

//Criando a função e recebendo por props o titulo valor images do jogo

export default function Jogos({ titulo, valor, imagem }) {
    return (
         <TouchableOpacity style={estilo.containerJogos}>

Image style-(estilo.images) source (require(../../imagens/s(imagen)"))

<Text style (estilo.titulo)>(titulo)</Text> <Text style (estilo.valor)>(valor)</Text>

</TouchableOpacity>

    );
}

const estilo StyleSheet.create({

container Jogos: (

backgroundColor: "#DCDCDC",

borderRadius: 10,

marginTop: ,

padding: 10, margin: 2,

alignitems: "center". JustifyContent: "space-between

width: 100,

height: 150, marginLeft: ,

}, titulo: (

color: black",

fontSize: 12, fontsleight: bold",

valori (

color: "green",

fontSize: 12, marginLeft: 29,

marginTop: 2, fonteight: "bold",

Images: (

width: 100%",

height: 75.

(