//*************************************************************************
//     创建日期:     2021-02-24 12:02:53
//     文件名称:     train_007.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * 题目：Leetcode-cn,7-整数反转
 * 解题思路：
 * 第1步: 去掉符号位,截取后面内容
 * 第2步：字符串转数组+翻转
 * 第3步：字符串转数组+翻转
 * 第4步：负数添加符号
 * 第5步：将字符串转成整数
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) {
        return 0;
    }

    //1. 去掉符号位,截取后面内容
    let str = x.toString();
    str = x < 0 ? str.substring(1) : str.substring(0);

    //2. 字符串转数组+翻转
    let arr = [...str];
    arr.reverse();

    //3. 有效位置拼接
    let ret = "";
    let isStartValid = false;
    for (let i = 0; i < arr.length; i++) {
        if (!isStartValid && arr[i] != 0) {
            isStartValid = true;
        }

        if (isStartValid) {
            ret += arr[i];
        }
    }

    //4. 负数添加符号
    if (x < 0) {
        ret = '-' + ret;
    }

    //5. 将字符串转成整数
    let result = Number.parseInt(ret);
    if (result <= -Math.pow(2, 31) || result >= Math.pow(2, 31) - 1) {
        result = 0;
    }
    return result;
};

console.log(reverse(-123));
