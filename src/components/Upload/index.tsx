import React, {Component, PureComponent} from 'react';
import {Image, StyleSheet, View, Text, StyleProp, ViewProps, Platform} from "react-native";
import {scaleSizeH, scaleSizeW, setSpText, viewportWidth} from "@/utils/index";
import Touchable from "@/components/Touchable";
import MyDocumentPicker from "@/components/MyDocumentPicker";
import axios from "axios";
import CircularProgress from "@/components/CircularProgress";
import {Toast} from "@ant-design/react-native";
import RNFS from 'react-native-fs';
// @ts-ignore
import {ActionPopover,Menu} from 'teaset'
import DocumentPicker from "react-native-document-picker";

export interface Idata{
    link:string;
    domain:string;
    name:string;
    originalName:string;
    attachId:string;
}

interface IUploadState{
    fill:number;
    visible:boolean;
    fileList:Idata[];
    content:string;
}

interface IUpload{
    listType?:'file'|'picture-card'
    defaultFileList?:Idata[];
    onChange?:(fileList:Idata[])=>void;
    headers?:{[name:string]:string};
    uploadContainer?:StyleProp<ViewProps>;
    remove?:boolean;
    download?:boolean;
    maxCount?:number;
    pictureCardView?:StyleProp<ViewProps>;
}

/*如果为空则创建目录*/
export async function mkDir(defaultPath: string) {
    const isExists=await RNFS.exists(defaultPath)
    if(!isExists){
        const options = {
            NSURLIsExcludedFromBackupKey: true, // iOS only
        };

        return await RNFS.mkdir(defaultPath, options)
            .then((res) => {
                console.log('MKDIR success', res);
                return true;
            })
            .catch((err) => {
                console.log('err', err);
                return false;
            });
    }
    return true
}


export const headersOptions = {
    Accept: '*/*',
    Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
    'Content-Type': 'multipart/form-data',
    'Blade-Auth':
    'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJzdWJjb250cmFjdG9yIiwicG9zdF9pZCI6IjExMjM1OTg4MTc3Mzg2NzUyMDEiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwNCIsInJvbGVfaWQiOiIxMzY0MTkyMDEzMTA0Njg5MTU0IiwidXNlcl9uYW1lIjoiYm9zcyIsIm5pY2tfbmFtZSI6IuiAgeadvyIsImRldGFpbCI6eyJ0eXBlIjoid2ViIn0sInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJkZXB0X2lkIjoiMTM2NDA1MjQ2MzEzMjgxOTQ1OCIsImFjY291bnQiOiJib3NzIiwiY2xpZW50X2lkIjoic3dvcmQiLCJleHAiOjE2MTg2Njc2MzIsIm5iZiI6MTYxODU4MTIzMn0.uJLk2xQRkTaREPFMEHGGk1gNTzl2M2NfiN54APxT7yWQXdmtXf1z4YCorYuZLsUfceRUdAMuDQ2XRT6hfx6OJw'
};

export const uploadUrl =
    'http://li.yunlink.win:16995/api/blade-resource/oss/endpoint/put-file-attach';

/**
 * 上传
 */
class Upload extends PureComponent<IUpload, IUploadState> {

    static defaultProps = {
        defaultFileList:[],
        onChange:()=>{},
        headers:{},
        uploadContainer:{},
        remove:false,
        download:false,
        listType:'file',
        maxCount:10,
        pictureCardView:{}
    }

    state = {
        fill: 0,
        visible: false,
        fileList: this.props.defaultFileList?this.props.defaultFileList:[],
        content:''
    }

    handleUpload = async (picker) => {
        const {onChange,headers}=this.props
        const headersObject = {
            ...headersOptions,
            headers
        };
        const configs = {
            headers: headersObject,
            withCredentials: true,
            onUploadProgress: (progress) => {
                if (progress.lengthComputable) {
                    let {loaded, total} = progress
                    let rate = (Math.round((loaded / total) * 90) || 0)
                    this.setState({visible: true, fill: rate,content:'上传'})
                }
            }
        }

        const formData = new FormData();
        formData.append('file', picker);

        try {
            const {data:res} = await axios.post(uploadUrl, formData, configs)
          if(res.success) {
              this.setState({fill: 100,fileList: [...this.state.fileList, res.data]},()=>{
                  !!onChange&&onChange(this.state.fileList)
                  setTimeout(() => {
                      this.setState({fill : 0,visible: false})
                      Toast.success('上传成功',1)
                  },500)
              })
          }
        } catch (e) {

        }
    }

    handleError=(error)=>{
        console.log(error)
    }

    onPress=(flag)=>{
        switch (flag){
            case 'file': MyDocumentPicker.pickerSingleFile(this.handleUpload,this.handleError);break;
            case 'picture-card': MyDocumentPicker.pickerSingleFile(this.handleUpload,this.handleError,[DocumentPicker.types.images]);break;
        }
    }

    handleOperation = (ref,item,index) => {
        // this.handleDownload(item)
        ref.measureInWindow((x, y, width, height) => {
            let items = [
            ]
            const {remove,download}=this.props
            if(remove)items.push(                {title: '删除', onPress: ()=>this.handleDeleteFile(index)}
            )
            if(download)items.push( {title: '下载', onPress: ()=>this.handleDownload(item)})
            ActionPopover.show({x, y, width, height}, items);
        });
    };

