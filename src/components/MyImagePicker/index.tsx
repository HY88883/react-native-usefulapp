import {
  Callback,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Toast} from '@ant-design/react-native';
import React, {PureComponent} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewProps,
} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText, wp} from '../../utils/index';
import Touchable from '../../components/Touchable';
import { ActionSheet,ActionPopover } from 'teaset';
import axios from 'axios';
import {headersOptions, Idata, uploadUrl} from '../../components/Upload';
import CircularProgress from '../../components/CircularProgress';


interface IImagePickerComponent {
  pickerContainerView?: StyleProp<ViewProps>;
  type?: 'photo' | 'shoot';
  shootContainerView?: StyleProp<ViewProps>;
  callback?: (value: Idata) => void;
  layout?: 'column' | 'row';
  maxCount?: number;
  headers?:{[key:string]:any};
  remove?:boolean;
}

interface IImagePickerState {
  visible: boolean;
  fill: number;
  content: string;
  ImageList: Idata[];
}

/**
 * 选择本地图片或拍摄上传
 */
class ImagePickerComponent extends PureComponent<
  IImagePickerComponent,
  IImagePickerState
> {
  static defaultProps = {
    type: 'photo',
    layout: 'column',
    maxCount: 5,
  };

  state = {
    visible: false,
    fill: 0,
    content: '',
    ImageList: [],
  };

  //照相机
  launchCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxHeight: 500,
        maxWidth: 500,
        quality: 1.0,
        includeBase64: false,
        saveToPhotos: true,
        cameraType: 'back',
      },
      async response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
          Toast.fail('操作失败', 1);
          return;
        } else {
          this.uploadImage(response);
        }
      },
    );
  };

  //相册
  launchImageLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 500,
        maxWidth: 500,
        quality: 1.0,
        includeBase64: false,
      },
      async response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
          Toast.fail('操作失败', 1);
          return;
        } else {
          this.uploadImage(response);
        }
      },
    );
  };

  //上传图片
  uploadImage = async picker => {
    const {callback, headers} = this.props;
    const headersObject = {
      ...headersOptions,
      headers,
    };
    const configs = {
      headers: headersObject,
      withCredentials: true,
      onUploadProgress: progress => {
        if (progress.lengthComputable) {
          let {loaded, total} = progress;
          let rate = Math.round((loaded / total) * 90) || 0;
          this.setState({visible: true, fill: rate, content: '上传'});
        }
      },
    };
    const formData = new FormData();
    const imgObj = {
      uri: picker.uri,
      name: picker.fileName,
      type: 'application/octet-stream',
    };
    formData.append('file', imgObj);
    try {
      const {data: res} = await axios.post(uploadUrl, formData, configs);
      if (res.success) {
        this.setState(
          {fill: 100, ImageList: [...this.state.ImageList, res.data]},
          () => {
            !!callback && callback(this.state.ImageList);
            setTimeout(() => {
              this.setState({fill: 0, visible: false});
              Toast.success('上传成功', 1);
            }, 500);
          },
        );
      }
    } catch (e) {}
  };

  onPress = () => {
    let items = [
      {title: '拍摄', onPress: this.launchCamera},
      {title: '从相册中选择', onPress: this.launchImageLibrary},
    ];
    let cancelItem = {title: '取消'};
    ActionSheet.show(items, cancelItem);
  };

  onShootPress = () => {
    this.launchCamera();
  };

  handleOperation = (ref,index) => {
    const {remove}=this.props
if(remove){
  ref.measureInWindow((x, y, width, height) => {
    let items = [
      {title: '删除', onPress: ()=>this.handleDeleteFile(index)}
    ]
    ActionPopover.show({x, y, width, height}, items);
  });
}
  };

  //删除
  handleDeleteFile=index=>{
    let {ImageList}=this.state;
    ImageList.splice(index,1)
    console.log('ImageList'+JSON.stringify(ImageList))
    this.setState({ImageList:[...ImageList]})
  }

  get photo() {
    const {fill, visible, ImageList, content} = this.state;
    const {pickerContainerView} = this.props;
    return (
      <Touchable style={[styles.pickerContainerView, pickerContainerView]} onPress={this.onPress}>
        <CircularProgress visible={visible} fill={fill} content={content} />
        {ImageList.length === 0 ? (
          <View>
            <Image source={require('./assets/add.png')} style={styles.imageStyle} />
            <Text style={styles.text}>上传</Text>
          </View>
        ) : (
          <Image
            source={{uri: ImageList[ImageList.length - 1].link}}
            style={styles.photoImageStyle}
          />
        )}
      </Touchable>
    );
  }

  get shoot() {
    const {fill, visible, ImageList, content} = this.state;
    const {shootContainerView, layout, maxCount,remove} = this.props;
    return (
      <View style={shootContainerView}>
        <CircularProgress visible={visible} fill={fill} content={content} />
        {ImageList.length < maxCount && (
          <Touchable onPress={this.onShootPress}>
            <Image source={require('./assets/shoot.png')} style={styles.shootImage} />
          </Touchable>
        )}
        {layout === 'column' ? (
          <View>
            {ImageList.length > 0 &&
              ImageList.map((item, index) => (
                <Touchable key={item.attachId}
                           onPress={()=>this.handleOperation(this.['uploadRef'+item.attachId],index)}
                           ref={(ref) => (this.['uploadRef'+item.attachId] = ref)}
                >
                  <Image
                    source={{uri: item.link}}
                    style={styles.shootColumnImageStyle}
                  />
                </Touchable>
              ))}
          </View>
        ) : (
          <View style={styles.shootContainerViewContainer}>
            {ImageList.length > 0 &&
              ImageList.map((item, index) => (
                <Touchable key={item.attachId}
                           onPress={()=>this.handleOperation(this.['uploadRef'+item.attachId],index)}
                           ref={(ref) => (this.['uploadRef'+item.attachId] = ref)}
                >
                  <Image
                    source={{uri: item.link}}
                    style={styles.shootImageStyle}
                  />
                </Touchable>
              ))}
          </View>
        )}
      </View>
    );
  }

  render() {
    const {type, pickerContainerView} = this.props;
    switch (type) {
      case 'photo':
        return this.photo;
      case 'shoot':
        return this.shoot;
    }
  }
}

