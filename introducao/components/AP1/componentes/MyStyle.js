import { StyleSheet } from "react-native"

const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    itens: {
        flex: 1,
        margin:10,
        fontWeight:"bold",
        fontSize:25,
        color:"white"
    },
    space: {
        fontWeight:"bold",
        fontSize:25,
        color:"white"
    },
    modal: {
        flex: 1,
        flexDirection: "row",
        margin: 15,
        fontWeight:"bold",
        fontSize:25,
        color:"white"
    }
})

export default myStyle