import React, {Component, PureComponent} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Platform,
  Animated,
} from 'react-native';
import RNFS from 'react-native-fs';
import ImageViewer from 'react-native-image-zoom-viewer';
import {scaleSizeH, viewportHeight} from '../../utils/index';
import {Toast} from '@ant-design/react-native';
import CameraRoll from '@react-native-community/cameraroll';

interface IMyAlbumView {
  curentImage: number;
  imaeDataUrl: string[];
  cancel: (index?: number) => void;
  albumVisible?: boolean;
}

interface IMyAlbumViewState {
  innerIndex: number;
  success: boolean;
}

/**
 * 图片展示
 */
class MyAlbumView extends PureComponent<IMyAlbumView, IMyAlbumViewState> {
  static defaultProps = {
    albumVisible: false,
  };
  private toastAnimated: Animated.Value;

  constructor(props:any) {
    super(props);
    this.state = {
      innerIndex: 0,
      success: false,
    };
    this.toastAnimated = new Animated.Value(0);
  }

  _Close = () => {
    this.props.cancel();
  };
  renderLoad = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating={true} size={'large'} color={'#3c85ff'} />
      </View>
    );
  };

  onSave = (imageData:string[], index:number) => {
    DownloadImage(imageData[index])
        .then((res:any) => {
          if (res.statusCode == 200) {
            this.setState({success: true}, () => {
              this.toastTransition();
            });
          } else {
            this.setState({success: false}, () => {
              this.toastTransition();
            });
          }
        })
        .catch(error => {
          this.setState({success: false}, () => {
            this.toastTransition();
          });
          console.log(error);
        });
  };

  toastTransition = () => {
    Animated.sequence([
      Animated.timing(this.toastAnimated, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(this.toastAnimated, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  render() {
    const {imaeDataUrl: imageData, curentImage, albumVisible} = this.props;
    const {innerIndex, success} = this.state;
    let ImageObjArray: Array<any> = [];
    for (let i = 0; i < imageData.length; i++) {
      let Obj: {[propName: string]: any} = {};
      Obj.url = imageData[i];
      ImageObjArray.push(Obj);
    }
    return (
      <Modal
        visible={albumVisible}
        animationType={'fade'}
        transparent={true}
        onRequestClose={this._Close}>
        {success ? (
          <Animated.Text style={[styles.text, {opacity: this.toastAnimated}]}>
            图片保存成功
          </Animated.Text>
        ) : (
          <Animated.Text style={[styles.text, {opacity: this.toastAnimated}]}>
            图片保存失败
          </Animated.Text>
        )}
        <ImageViewer
          imageUrls={ImageObjArray} // 照片路径
          enableImageZoom={true} // 是否开启手势缩放
          saveToLocalByLongPress={true} //是否开启长按保存
          index={curentImage} // 初始显示第几张
          // failImageSource={} // 加载失败图片
          loadingRender={this.renderLoad}
          enableSwipeDown={false}
          menuContext={{saveToLocal: '保存图片', cancel: '取消'}}
          onClick={() => {
            this._Close();
          }}
          onCancel={() => {
            this._Close();
          }}
          backgroundColor={'#666'}
          useNativeDriver
          onChange={(index) => {
            this.setState({innerIndex: index||0});
          }}
          onSave={() => this.onSave(imageData, innerIndex)}
        />
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    zIndex: 1000,
    fontSize: 15,
    fontWeight: '500',
    alignSelf: 'center',
    bottom: scaleSizeH(80),
    color: '#fff',
  },
});

export default MyAlbumView;

/**
 * 下载网页图片
 * @param uri  图片地址
 * @returns {*}
 */
export const DownloadImage = (uri: string) => {
  if (!uri) {
    return Promise.reject();
  }
  return new Promise((resolve, reject) => {
    let timestamp = new Date().getTime(); //获取当前时间错
    let random = String((Math.random() * 1000000) | 0); //六位随机数
    let dirs =
      Platform.OS === 'ios'
        ? RNFS.LibraryDirectoryPath
        : RNFS.ExternalDirectoryPath; //外部文件，共享目录的绝对路径（仅限android）
    const downloadDest = `${dirs}/${timestamp + random}.jpg`;
    const formUrl = uri;
    const options = {
      fromUrl: formUrl,
      toFile: downloadDest,
      background: true,
      begin: (res:any) => {
        // console.log('begin', res);
        // console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
      },
    };
    try {
      const ret = RNFS.downloadFile(options);
      ret.promise
        .then((res:any) => {
          // console.log('success', res);
          // console.log('file://' + downloadDest)
          var promise = CameraRoll.save(downloadDest);

          promise
            .then(function (result) {
              console.log('result' + result);
              // alert('保存成功！地址如下：\n' + result);
            })
            .catch(function (error) {
              console.log('error', error);
              // alert('保存失败！\n' + error);
            });
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(new Error(err));
        });
    } catch (e) {
      console.log('e' + e);
      reject(new Error(e));
    }
  });
};
