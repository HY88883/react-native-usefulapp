import {Platform,NativeModules} from "react-native";

/**
 * 通用工具类
 */

export default class Func {
  static ifubcontractor = false;

  /*日期格式化*/
  static dateFormat(fmt: string, date: any) {
    let ret;

    const opt = {
      'Y+': date.getFullYear().toString(), // 年
      'M+': (date.getMonth() + 1).toString(), // 月
      'D+': date.getDate().toString(), // 日
      'H+': date.getHours().toString(), // 时
      'm+': date.getMinutes().toString(), // 分
      'S+': date.getSeconds().toString(), // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'),
        );
      }
    }
    return fmt;
  }

  /**
   * 不为空
   * @param val
   * @returns {boolean}
   */
  static notEmpty(val: string | object[] | null) {
    return !this.isEmpty(val);
  }

  /**
   * 为空
   * @param val
   * @returns {boolean}
   */
  static isEmpty(val: string | object[] | null) {
    if (
      val === null ||
      typeof val === 'undefined' ||
      (typeof val === 'string' && val === '' && val !== 'undefined')
    ) {
      return true;
    }
    return false;
  }

  static isEmptyObject(val: object) {
    if (val === null || typeof val === 'undefined') {
      return true;
    }
    if (typeof val === 'object') {
      const arr = Object.keys(val);
      if (arr.length === 0) {
        return true;
      }
      return false;
    }
    return true;
  }

  /**
   * 强转int型
   * @param val
   * @param defaultValue
   * @returns {number}
   */
  static toInt(val: string, defaultValue: number) {
    if (this.isEmpty(val)) {
      return defaultValue === undefined ? -1 : defaultValue;
    }
    const num = parseInt(val, 0);
    return Number.isNaN(num)
      ? defaultValue === undefined
        ? -1
        : defaultValue
      : num;
  }

  /**
   * Json强转为Form类型
   * @param obj
   * @returns {FormData}
   */
  static toFormData(obj: any) {
    const data = new FormData();
    Object.keys(obj).forEach((key) => {
      data.append(key, Array.isArray(obj[key]) ? obj[key].join(',') : obj[key]);
    });
    return data;
  }

  /**
   * 字符串转为date类
   * @param date
   * @param format
   * @returns {any}
   */
  static moment(date: Date | string, format = 'YYYY-MM-DD HH:mm:ss') {
    return date ? moment(date, format) : null;
  }

  /**
   * 字符串转为date类
   * @param date
   * @param format
   * @returns {any}
   */
  static momentTime(date: Date | string, format = 'HH:mm') {
    return date ? moment(date, format) : null;
  }

  /**
   * date类转为字符串格式
   * @param date
   * @param format
   * @returns {null}
   */
  static format(date, format? = 'YYYY-MM-DD HH:mm:ss') {
    return date ? date.format(format) : null;
  }

  /**
   * 根据逗号联合
   * @param arr
   * @returns {string}
   */
  static join(arr: Array<any>) {
    return arr ? arr.join(',') : '';
  }

  /**
   * 根据逗号分隔
   * @param str
   * @returns {string}
   */
  static split(str: Array<any>) {
    return str ? String(str).split(',') : '';
  }

  static val(object: object, path: string, value: any) {
    let copyObject = object;
    let s = path.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; i += 1) {
      const k = a[i];
      if (k in copyObject) {
        if (!this.isEmpty(value) && i === n - 1) {
          copyObject[k] = value;
        }
        copyObject = copyObject[k];
      } else if (!this.isEmpty(value)) {
        if (i === n - 1) {
          copyObject[k] = value;
        } else {
          copyObject[k] = {};
          copyObject = copyObject[k];
        }
      } else {
        return null;
      }
    }
    return copyObject;
  }

  static getDateDiff(dateTime: Date | string) {
    let dateTimeStamp = new Date();
    if (dateTime instanceof Date) {
      dateTimeStamp = dateTime;
    } else {
      dateTimeStamp = new Date(dateTime);
    }

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const now = new Date().getTime();
    const diffValue = now - dateTimeStamp.getTime();
    if (diffValue < 0) {
      return;
    }
    const monthC = diffValue / month;
    const weekC = diffValue / (7 * day);
    const dayC = diffValue / day;
    const hourC = diffValue / hour;
    const minC = diffValue / minute;
    let result = '';
    if (monthC >= 1) {
      result = `${parseInt(monthC.toString(), 10)}月前`;
    } else if (weekC >= 1) {
      result = `${parseInt(weekC.toString(), 10)}周前`;
    } else if (dayC >= 1) {
      result = `${parseInt(dayC.toString(), 10)}天前`;
    } else if (hourC >= 1) {
      result = `${parseInt(hourC.toString(), 10)}小时前`;
    } else if (minC >= 1) {
      result = `${parseInt(minC.toString(), 10)}分钟前`;
    } else {
      result = '刚刚';
    }
    return result;
  }

  static getDateDiff2(dateTime: any) {
    let dateTimeStamp = new Date();
    if (dateTime instanceof Date) {
      dateTimeStamp = dateTime;
    } else {
      dateTimeStamp = new Date(dateTime);
    }

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;
    const now = new Date().getTime();
    const diffValue = dateTimeStamp.getTime() - now;
    if (diffValue < 0) {
      return;
    }
    const yearC = diffValue / year;
    const dayC = diffValue / day;
    const hourC = diffValue / hour;
    const minC = diffValue / minute;
    let result = '';
    if (yearC >= 1) {
      result = `${parseInt(yearC.toString(), 10)}年`;
    } else if (dayC >= 1) {
      result = `${parseInt(dayC.toString(), 10)}天`;
    }
    return result;
  }

  static dataTimeToData(dateTime: Date | string) {
    if (dateTime instanceof Date) {
      return Func.format(dateTime)?.toString().split(' ')[0];
    }
    return dateTime.split(' ')[0];
  }

  /**
   * 保留两位小数
   * @param data
   * @returns {*|string}
   */
  static percent(data: number) {
    if (data != null) {
      return data.toFixed(2);
    }
    return 0;
  }

  /**
   * 禁用今天之前的日期
   * @param current
   * @returns {*|boolean}
   */
  static disabledDate(current: any) {
    return current && current < moment().subtract(1, 'day');
  }

  /**
   * 禁用今天之后的日期
   * @param current
   * @returns {*|boolean}
   */
  static disabledAfterDate(current: any) {
    return current > moment().subtract(0, 'day');
  }

  /**
   * 邮箱
   * @param s
   * @returns {boolean}
   */
  static isEmail = (s: string) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
      s,
    );
  };

  // 获取当前月的开始结束时间
  static getCurrMonthDays() {
    const date = [];
    const start = moment().startOf('month');
    const end = moment().endOf('month');
    date.push(start);
    date.push(end);
    return date;
  }

  // 获取当前半年的开始结束时间
  static getCurrHalfYearDays() {
    const date = [];
    const month = moment().month();
    let start;
    let end;
    // 上半年
    if (month < 6) {
      start = moment().startOf('year');
      end = moment([moment().year(), 5, 30]); // 月份从0开始
      // 下半年
    } else {
      start = moment([moment().year(), 6, 1]); // 月份从0开始
      end = moment().endOf('year');
    }
    date.push(start);
    date.push(end);
    return date;
  }

  // 获取当前年的开始结束时间
  static getCurrYearDays() {
    const date = [];
    const start = moment().startOf('year');
    const end = moment().endOf('year');
    date.push(start);
    date.push(end);
    return date;
  }

  // num传入的数字，n需要的字符长度
  static PrefixInteger(num: any, n: any) {
    return (Array(n).join('0') + num).slice(-n);
  }

  static isObjectValueEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      var propA = a[propName];
      var propB = b[propName];
      // 2020-11-18更新，这里忽略了值为undefined的情况
      // 故先判断两边都有相同键名
      if (!b.hasOwnProperty(propName)) {
        return false;
      }
      if (typeof propA === 'object') {
        if (this.isObjectValueEqual(propA, propB)) {
          // return true     这里不能return ,后面的对象还没判断
        } else {
          return false;
        }
      } else if (propA !== propB) {
        return false;
      } else {
      }
    }
    return true;
  }

  static deepCompare(x: any, y: any) {
    let i;
    let l;
    let leftChain: any[];
    let rightChain: any[];

    function compare2Objects(x: any, y: any) {
      let p;

      // remember that NaN === NaN returns false
      // and isNaN(undefined) returns true
      if (
        isNaN(x) &&
        isNaN(y) &&
        typeof x === 'number' &&
        typeof y === 'number'
      ) {
        return true;
      }

      // Compare primitives and functions.
      // Check if both arguments link to the same object.
      // Especially useful on the step where we compare prototypes
      if (x === y) {
        return true;
      }

      // Works in case when functions are created in constructor.
      // Comparing dates is a common scenario. Another built-ins?
      // We can even handle functions passed across iframes
      if (
        (typeof x === 'function' && typeof y === 'function') ||
        (x instanceof Date && y instanceof Date) ||
        (x instanceof RegExp && y instanceof RegExp) ||
        (x instanceof String && y instanceof String) ||
        (x instanceof Number && y instanceof Number)
      ) {
        return x.toString() === y.toString();
      }

      // At last checking prototypes as good as we can
      if (!(x instanceof Object && y instanceof Object)) {
        return false;
      }

      if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
        return false;
      }

      if (x.constructor !== y.constructor) {
        return false;
      }

      if (x.prototype !== y.prototype) {
        return false;
      }

      // Check for infinitive linking loops
      if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
        return false;
      }

      // Quick checking of one object being a subset of another.
      // todo: cache the structure of arguments[0] for performance
      for (p in y) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        }
        if (typeof y[p] !== typeof x[p]) {
          return false;
        }
      }

      for (p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        }
        if (typeof y[p] !== typeof x[p]) {
          return false;
        }

        switch (typeof x[p]) {
          case 'object':
          case 'function':
            leftChain.push(x);
            rightChain.push(y);

            if (!compare2Objects(x[p], y[p])) {
              return false;
            }

            leftChain.pop();
            rightChain.pop();
            break;

          default:
            if (x[p] !== y[p]) {
              return false;
            }
            break;
        }
      }

      return true;
    }

    if (arguments.length < 1) {
      return true; // Die silently? Don't know how to handle such case, please help...
      // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = arguments.length; i < l; i++) {
      leftChain = []; // Todo: this can be cached
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
        return false;
      }
    }

    return true;
  }

  static removeArrayItem(arr: Array<any>, item: any, key?: string): Array<any> {
    for (let i = 0; i < arr.length; i++) {
      if (key !== undefined) {
        if (arr[i][key] === item[key]) {
          arr.splice(i, 1);
          return arr;
        }
      } else {
        if (arr[i] === item) {
          arr.splice(i, 1);
          return arr;
        }
      }
    }
    return arr;
  }

  static containItemOfArray(arr: Array<any>, item: any, key?: string): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (key !== undefined) {
        if (arr[i][key] === item[key]) {
          return true;
        }
      } else {
        if (arr[i] === item) {
          return true;
        }
      }
    }
    return false;
  }

  static numberToChinaChar(number: any) {
    const charArry = [
      '甲',
      '乙',
      '丙',
      '丁',
      '戊',
      '己',
      '庚',
      '辛',
      '壬',
      '癸',
    ];
    if (number > charArry.length || number < 0) {
      return number;
    }
    return charArry[number];
  }

  /**
   * 身份证校验
   * @param value
   * @returns {boolean|boolean}
   */
  static checkIDCard(value: string | any[]) {
    // 加权因子
    const weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    // 校验码
    const check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    const code = value + '';
    const last = value[17];

    const seventeen = code.substring(0, 17);

    // ISO 7064:1983.MOD 11-2
    // 判断最后一位校验码是否正确
    const arr = seventeen.split('');
    const len = arr.length;
    let num = 0;
    for (let i = 0; i < len; i += 1) {
      num += arr[i] * weight_factor[i];
    }

    // 获取余数
    const resisue = num % 11;
    const last_no = check_code[resisue];

    // 格式的正则
    // 正则思路
    /*
    第一位不可能是0
    第二位到第六位可以是0-9
    第七位到第十位是年份，所以七八位为19或者20
    十一位和十二位是月份，这两位是01-12之间的数值
    十三位和十四位是日期，是从01-31之间的数值
    十五，十六，十七都是数字0-9
    十八位可能是数字0-9，也可能是X
    */
    const idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

    // 判断格式是否正确
    const format = idcard_patter.test(value);

    // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
    return last === last_no && format;
  }

  /**
   *联系方式校验  手机号|座机
   * @param value
   * @returns {boolean|boolean}
   */
  static phoneCheck(value: any) {
    const telReg = /^1[0-9]{10}$/;
    const phoneReg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    if (!telReg.test(value) && !phoneReg.test(value)) {
      return false;
    }
    return true;
  }

  /**
   * 获取到期天数，如果已过期，返回0
   * @param data
   * @returns {*|string}
   */
  static getDueNumberOfDays(dateTime): any | string {
    let dateTimeStamp = new Date();
    if (dateTime instanceof Date) {
      dateTimeStamp = dateTime;
    } else {
      dateTimeStamp = new Date(dateTime).getTime();
    }
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const now = new Date().getTime();
    const diffValue = dateTimeStamp - now;
    if (diffValue < 0) {
      return 0;
    }
    return `${parseInt(diffValue / day, 10)}`;
  }

  /**
   * 获得随机颜色
   * @param null
   * @returns {string}
   */
  static getRandomColor() {
    const rgb = [];

    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16);

      color = color.length == 1 ? '0' + color : color;

      rgb.push(color);
    }

    return '#' + rgb.join('');
  }

  /**
   * 通过经纬度坐标计算距离 km
   * @param lat1
   * @param lng1
   * @param lat2
   * @param lng2
   * @returns {number}
   */
  static getDotsDistance(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ) {
    var radLat1 = (lat1 * Math.PI) / 180.0;
    var radLat2 = (lat2 * Math.PI) / 180.0;
    var a = radLat1 - radLat2;
    var b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
    var s =
      2 *
      Math.asin(
        Math.sqrt(
          Math.pow(Math.sin(a / 2), 2) +
            Math.cos(radLat1) *
              Math.cos(radLat2) *
              Math.pow(Math.sin(b / 2), 2),
        ),
      );
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    return s;
  }

  static judgeGrant(user) {
    if (user.role_name === 'subcontractor') {
      return true;
    } else {
      return false;
    }
  }
  //获取月份天数
  static GetMonthDayCount(year, month) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        return 31;
      }
      case 4:
      case 6:
      case 9:
      case 11: {
        return 30;
      }
      case 2: {
        if (year % 4) {
          return 28;
        } else {
          if (year % 100) {
            return 29;
          } else {
            if (year % 400) {
              return 28;
            } else {
              return 29;
            }
          }
        }
      }
      default: {
        return 0;
      }
    }
  }

  /**
   * 检查app更新
   */
  static async checkAppUpdate(){
    let data={}
    try{
      const res = await request(
          `/system/app_version_control/getLatestVersionContent?platform=${Platform.OS==='android'?'Android':'IOS'}`,
      );
      data=res.data
    }catch (e) {
    }
    if(Platform.OS==='android'){
      if(getVersion()<data.latestVersion){
        MyModal.alert('新版本更新',`检测到新版本${data.latestVersion}，是否立即更新?`,Func.downloadFileInstallApk,data)
      }
    }else if(Platform.OS ==='ios'){

    }
    console.log('checkAppUpdate'+JSON.stringify(data))
  }

  /**
   * android下载并自动安装apk
   */
  static downloadFileInstallApk(data){
    NativeModules.DownloadApk.downloading(data.downloadPath, `guzejijian${data.latestVersion}.apk`);
}
}
