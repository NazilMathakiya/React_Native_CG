import { FlatList, Text, View } from "react-native";
const arr = [
    {id:1, Name: "Nazil"},
    {id:2, Name: "Arman"}
];

export default function Practice(){
    return(
        <View style={
            {
                alignItems: "center",
                backgroundColor: "yellow"
            }
        }>
            <Text style = {
                {
                    justifyContent: "center",
                    flex: 1,
                    fontSize: 24
                }
            }>Hello React Native!!</Text>
            


            <FlatList  
                data={arr}
                keyExtractor={(ele) => ele.id.toString()}
                renderItem={({item}) => <Text>{item}</Text>}
            />
        </View>
        
    )
}