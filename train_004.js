/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length <= 0 && nums2.length === 1) {
        return nums2[0];
    }
    if (nums2.length <= 0 && nums1.length === 1) {
        return nums1[0];
    }

    let middle = mergeMiddle(nums1, nums2);
    return middle;
};

function mergeMiddle(left, right) {
    let result = [];
    let totalNum = left.length + right.leng
    let n = totalNum / 2;
    let mode = totalNum % 2;
    let needGetIndex = [];
    if (mode === 0) {
        needGetIndex.push(n - 1);
    }
    needGetIndex.push(n);

    while (left.length > 0 || right.length > 0) {
        if (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        } else {
            while (left.length > 0) {
                result.push(left.shift());
                if (result.length > n) {
                    break;
                }
            }

            while (right.length > 0) {
                result.push(right.shift());
                if (result.length > n) {
                    break;
                }
            }

        }

        if (result.length > n) {
            break;
        }
    }

    let ret = 0;
    if (needGetIndex.length == 1) {
        ret = result[result.length - 1];
    } else {
        ret = (result[result.length - 2] + result[result.length - 1]) / 2.0;
    }

    return ret;
}

let ret = findMedianSortedArrays([2], []);
console.log(ret);
