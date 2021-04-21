import React, {Component, PureComponent} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Easing, Modal, StyleSheet, Text, View} from "react-native";
import {setSpText} from "../../utils/index";

interface ICircularProgress{
    fill:number;
    visible?:boolean;
    content?:string;
}

/**
 * 环形进度条
 * @param props
 * @constructor
 */
const CircularProgress=(props:ICircularProgress)=>{
    const {fill,visible,content}=props
    return (
        <Modal
            hardwareAccelerated
            animationType={'slide'}
            transparent={false}
            onRequestClose={()=>{}}
            visible={visible}>
            <View style={{backgroundColor:'rgba(0,0,0,0.5)',flex:1,alignItems:'center',justifyContent:'center'}}>
                <AnimatedCircularProgress
                    size={140}
                    width={15}
                    fill={fill}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                    rotation={0}
                    lineCap={'square'}
                    easing={Easing.in(Easing.cubic)}
                >
                    {
                        () => (
                            <View style={{alignItems:'center'}}>
                                <Text style={styles.text}>{content}进度</Text>
                                <Text style={styles.progressText}>
                                    {fill}%
                                </Text>
                            </View>
                        )
                    }
                </AnimatedCircularProgress>
            </View>
        </Modal>
    );
}

const styles=StyleSheet.create({
    text:{
        fontWeight:'600',
        fontSize:setSpText(18),
        color:'rgba(255,255,255,0.9)'
    },
    progressText:{
        fontWeight:'500',
        fontSize:setSpText(15),
        color:'rgba(255,140,0,0.9)'
}
})

export default CircularProgress;
