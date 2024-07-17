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
  let middle = Math.floor((start + end) / 2)
  let apiCalls = 0;

  while (start <= end) {

    if (isBadVersion(versionList[middle], badVersionList) === true) {
      end = middle - 1;
      apiCalls++

    } else if (isBadVersion(versionList[middle], badVersionList) === false) {
      start = middle + 1;
      apiCalls++
    }
  }

  return [apiCalls, versionList[middle]]
}
