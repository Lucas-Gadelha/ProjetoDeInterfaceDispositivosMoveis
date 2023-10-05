import { View, Text, SectionList, StyleSheet } from "react-native"
import myStyle from "./MyStyle"

const dados = [
    {
        title: "Terça", data: [
            { name: "Pinheiro ...", price: "R$274,79", time: "16:41", icon: "cart"},
            { name: "Netflix", price: "R$39,90", time: "05:18", icon: "tools"}
        ]
    },
    {
        title: "25 Set", data: [
          { name: "3742Drogasil", price: "R$151,37", time: "17:22", icon: "medical-bag"}
        ]
    },
    {
        title: "24 Set", data: [
          { name: "Pag*Bodegas", price: "R$7,49", time: "10:23", icon: "cart"},
          { name: "Pag*Bodegas", price: "R$6,90", time: "9:39", icon: "cart"}
        ]
    },
    {
      title: "21 Set", data: [
        { name: "Pinheiro ...", price: "R$226,24", time: "10:41", icon: "cart"}
      ]
  }
]

const MySectionList = () => {
    return (
        <View style={myStyle.container}>
            <SectionList 
                sections={dados}
                keyExtractor={(item)=>"SDDCeredEDDeed" + item.id}
                renderItem={
                    ({item})=>{
                        return (
                            <Text style={myStyle.itens}>{item.icon};{item.name};{item.price};{item.time}</Text>
                        )
                    }
                }
                renderSectionHeader={
                    ({section})=>{
                        return (
                                <Text style={myStyle.itens}>{section.title}</Text>
                        )
                    }
                }
            />
        </View>
    )
}


export default MySectionList
