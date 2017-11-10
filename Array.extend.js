// 数字数组由小到大排序
Array.prototype.min2Max = function () {
    var num;
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (this[i] < this[j]) {
                num = this[i];
                this[i] = this[j];
                this[j] = num;
            }
        }
    }
    return this;
};

// 数字数组由大到小排序
Array.prototype.max2Min = function () {
    var num;
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (this[i] > this[j]) {
                num = this[i];
                this[i] = this[j];
                this[j] = num;
            }
        }
    }
    return this;
};

// 获得数字数组中最大项
Array.prototype.getMax = function () {
    var max = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        }
    }
    return max;
};

// 获得数字数组中最小项
Array.prototype.getMin = function () {
    var min = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }
    return min;
};

// 数组是否包含该元素
Array.prototype.contains = function (val) {
    for (var k in this) {
        if (this[k] == val) {
            return true
        }
    }
    return false;
}

// 元素在数组中的位置
Array.prototype.indexOf = function (obj) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === obj) {
            return i;
        }
    }
    return -1;
}


//去除数组中的重复元素
Array.prototype.unique = function (val) {
    var ret = [];
    for (var i = 0, l = this.length; i < l; i++) {
        for (var j = i + 1; j < l; j++)
            if (this[i] === this[j]) j = ++i;
        ret.push(this[i]);
    }
    return ret;
}

// 两数组并集
Array.prototype.union = function (arrs) {
    return this.concat(arrs).unique();

}

// 两数组差集
Array.prototype.minus = function (arrs) {
    var result = [];
    var clone = this;
    for (var i = 0; i < clone.length; i++) {
        var flag = true;
        for (var j = 0; j < arrs.length; j++) {
            if (clone[i] == arrs[j])
                flag = false;
        }
        if (flag)
            result.push(clone[i]);
    }
    return result.unique();
}

// 两数组交集
Array.prototype.intersect = function (arrs) {
    var result = [];
    for (var i = 0; i < arrs.length; i++) {
        var temp = arrs[i];
        for (var j = 0; j < this.length; j++) {
            if (temp === this[j]) {
                result.push(temp);
                break;
            }
        }
    }
    return result.unique();
}

// 两数组合并
Array.prototype.extends = function (arrs) {
    if (arrs.length > this.length) {
        for (var k in this.length) {
            arrs.push(this[k]);
        }
        return arrs;
    }
    else {
        for (var k in arrs.length) {
            this.push(arrs[k]);
        }
        return this;
    }
}
