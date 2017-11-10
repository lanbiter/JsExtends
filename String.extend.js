// 字符串是否以另一个字符串结尾
String.prototype.EndWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substring(this.length - str.length) == str)
        return true;
    else
        return false;
    return true;
}

// 字符串是否以另一个字符串开头
String.prototype.StartWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substr(0, str.length) == str)
        return true;
    else
        return false;
    return true;
}

//去掉首尾空格
String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

// 去掉开头空格
String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "");
}

// 去掉结尾空格
String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "");
}

// 格式化字符串
String.prototype.format = function (str) {
    var i = 1, args = arguments;
    var str = args[0];
    var re = /\{(\d+)\}/g;
    return str.replace(re, function () {
        return args[i++]
    });
};

//判断是否email
String.prototype.isEmail = function () {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this);
}

// 字符串中是否包含中文
String.prototype.existChinese = function () {
    return /^[\x00-\xff]*$/.test(this);
}

//检查url
String.prototype.isUrl = function () {
    return /^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/i.test(this);
}

//检查电话号码
String.prototype.isPhoneCall = function () {
    return /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0−9]3,4[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/.test(this);
}

// 是否是身份证号码
String.prototype.isIDCard = function () {
    var iSum = 0;
    var info = "";
    var sId = this;
    var aCity = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    if (!/^d{17}(d|x)$/i.test(sId)) {
        return false;
    }
    sId = sId.replace(/x$/i, "a");
    //非法地区
    if (aCity[parseInt(sId.substr(0, 2))] == null) {
        return false;
    }
    var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"))
    //非法生日
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
        return false;
    }
    for (var i = 17; i >= 0; i--) {
        iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    }
    if (iSum % 11 != 1) {
        return false;
    }
    return true;
}

// 将字符串转为日期 char is . / -
String.prototype.toDate = function (char) {
    var mDate = new Date(Date.parse(str));
    if (isNaN(mDate)) {
        var arr = this.split(char);
        mDate = new Date(arr[0], arr[1], arr[2]);
    }
    return mDate;
}