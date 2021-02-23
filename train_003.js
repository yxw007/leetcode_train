//*************************************************************************
//     创建日期:     2021-02-23 09:02:02
//     文件名称:     train_003.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * 题目：Leetcode-cn,3-无重复字符的最长子串
 * 解题思路：
 * 第1步: 将字符串s转成数组arr
 * 第2步：
 *      1>定义start,end 两个游标，目的：锁定区间
 *      2>定义max  目的: arr.slice(start, end).length > max 就重新赋值,存储最大子串长度
 * 第3步：
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0;
    }
    if (s.length <= 1) {
        return s.length;
    }

    let arr = [...s];
    let start = 0;
    let end = 1;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let str = arr.slice(start, end);
        if (max < str.length) max = str.length;
        let item = arr[i + 1];
        const index = str.indexOf(item);
        if (index !== -1) {
            if (index === 0) {
                start += 1;
            } else {
                start += index + 1;
            }
        }
        end += 1;
    }

    return max;
};

let str = "abcabcbb";
let len = lengthOfLongestSubstring(str);
console.log(len);
