import {View, Text} from 'react-native'

const Questao03 = ({cor}) => {
    return(
        <View style={{gap:10}}>
            <Text>
                Lista de Disciplinas:
            </Text>
            <Text style={{color: cor}}>
                Multimídia
            </Text>
            <Text style={{color: cor}}>
                Linguagem de marcação de script
            </Text>
            <Text style={{color: cor}}>
                Modelagem tridimensional
            </Text>
            <Text style={{color: cor}}>
                Projeto de interfaces para dispositivos móveis
            </Text>
        </View>
    )
}



export default Questao03

