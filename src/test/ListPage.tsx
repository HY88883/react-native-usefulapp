import React, {Component} from "react";
import {ListPagination} from "@/components/index";
import {View,Text} from "react-native";
import {scaleSizeH} from "@/utils/index";

export default class ListPage extends Component {

state={
    data:[]
}

    renderItem=({item,index})=>{
    console.log(JSON.stringify(item,index))
        return (
             <View style={{
                height: scaleSizeH(80), backgroundColor: '#eee', alignItems:'center',justifyContent: 'center'
            }}><Text>{index}:{item.value}</Text></View>
        )
    }

    randomFun=()=>{
        return Math.random(100).toFixed(0)
    }

    componentDidMount(): void {
        let data={list:[{value:this.randomFun()},{value:this.randomFun()},{value:this.randomFun()},
                {value:this.randomFun()},{value:this.randomFun()},{value:this.randomFun()},{value:this.randomFun()},
                {value:this.randomFun()},{value:this.randomFun()},{value:this.randomFun()}],pagination : {
                total: 15,
                size: 10,
                current: 1,
                pages: 2,
            }}
       this.setState({data:{...data}})
    }

    refresh=(callback,pageParams)=>{
    console.log(pageParams)
            setTimeout(() => {
                callback(this.state.data);
            },3000)
    }

    render() {
        return <ListPagination renderItem={this.renderItem} refresh={this.refresh}/>
    }
}
