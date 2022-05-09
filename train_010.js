//*************************************************************************
//     创建日期:     2021-02-27 09:02:19
//     文件名称:     train_010.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * 解题思路
 * 要点：
 *      * ：匹配前一个的任意个数字符
 *      . ：匹配任意单字符
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/*var isMatch = function (s, p) {
    if (!p || p.length <= 0) {
        return false;
    }

    let i = 0;
    let j = 0;
    for (; i < s.length; i++) {
        let iChar = s[i];

        if (j >= p.length && i < s.length) {
            return false;
        }

        while (j < p.length) {
            let jChar = p[j];
            if (iChar === jChar) {
                j++;
                break;
            } else if (jChar === ".") {
                j++;
                break;
            } else {
                //aab  用c*ab 匹配
                if (j + 1 < p.length && p[j + 1] === "*") {
                    j += 2;
                    continue;
                }
                //aab 用a*b 匹配
                else if (p[j] == "*") {
                    //向下匹配
                    if (j - 1 >= 0 && (p[j - 1] === iChar || p[j - 1] === ".")) {
                        break;
                    }
                    //向上匹配
                    if (i - 1 > 0 && p[j] === s[i - 1]) {
                        j++;
                        continue;
                    }
                    j++;
                } else {
                    return false;
                }
            }
        }
    }

    let lastChar = s[s.length - 1];
    if (p.substr(j).startsWith('*')) {
        j = p.lastIndexOf("*") + 1;
        //判断最后一个字符
        if (j >= p.length) {
            return true;
        }
        // 超过一个字符
        if (j + 1 < p.length) {
            return false;
        }
        return p[j] === lastChar;
    } else {
        if (j + 1 <= p.length) {
            return false;
        }
    }

    return true;
};*/

var isMatch = function (s, p) {
    if (!p || p.length <= 0) {
        return false;
    }

    return __isMatch(s, p, undefined);
}

function __isMatch(s, p, lastChar) {
    if (s.length <= 0) {
        if (p.length <= 0) {
            return true;
        }

        //*a  *
        let char = p[0];
        if (char == "*") {
            if (lastChar == "." && p.length <= 1) {
                return true;
            } else {
                return __isMatch(s, p.substring(1), undefined);
            }
        } else {
            if (lastChar == "*" && p.length <= 1) {
                return true;
            } else {
                // return __isMatch(s, p.substring(1), char);
                return false;
            }
        }
    } else {
        if (p.length <= 0) {
            return false;
        }

        //  *a    .  aa
        if ((s[0] == lastChar || (lastChar == ".")) && p[0] == "*") {
            return __isMatch(s.substring(1), p, lastChar);
        }

        if (p[0] == "*") {
            if (lastChar == "." && p.length <= 1) {
                return true;
            } else {
                return __isMatch(s, p.substring(1), undefined);
            }
        }

        //aa  .*
        if (s[0] == p[0] || p[0] == ".") {
            return __isMatch(s.substring(1), p.substring(1), p[0]);
        } else {
            //aaa  c*a*
            return __isMatch(s, p.substring(1), p[0]);
        }
    }
}

let result = isMatch('ab', 'a*a');
console.log(result);
