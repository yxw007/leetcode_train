//*************************************************************************
//     创建日期:     2021-02-23 09:02:10
//     文件名称:     train_002.js
//     创建作者:     Harry
//     开发版本:     V1.0
//     相关说明:
//*************************************************************************

/**
 * 题目：Leetcode-cn,2-两数相加
 * 解题思路：
 * 第1步: 甄别长短链表，分别为longListNode、shortListNode
 * 第2步: 先遍历短列表，再嵌套遍历长列表，curShortNode.val + curLongNode.val 求和sum
 * 第3步: 判断sum < 10
 *          是： curLongNode.val = sum
 *          否:
 *              curLongNode.val = sum%10
 *              curLongNode.next.val +=1
 *              curNode = curLongNode.next
 *                  while(curNode && curNode.val > 10)
 *                      是：
 *                          next.val=0;
 *                          next.next.val +=1
 *                          让当前节点指向下一个节点
 *                          curNode = curNode.next
 *                      否: break
 *
 *              让当前节点指向下一个节点
 *              curShortNode = curShortNode.next;
 *              curLongNode = curLongNode.next;
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function size(node) {
    let cur = node;
    let size = node ? 1 : 0;
    while (cur.next) {
        cur = cur.next;
        ++size;
    }
    return size;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //1. 获取两个链表size
    let l1Size = size(l1);
    let l2Size = size(l2);

    if (l1Size <= 0) {
        return l2;
    }

    if (l2Size <= 0) {
        return l1;
    }

    // 获取长、短
    let shortNode;
    let longNode;
    if (l1Size <= l2Size) {
        shortNode = l1;
        longNode = l2;
    } else {
        shortNode = l2;
        longNode = l1;
    }

    //2. 遍历短链表&长链表, 判断最后一位合是否大于10,如果大于则遍历长链表剩余节点
    let curShortNode = shortNode;
    let curLongNode = longNode;
    while (curShortNode && curLongNode) {
        let sum = curShortNode.val + curLongNode.val;
        if (sum <= 9) {
            curLongNode.val = sum;
        } else {
            curLongNode.val = sum % 10;
            curLongNode.next = curLongNode.next ? curLongNode.next : (new ListNode());

            let curNode = curLongNode.next;
            curNode.val += 1;
            while (curNode && curNode.val > 9) {
                curNode.val = 0;
                curNode.next = curNode.next ? curNode.next : (new ListNode());
                curNode.next.val += 1;
                curNode = curNode.next;
            }
        }

        curShortNode = curShortNode.next;
        curLongNode = curLongNode.next;
    }

    return longNode;
};

function initListNode(arr) {
    if (arr.length <= 0) {
        return null;
    }

    let val = arr.shift();
    let listNode = new ListNode(val);
    listNode.next = initListNode(arr);
    return listNode;
}

let listNode1 = initListNode([9, 9, 9]);
let listNode2 = initListNode([9]);

let listNodeResult = addTwoNumbers(listNode1, listNode2);
console.log(listNodeResult);
