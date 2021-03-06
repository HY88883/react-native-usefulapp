import React, {PureComponent} from 'react';
import {List, Radio} from "@ant-design/react-native";
import {StyleProp, TextStyle} from "react-native";
import Func from "../../utils/Func";

const RadioItem = Radio.RadioItem;

interface IMyRadioItem {
    list:Array<Record<string | number, any>>;
    style?:StyleProp<TextStyle>;
    onChange?: (checked: boolean,item:object,index:number) => void;
    keyProp?:string|number;
    titleProp?:string|number;
    defaultIndex?:number;
    isChecked?:(value:any)=>boolean;
}

interface IMyRadioItemState{
    radioIndex:number
}

/**
 * 单选按钮
 */
class MyRadio extends PureComponent<IMyRadioItem, IMyRadioItemState> {
    static defaultProps = {
        keyProp:'dictKey',
        titleProp:'dictValue',
        defaultIndex:-1
    }

    constructor(props){
        super(props)
        this.state={
            radioIndex:-1
        }
    }


  onChange =(checked: boolean, item: object, index: number)=>{
        const {onChange}=this.props
        if(checked){
            this.setState({radioIndex:index})
            !!onChange&&onChange(checked,item,index)
        }
  }

  render() {
      const {list,style,keyProp,titleProp,defaultIndex,isChecked}=this.props;
      const {radioIndex}=this.state
    return (
        <List>
            {
                Array.isArray(list)&&list.map((item,index)=>(
                    <RadioItem
                        key={typeof item==='string'?index:(item[keyProp||'dictKey']||index)}
                        defaultChecked={defaultIndex===index}
                        checked={isChecked?isChecked(item):radioIndex === index}
                        onChange={(event: { target: { checked: boolean; }; })=>{
                            this.onChange(event.target.checked,item,index)
                        }}
                        style={style}
                    >
                        {typeof item==='string'?item:item[titleProp||'dictValue']}
                    </RadioItem>
                ))
            }
        </List>
    );
  }
}

export default MyRadio;
