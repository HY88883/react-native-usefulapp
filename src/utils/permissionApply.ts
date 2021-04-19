import {PermissionsAndroid, Platform} from "react-native";

class PermissionApply{
    static async  CameraPermission(){
        if (Platform.OS === 'android') {
           const res= await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            return res
        }
    }


    static async fileReadWrite(){
        if(Platform.OS === 'android'){
            const permissions = [
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ];
            const res=await PermissionsAndroid.requestMultiple(permissions)
            return res
        }
    }
}

export default PermissionApply
