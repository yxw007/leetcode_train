//*************************************************************************
//     创建日期:     2021-02-23 09:02:17
//     文件名称:     train_001.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * 题目：Leetcode-cn,1-两数相加
 * 目的：获取数组中和为target的组集合
 * 解题思路：
 * i从[0,nums.length-1] 与 j从[i+1,num.length-1] 嵌套遍历，然后获取出 nums[i]+nums[j] === target 的集合
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let ret = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                ret.push(i, j);
                break;
            }
        }
    }
    return ret;
};

console.log(twoSum([1, 2, 3, 4], 6));
