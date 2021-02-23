//*************************************************************************
//     创建日期:     2021-02-23 09:02:17
//     文件名称:     train_001.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let ret = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                ret.push(i, j);
                break;
            }
        }
    }
    return ret;
};

console.log(twoSum([1, 2, 3, 4], 6));