const styles = StyleSheet.create({
  pickerContainerView: {
    width: scaleSizeW(150),
    height: scaleSizeW(150),
    borderRadius: scaleSizeW(12),
    borderColor: '#333',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    overflow: 'hidden'
  },
  text: {
    fontSize: setSpText(16),
    fontWeight: '600',
    color: '#333',
    marginTop: scaleSizeH(5),
  },
  imageStyle: {
    width: scaleSizeW(24),
    height: scaleSizeW(24),
  },
  shootImage: {
    width: scaleSizeW(24),
    height: scaleSizeW(24),
  },
  shootImageStyle: {
    width: scaleSizeW(110),
    height: scaleSizeW(110),
    borderRadius: scaleSizeW(12),
    margin: scaleSizeW(4),
  },
  shootContainerViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  shootColumnImageStyle: {
    width: wp(90),
    height: scaleSizeH(200),
    alignSelf: 'center',
    margin: scaleSizeW(4),
    borderRadius:scaleSizeW(12)
  },
  photoImageStyle: {
    width: scaleSizeW(150),
    height: scaleSizeW(150),
    borderRadius:scaleSizeW(12),
  },
});

export default ImagePickerComponent;


//imagePicker封装
export const MyImagePicker = {
  launchCamera: (callback: Callback) => {
    launchCamera(
        {
          mediaType: 'photo',
          maxHeight: 500,
          maxWidth: 500,
          quality: 1.0,
          includeBase64: false,
          saveToPhotos: true,
          cameraType: 'back',
        },
        async response => {
          if (response.didCancel) {
          } else if (response.errorCode) {
            Toast.fail('操作失败', 1);
            return;
          } else {
            callback(response);
          }
        },
    );
  },
  launchImageLibrary: (callback: Callback) => {
    launchImageLibrary(
        {
          mediaType: 'photo',
          maxHeight: 500,
          maxWidth: 500,
          quality: 1.0,
          includeBase64: false,
        },
        async response => {
          if (response.didCancel) {
          } else if (response.errorCode) {
            Toast.fail('操作失败', 1);
            return;
          } else {
            callback(response);
          }
        },
    );
  },
};