    //删除
    handleDeleteFile=index=>{
        let {fileList}=this.state;
        fileList.splice(index,1)
        this.setState({fileList})
    }

    //下载
    handleDownload=async (item)=>{
        // `${Config.FILE_URL}${item.name}`
        const defaultPath =
            Platform.OS === 'ios'
                ? RNFS.LibraryDirectoryPath
                : RNFS.DownloadDirectoryPath;
        if (!mkDir(defaultPath)) {
            Toast.fail('文件下载失败',1)
            return false;
        }
        const downloadDest = `${defaultPath}/${item.originalName}`;
        const options = {
            fromUrl: item.link,
            toFile: downloadDest,
            background: true,
            progressDivider:10,
            begin: (res) => {
                this.setState({visible:true,content:'下载'})
            },
            progress: (res) => {
                let pro = res.bytesWritten*100 / res.contentLength;
                this.setState({fill:Math.floor(pro)})
                console.log(Math.floor(pro))
            },
            resumable:true,
        };
        const ret = RNFS.downloadFile(options);
        ret.promise.then((res) => {
            setTimeout(() => {
                this.setState({fill : 0,visible: false})
                Toast.success('下载成功,文件已下载至'+'file://' + downloadDest,4);
            },500)
            console.log('下载成功,文件已下载至'+'file://' + downloadDest)
        }).catch((err) => {
            console.log('err'+err.toString());
            Toast.fail('下载失败',1);
        });
    }

    get file(){
        const {fill,visible,fileList,content}=this.state
        const {uploadContainer,listType,maxCount}=this.props
        return (
            <View style={uploadContainer}>
                <CircularProgress visible={visible} fill={fill} content={content}/>
                {
                    fileList.length<maxCount&&   <Touchable style={styles.uploadView} onPress={()=>{this.onPress('file')}} >
                        <Image source={require('./upload.png')} style={{width :scaleSizeW(24),height:scaleSizeW(24)}}/>
                        <Text style={styles.text}>上传附件</Text>
                    </Touchable>
                }
                {
                    fileList.length>0&&fileList.map((item,index)=>{
                        return <Touchable key={item.attachId||index} style={styles.touchView}
                                          onPress={()=>this.handleOperation(this.['uploadRef'+(item.attachId || index)],item,index)}
                                          ref={(ref) => (this.['uploadRef'+(item.attachId || index)] = ref)}

                        >
                            <Text style={styles.fileText} numberOfLines={1}>{item.originalName}</Text>
                        </Touchable>
                    })
                }
            </View>
        );
    }

    get pictureCard(){
        const {fill,visible,fileList,content}=this.state
        const {uploadContainer,listType,maxCount,pictureCardView}=this.props
        console.log(fileList)
        return (
            <View style={[styles.pictureCardView,pictureCardView]}>
                <CircularProgress visible={visible} fill={fill} content={content}/>
                {
                    fileList.length>0&&fileList.map((item,index)=>{
                        return <Touchable key={item.attachId||index} style={styles.pickerView}
                                          onPress={()=>this.handleOperation(this.['uploadRef'+(item.attachId || index)],item,index)}
                                          ref={(ref) => (this.['uploadRef'+(item.attachId || index)] = ref)}

                        >
                           <Image source={{uri:item.link}} style={{ width:scaleSizeW(110),
                               height : scaleSizeW(110),
                               borderRadius:scaleSizeW(12)}}/>
                        </Touchable>
                    })
                }
                {fileList.length<maxCount&& <Touchable style={styles.pickerView} onPress={()=>{this.onPress('picture-card')}} >
                    <Image source={require('./upload.png')} style={{width :scaleSizeW(24),height:scaleSizeW(24)}}/>
                    <Text style={styles.text}>上传图片</Text>
                </Touchable>}
            </View>
        )
    }

    render() {
        const {fill,visible,fileList,content}=this.state
        const {uploadContainer,listType}=this.props
        switch (listType) {
            case 'file':return this.file
            case 'picture-card':return this.pictureCard
        }

    }
}

const styles=StyleSheet.create({
    uploadView:{
        flexDirection:'row',
        alignItems: 'center',
    },
    text:{
        fontWeight:'600',
        fontSize:setSpText(15),
        color:'#40a9ff',
    },
    fileText:{
        fontWeight:'500',
        fontSize:setSpText(13),
        color:'#40a9ff',
        width:scaleSizeW(350)
    },
    touchView:{
        paddingVertical:scaleSizeH(4)
    },
    pickerView:{
        width:scaleSizeW(110),
        height : scaleSizeW(110),
        borderRadius:scaleSizeW(12),
        borderColor:'#333',
        borderWidth:StyleSheet.hairlineWidth,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor :'#fff',
        margin:scaleSizeW(4)
    },
    pictureCardView:{
        flexDirection:'row',
        alignItems: 'center',
    flexWrap:'wrap',
    },
    pictureCardText:{
        fontWeight:'500',
        fontSize:setSpText(13),
        color:'#40a9ff',
        width:scaleSizeW(80)
    },
})

export default Upload;
