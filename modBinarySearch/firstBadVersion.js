// Initial commit


const isBadVersion = (version, badVersionList) => {
  for (let i = 0; i < badVersionList.length - 1; i++) {
    if (badVersionList[i] === version) return true;
  }
  return false;
}

const firstBadVersion = (versionList, badVersionList) => {

  let start = 0;
  let end = versionList.length - 1;
  let apiCalls = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)

    if (isBadVersion(versionList[middle], badVersionList) === true) {
      end = middle - 1;
      apiCalls++

    } else if (isBadVersion(versionList[middle], badVersionList) === false) {
      start = middle + 1;
      apiCalls++
    }
  }

  return [apiCalls, versionList[start]]
}

let vList = [1, 2, 3, 4, 5]
let badvList = [3, 4, 5]
console.log(firstBadVersion(vList, badvList))
