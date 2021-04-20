import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from "react-native";
import { styles } from "../MyDatePicker/MyDatePicker.stories";
import MySearchInput from ".";
const Cmp = () => (<>
       <Text style={styles.text}>搜索输入框：</Text>
       <MySearchInput 
/*onChangeText={text => {
  console.log(text);
}}*/
onSubmitEditing={e => {
        console.log(e.nativeEvent.text);
    }}/>

   </>);
const MySearchInputFunc = () => <Cmp />;
storiesOf('搜索输入框', module)
    .add('MySearchInput', MySearchInputFunc);
