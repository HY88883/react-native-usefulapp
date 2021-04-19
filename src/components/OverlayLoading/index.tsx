import {View, Text, ActivityIndicator} from "react-native";
import {Overlay, Theme} from 'teaset';
import React from "react";
import {scaleSizeH, scaleSizeW} from "@/utils/index";

//加载loading界面
let overlayKey=null
Overlay.removeLoading=()=>{
    if(!overlayKey)return;
    Overlay.hide(overlayKey)
    overlayKey=null
}

Overlay.displayLoading=(content)=>{
    if(overlayKey){
        return
    }
     const overlayView = (
        <Overlay.View
            style={{alignItems: 'center', justifyContent: 'center'}}
            modal
            animated
            overlayOpacity={0.5}
        >
            <View style={{
               padding:scaleSizeW(10),
                backgroundColor: "rgba(0,0,0,0.6)",
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius:scaleSizeW(7),
            }}>
                <ActivityIndicator size="large" color="#FFF" />
                <Text style={{ color:"#FFF",marginTop:scaleSizeH(10) }}>{content}</Text>
            </View>
        </Overlay.View>
    );
    overlayKey=Overlay.show(overlayView);
}

export default Overlay
