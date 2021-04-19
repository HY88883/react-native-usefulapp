import {storiesOf} from '@storybook/react-native';
import React from 'react';
import MyModalDropdown from '.';
import {ScrollView, Text, View} from "react-native";
import {styles} from "../MyDatePicker/MyDatePicker.stories";
import {scaleSizeW} from "@/utils/index";
import Data from "../../../Data";
import MyPicker from ".";
import MyPopover from ".";
import MyRadio from ".";
import MySearchInput from ".";

const Cmp=()=>(
   <>
       <Text style={styles.text}>搜索输入框：</Text>
       <MySearchInput
           /*onChangeText={text => {
             console.log(text);
           }}*/
           onSubmitEditing={e=>{
               console.log(e.nativeEvent.text)
           }}
       />

   </>
)


const MySearchInputFunc = () => <Cmp/>

storiesOf('搜索输入框', module)
  .add('MySearchInput', MySearchInputFunc);
