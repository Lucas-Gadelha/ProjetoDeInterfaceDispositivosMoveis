import { View, Text, SectionList, StyleSheet } from "react-native"
import { useState, useEffect } from "react"
import myStyle from "./MyStyle"

const dados = [
    {
        title: "Terça", data: [
            { name: "Pinheiro ...", price: "R$274,79", time: "16:41", icon: "cart"},
            // { name: "Netflix", price: "R$39,90", time: "05:18", icon: "tools"}
        ]
    },
//     {
//         title: "25 Set", data: [
//           { name: "3742Drogasil", price: "R$151,37", time: "17:22", icon: "medical-bag"}
//         ]
//     },
//     {
//         title: "24 Set", data: [
//           { name: "Pag*Bodegas", price: "R$7,49", time: "10:23", icon: "cart"},
//           { name: "Pag*Bodegas", price: "R$6,90", time: "9:39", icon: "cart"}
//         ]
//     },
//     {
//       title: "21 Set", data: [
//         { name: "Pinheiro ...", price: "R$226,24", time: "10:41", icon: "cart"}
//       ]
//   }
]

const Questao02 = () => {


        return (
            <View style={myStyle.container}>
                <SectionList 
                    sections={dados}
                    keyExtractor={(item)=>"SDDCeredEDDeed" + item.id}
                    renderItem={
                        ({item,section})=>{
                            return (
                                <Text style={myStyle.modal}>{item.icon} <br />{item.name}<br />{item.price}<br />{section.title}  {item.time}</Text>
                            )
                        }
                    }
                    
                />
            </View>
        )
    }
    

export default Questao02