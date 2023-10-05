import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"

import myStyle from "./MyStyle"

import Questao02 from "./Questao02"
import MySectionList from "./Dados"

const NativeStack = createNativeStackNavigator()

const Questao01 = () => {
    return (
        
        <NavigationContainer>
            <NativeStack.Navigator>
                {/*GRUPO DAS TELAS PRINCIPAIS*/}
                <NativeStack.Group>
                    <NativeStack.Screen name="Questao1" component={MySectionList} />
                </NativeStack.Group>
                {/*GRUPO DAS TELAS MODAIS*/}
                <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                    <NativeStack.Screen name="Questao2" component={Questao02} />
                </NativeStack.Group>
            </NativeStack.Navigator>

        </NavigationContainer>
    )
}

export default Questao01