interface ICircularProgress {
    fill: number;
    visible?: boolean;
    content?: string;
}
/**
 * 环形进度条
 * @param props
 * @constructor
 */
declare const CircularProgress: (props: ICircularProgress) => any;
export default CircularProgress;
