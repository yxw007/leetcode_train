//*************************************************************************
//     创建日期:     2021-02-26 01:02:27
//     文件名称:     train_009.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * 题目：Leetcode-cn,9-回文数
 * 目的：字符串转成整数
 * 解题思路：反转是否相等即可
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    //解法1：
    // return x.toString() === [...x.toString()].reverse().join("");

    let tmp = x;
    let res = 0;
    while (tmp != 0) {
        res = res * 10 + tmp % 10;
        tmp = parseInt(tmp / 10);
    }
    return res == x;
};

let num = 123;
console.log(isPalindrome(num))
