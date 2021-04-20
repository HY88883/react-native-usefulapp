import { PureComponent } from 'react';
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
declare class MyAlbumView extends PureComponent<IMyAlbumView, IMyAlbumViewState> {
    static defaultProps: {
        albumVisible: boolean;
    };
    private toastAnimated;
    constructor(props: any);
    _Close: () => void;
    renderLoad: () => any;
    onSave: (imageData: any, index: any) => void;
    toastTransition: () => void;
    render(): any;
}
export default MyAlbumView;
/**
 * 下载网页图片
 * @param uri  图片地址
 * @returns {*}
 */
export declare const DownloadImage: (uri: string) => Promise<unknown> | null;
