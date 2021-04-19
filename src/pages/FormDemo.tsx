import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import {View} from "react-native";

const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
};

const Example = () => (
   <View></View>
);

export default ()=>{
   return <View><Text>xxx</Text></View>
}
