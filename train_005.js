//*************************************************************************
//     创建日期:     2021-02-21 11:02:23
//     文件名称:     train_005.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:     寻找最长回文子串
//*************************************************************************

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }

    let loopStr = s[0];
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j - 1 >= i; j--) {
            if (s[i] == s[j]) {
                let curStr = s.slice(i, j + 1);
                let loop = isLoop(curStr);
                if (loop && curStr.length > loopStr.length) {
                    loopStr = curStr;
                }
            }
        }
    }

    return loopStr;
};

function isLoop(s) {
    let i = 0;
    let j = s.length - 1;
    for (let i = 0, j = s.length - 1; i < j && i < s.length; i++, j--) {
        let iStr = s[i];
        let jStr = s[j];
        if (iStr !== jStr) {
            return false;
        }
    }

    return true;
}

let result = longestPalindrome("aacabdkacaa");
console.log(result);


