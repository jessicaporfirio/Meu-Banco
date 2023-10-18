import React from "react";
import { View,StyleSheet,Text,StatusBar,TouchableOpacity} from "react-native";

import {Feather} from '@expo/vector-icons' /*importando o icone do usuário*/
import { MotiView, MotiText} from 'moti'
/*Adaptando a tela*/
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    return(
        <View style={styles.container}>
                <MotiView
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0,
                }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    transition={{
                        type: 'timing',
                        duration: 800,
                        delay: 800,
                    }}>
                <MotiText 
                style={styles.username}
                from={{
                    translateX: - 300
                }}
                animate={{
                    translateX: 0
                }}
                transition={{
                    type: 'timing',
                    duration: 800,
                    delay: 800,
                }}
                >
                    {name}
                   </MotiText> 
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color={'#fff'}/>
                </TouchableOpacity> 

            </MotiView>
        </View>
    )
} /*Criando estilos ao App*/
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff', /*colocando a cor na navbar*/
        paddingTop: StatusBarHeight, /*espaçamento do statusbar*/
        flexDirection: 'row', 
        paddingStart: 16, /*espaçamento internto*/
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,

    }
})