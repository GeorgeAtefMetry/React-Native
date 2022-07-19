import React  from "react";
import { StyleSheet, Text, View } from "react-native";


function Lang (){

        const langs = [
            {
                name: 'Arabic',
                value:'Native',
                width:'80%'
            },
            {
                name: 'English',
                value:'Very Good',
                width:'70%'
            },
            {
                name: 'Spanish',
                value: 'Good',
                width:'50%'
            },
            ];

        return (
        
            <View>
                {langs.map((lang, index) => {
                    return(
                        <>
                        <View key={index} style={styles.left}> 
                            <Text style={styles.item}>
                                {lang.name}
                            </Text> 
                            <Text style={styles.item}>
                                {lang.value}
                            </Text> 
                        </View>
                        <View>
                            <Text            
                            style={{
                                marginTop:20,
                                width:lang.width,
                                color:'#fff',
                                height:15,
                                marginLeft:10,
                                backgroundColor:'yellow',
                                borderColor:'#00f',
                                borderWidth:3,
                                padding:3,
                                borderRadius:10
                                }}
                            ></Text>
                        </View>
                        </>
                    )
                } )}
            </View> 
        )

}
const styles = StyleSheet.create({
        text: {
            color:'#fff'
        },    
        left:{
            textAlign:'left',
            display:'flex',
            flexDirection:'row',
            left:0,
            marginTop:30,
            marginLeft:20,
            alignItems:'flex-start',
        },
        item:{
            color:'#fff',
            fontSize:20,
            backgroundColor:'#00f',
            marginRight:50, 
            textAlign:'center'
        }
});
export default Lang;