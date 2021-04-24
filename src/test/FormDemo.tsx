import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, LayoutAnimation, Platform, TextInput,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewFormDemoScreen';
import {Avatar, Button} from "./src/components";
import {scaleSizeW} from "./src/utils";
import {
    Carrousel,
    CircularProgress,
    Input,
    ModalDialog,
    MyAlbumView,
    MyCheckbox,
    MyDatePicker,
    MyModalDropdown,
    MyPicker,
    MyRadio,
    MySearchInput,
    MySelect,
    MySlider,
    MyStarRating,
    MyStepIndicator, MyTable, MyTag, MyTreeSelect, ProgressBarDialog,
    Upload
} from "./src/components/index";
import {Provider, Toast} from "@ant-design/react-native";
import Data from "./Data";
import ImagePickerComponent from "./src/components/MyImagePicker/index";
import { UIManager } from 'react-native';
import TreeData from './treeData'
import { useFormik } from 'formik';
import Func from "./src/utils/Func";

declare const global: {HermesInternal: null | {}};

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const FormDemo = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            birthday:'',
            sex:'',
            two:'',
        },
        onSubmit:async values => {
            // await sleep(3000)
            // console.log('formik'+JSON.stringify(values))
            const isSuccess= Func.validateResult(values,'birthday','sex')
            console.log(isSuccess)
            // alert(JSON.stringify(values, null, 2));
        },

    });
    // console.log(JSON.stringify(formik))
    return (
        <Provider>
            <ScrollView style={styles.scrollView}>
                <Input form={formik} field={{name:'firstName'}}/>
                <Input form={formik} field={{name:'birthday'}}/>
                <Input form={formik} field={{name:'sex'}}/>
                <Input form={formik} field={{name:'two'}}/>
                <MyCheckbox
                    list={[
                        {one: 'item1', two: 1},
                        {one: 'item2', two: 2},
                        {one: 'item3', two: 3},
                        {one: 'item4', two: 4},
                    ]}
                    onChange={(checked, item, index)=>{
                        console.log(checked,item, index)
                        if(checked) formik.setFieldValue('checkbox',{checked,item,index})
                        else formik.setFieldValue("checkbox",null )
                    }}
                    keyProp={'two'}
                    titleProp={'one'}
                />

                <Button text={'提交'} onPress={formik.handleSubmit} disabled={formik.isSubmitting}/>
            </ScrollView>
        </Provider>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    box: {
        backgroundColor: 'red'
    },
});

export default FormDemo;
