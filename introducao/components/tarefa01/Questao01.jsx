import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native'

const Questao01 = () => {
    const imagemOriginal = "https://i.pinimg.com/originals/0e/65/e7/0e65e7640340a16068734dd46468fb9f.png"
    const imagemNova = "https://i1.sndcdn.com/artworks-000214772235-9ldzsb-t500x500.jpg"
    const [contador, setContador] = useState(0)
    const [imagem, setImagem] = useState("https://i.pinimg.com/originals/0e/65/e7/0e65e7640340a16068734dd46468fb9f.png")

    const trocarImagem = () => {
        if (contador === 0) {
          setImagem(imagemOriginal);
          setContador(1);
        } else if (contador === 1) {
          setImagem(imagemNova);
          setContador(0);
        }
    };

    return(
        <View style={styles.container}>
            {/* Questao02 */}
            <Image 
                source={imagem}
                style={{width:200,height:200}}
            />
            <Text style={{fontSize:20,fontWeight:"bold"}}>
                Lucas Gadelha Fonseca
            </Text>
            <Text>
                Fortaleza
            </Text>
            <Text style={{color:"red"}}>
                Design Digital 5º semestre
            </Text>
            <View>
                <Button title="Trocar imagem" onPress={trocarImagem} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
      display: 'flex',
      flexDirection: "column",
      backgroundColor: '#c0c0c0',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      gap: 10
    },
  });

export default Questao01