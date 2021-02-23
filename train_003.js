//*************************************************************************
//     创建日期:     2021-02-23 09:02:02
//     文件名称:     train_003.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************
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
