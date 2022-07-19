import React, { useState } from "react";
import {Text, TextInput,View} from "react-native"
import {useFormik} from "formik";
import { Button } from "@rneui/themed";

function ContactForm(){
    const [msg, setMsg] = useState("")
    const {handleChange, handleSubmit, values} = useFormik({
        initialValues: {name: '', email: '', message: ""},
        onSubmit: values => 
        setMsg('Your Opinion is' + values.message)
    })

    return(
        <View style= {{
            flex: 1,
            backgroundColor: "#ddd000",
            alignItems: "center",
            justifyContent: "center",

        }}> 
            <Text style={{color: "#000", fontSize: 30, marginBottom: 20,backgroundColor:'yellow',padding:4}}> Contact Us </Text> 

            <TextInput style={{color: "#000", fontSize: 25, marginBottom: 15 , borderBottomColor: "yellow", borderBottomWidth: 2}}
                placeholder="enter your name" 
                onChangeText={handleChange('name')}
             />
            <TextInput style={{color: "#000", fontSize: 25, marginBottom: 15 , borderBottomColor: "yellow", borderBottomWidth: 2}}
             placeholder="enter your email" 
                onChangeText={handleChange('email')}
            />
            <TextInput style={{color: "#000", fontSize: 25, marginBottom: 15 , borderBottomColor: "yellow", borderBottomWidth: 2,borderColor:'yellow',borderTopColor:'yellow'}}
            placeholder="enter your message"
                onChangeText={handleChange('message')}
                maxLength={200}
            />
            <Text style={{color: "#000", fontSize: 30, marginBottom: 20,backgroundColor:'yellow',padding:4}}> {msg}</Text> 
            <Button 
                buttonStyle={{
                    backgroundColor: 'yellow',
                    borderRadius: 3,
                    marginTop:20, borderRadius: 10,
                }}  
                titleStyle={{
                    color: '#000',
                    marginHorizontal: 20,
                }} title="Submit" onPress={handleSubmit} />
                
        </View>

    )

}

export default ContactForm;