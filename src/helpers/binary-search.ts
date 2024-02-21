export default (nums: number[], numToFind: number): number => {
	let left: number = 0;
	let right: number = nums.length - 1;

	while (left <= right) {
		let middle: number = ~~Math.floor(left + (right - left) / 2);

		if (nums[middle] === numToFind) return middle;
		else if (nums[middle] < numToFind) left = middle + 1;
		else right = middle - 1;
	}

	return -1;
}