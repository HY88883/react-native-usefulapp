import {scaleSizeH, scaleSizeW, setSpText, wp} from '@/utils/index';
import {Image, StyleProp, StyleSheet, Text, View, ViewProps} from 'react-native';
import {Grid} from '@ant-design/react-native';
import React from 'react';
import {DataItem} from "@ant-design/react-native/lib/grid/PropsType";

interface IMyGrid{
  data?: Array<DataItem | undefined>;
  onPress?: (dataItem: DataItem | undefined, itemIndex: number) => void;
  containerStyle?:StyleProp<ViewProps>;
}

/**
 * 宫格
 * @param props
 * @constructor
 */
const MyGrid = (props:IMyGrid) => {
  const {data, onPress, containerStyle,...others} = props;
  const renderItem = function (el, index) {
    let radiusStyle={
    }
    switch(index){
      case 0:radiusStyle={borderTopLeftRadius:scaleSizeW(12)};break;
      case 2:radiusStyle={borderTopRightRadius:scaleSizeW(12)};break;
      case 3:radiusStyle={borderBottomLeftRadius:scaleSizeW(12)};break;
      case 5:radiusStyle={borderBottomRightRadius:scaleSizeW(12)};break;

    }
    return (
      <View style={[styles.itemStyle, radiusStyle]}>
        {el.icon ? el.icon : null}
        <Text style={styles.itemText}>{el.text}</Text>
      </View>
    );
  };
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Grid
        data={data}
        columnNum={3}
        onPress={onPress}
        hasLine={false}
        renderItem={renderItem}
        {...others}
      />
    </View>
  );
};

MyGrid.defaultProps = {
  data:[],
  containerStyle:{}
}

const styles = StyleSheet.create({
  itemStyle: {
    height: scaleSizeH(98),
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'rgba(200,200,200,0.5)',
    borderWidth:0.5,
  },
  itemText: {textAlign: 'center', color: '#666', fontSize: setSpText(14)},
  containerStyle: {
    width:wp(90),
    alignSelf:'center'
  },
});

export default MyGrid;
