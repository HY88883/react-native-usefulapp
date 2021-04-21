import DocumentPicker from 'react-native-document-picker';

/**
 * 本地文件选择器
 */

let MyDocumentPicker = {
    FileTypes:[
        DocumentPicker.types.doc,
        DocumentPicker.types.docx,
        DocumentPicker.types.ppt,
        DocumentPicker.types.pptx,
        DocumentPicker.types.xls,
        DocumentPicker.types.xlsx,
        DocumentPicker.types.pdf,
        DocumentPicker.types.plainText,
        DocumentPicker.types.images,
    ],
    // Pick a single file
    pickerSingleFile: function(callback:(value:any)=>void, errorCallback:(value:any)=>void,FileTypes?:any)  {
        try {
            DocumentPicker.pick({
                type: FileTypes?FileTypes:this.FileTypes,
            }).then(res => {
                console.log(
                    res.uri,
                    res.type, // mime type
                    res.name,
                    res.size
                );
                if (callback) {
                    callback(res);
                }
            }).catch(error => {
                console.log(error);
                if (errorCallback) {
                    errorCallback(error);
                }
            });
        } catch (err) {
            if (errorCallback) {
                errorCallback(err);
            }
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    },
    PickMultipleFiles: function(callback:(value:any)=>void, errorCallback:(value:any)=>void,FileTypes?:any) {
        // Pick multiple files
        try {
            DocumentPicker.pickMultiple({
                type: FileTypes?FileTypes:this.FileTypes,
            }).then(results => {
                for (const res of results) {
                    console.log(
                        res.uri,
                        res.type, // mime type
                        res.name,
                        res.size
                    );
                }
                if (callback) {
                    callback(results);
                }
            });
        } catch (err) {
            if (errorCallback) {
                errorCallback(err);
            }
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    },
};


export default MyDocumentPicker;
