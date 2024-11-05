function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
 
    // const pivotIndex = Math.floor(arr.length / 2);
    const pivotIndex = 0;
    const pivot = arr[pivotIndex]
    const left = [];
    const right = [];
 
    for (let i = 0; i < arr.length; i++) {
        if(i===pivotIndex) continue
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
 
    return [...quickSort(left), pivot, ...quickSort(right)];
}
 
// 使用示例
const unsortedArray = [3, 6, 8, 10, 1, 2, 1, 4, 6, 7, 9];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); 