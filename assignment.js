const thoseNumbers = [12, 25, 98, 33, 117, 8, 11, 4, -3, -112];

const withDuplicates = [12, 25, 33, 33, 117, 8, 11, 11, -3, -3, -112];

const greaterThanFive = thoseNumbers
  .filter((num) => num > 5)
  .map((nm) => ({ num: nm }))
  .reduce((pv, cv) => {
    return pv + cv.num;
  }, 0);

const findMinAndMax = ([...arr]) => {
  const ordered = arr.sort((a, b) => {
    if (a > b) {
      return -1;
    }
  });
  console.log(ordered);
  return [ordered[ordered.length - 1], ordered[0]];
};

const [min, max] = findMinAndMax(thoseNumbers);
console.log(min, max);

const uniqueList = new Set();

for (const num of thoseNumbers) {
  uniqueList.add(num);
}
