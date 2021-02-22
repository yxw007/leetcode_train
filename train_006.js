//*************************************************************************
//     创建日期:     2021-02-22 10:02:03
//     文件名称:     train_006.js
//     创建作者:     Harry
//     版权所有:     剑齿虎
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length <= 1) {
        return s;
    }

    let arr = [...s];
    let twoArr = [];
    let cur = 0;
    let isV = true;
    for (let i = 0; i < arr.length; i++) {
        let rowIndex = cur % numRows;
        let rowArr;
        if (rowIndex < twoArr.length) {
            rowArr = twoArr[rowIndex];
        } else {
            rowArr = [];
        }
        let item = arr[i];
        rowArr.push(item);
        twoArr[rowIndex] = rowArr;
        if (isV && cur + 1 <= numRows) {
            ++cur;
            if (cur > numRows) {
                --cur;
                isV = false;
            }
        } else {
            --cur;
            if (cur < 0) {
                ++cur;
                isV = true;
            }
        }
    }

    let ret = [...twoArr];
    let result = ret.toString();
    return result;
};

let ret = convert('PAYPALI', 3);
console.log(ret);
