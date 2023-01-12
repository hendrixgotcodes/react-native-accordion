import { StyleSheet, Text, View, Platform, UIManager, Pressable, LayoutAnimation } from 'react-native'
import React, {useEffect, ReactNode, useState, Fragment} from 'react'
import {Ionicons} from "@expo/vector-icons"

export type AccordionData = {
    title: string,
    onPress?: (arg?:any)=>any,
    children?: ReactNode
}[]

export interface AccordionProps{
    title: string,
    onPress?: (arg?:any)=>any,
    children?: ReactNode
    gap?: number
}

export default function Accordion({title, children, onPress, gap}:AccordionProps) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        if(Platform.OS === "android"){
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    },[])

    const handleOnPress = (onPress?: (arg?:any)=>any)=>{
        if(onPress){
            onPress()
        }
        else{
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
            setIsOpen(!isOpen)
        }
    }
    
    
  return (
    <View style={styles.wrapper}>
        <View style={styles.accordion}>
            <Pressable 
                onPress={()=>handleOnPress(onPress)}
                style={styles.accordionHeader}
            >
                {
                    isOpen ? <Ionicons name='remove' style={{marginRight: 5}} /> : <Ionicons name='add' style={{marginRight: 5}} />
                }
                <Text>
                    {title}
                </Text>
            </Pressable>
            {
                isOpen && (
                    <View style={styles.childrenWrapper}>
                        {children}
                    </View>
                )
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        width: "100%",
    },
    gap:{
        marginVertical: 8
    },
    accordion:{
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    accordionHeader:{
        padding: 12,
        width: "100%",
        flexDirection: "row",
    },
    childrenWrapper:{
        padding: 12,
        // marginTop: 12
        // backgroundColor: "rgba(0,0,0,0.05)"
    }
})