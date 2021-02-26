//*************************************************************************
//     创建日期:     2021-02-26 09:02:08
//     文件名称:     train_008.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * 题目：Leetcode-cn,8-字符串转换整数 (atoi)
 * 目的：字符串转成整数
 * 解题思路：
 * 逐个读取字符
 *     判断首字符类型？
 *          空格：continue过滤
 *          符号：-
 *          字母：break
 *          数字：继续
 *     最后str 转数字
 *          < 最小值：最小值
 *          > 最大值：最大值
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();

    let str = "";
    let sign = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char.length <= 0) {
            continue;
        }
        if (char === "-" || char === "+") {
            if (sign.trim().length <= 0 && str.length <= 0) {
                sign = char;
                continue;
            } else {
                break;
            }
        }
        let charNum = s.charCodeAt(i) - 48;
        if (charNum === 0 && i + 1 < s.length && (s[i + 1] === "-" || s[i + 1] === "+")) {
            break;
        }
        if (charNum >= 0 && charNum <= 9) {
            if (charNum === 0 && str.length <= 0) {
                continue
            }
            str += char;
        } else {
            break;
        }
    }

    if (str.length <= 0) {
        return 0;
    }

    if (sign === "+" || sign.length <= 0) {
        let num1 = Number.parseInt(str);
        let num2 = (Math.pow(2, 31) - 1);
        if (num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    } else {
        let num1 = Number.parseInt(sign + str);
        let num2 = -Math.pow(2, 31);
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }
};

let result = myAtoi("123-");
console.log(result);
