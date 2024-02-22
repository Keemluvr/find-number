export default (nums: number[], numToFind: number): number => {
  if (!nums || nums.length === 0) return -1
  
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] === numToFind) return middle 
    else if (nums[middle] < numToFind) left = middle + 1
    else right = middle - 1
  }

  return -1
}
