import { Dimensions, NativeModules } from 'react-native';

let ReactNative = require('react-native');

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;

screenH =
  Dimensions.get('window').height / Dimensions.get('window').width > 1.8
    ? screenH + NativeModules.StatusBarManager.HEIGHT
    : screenH;

let fontScale = ReactNative.PixelRatio.getFontScale();
let pixelRatio = ReactNative.PixelRatio.get();
// 高保真的宽度和高度
const designWidth = 375.0;
const designHeight = 667.0;

// 根据dp获取屏幕的px
let screenPxW = ReactNative.PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = ReactNative.PixelRatio.getPixelSizeForLayoutSize(screenH);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
function setSpText(size: number) {
  var scaleWidth = screenW / designWidth;
  var scaleHeight = screenH / designHeight;
  var scale = Math.min(scaleWidth, scaleHeight);
  size = Math.round((size * scale) / fontScale + 0.5);
  return size;
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
function scaleSizeH(size: number) {
  var scaleHeight = (size * screenPxH) / designHeight;
  size = Math.round(scaleHeight / pixelRatio + 0.5);
  return size;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
function scaleSizeW(size: number) {
  var scaleWidth = (size * screenPxW) / designWidth;
  size = Math.round(scaleWidth / pixelRatio + 0.5);
  return size;
}

export {
  viewportWidth,
  viewportHeight,
  wp,
  hp,
  scaleSizeH,
  scaleSizeW,
  setSpText,
};
