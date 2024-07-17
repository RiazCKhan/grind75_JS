// Initial commit


const isBadVersion = (version, badVersionList) => {
  for (let i = 0; i < badVersionList.length - 1; i++) {
    if (badVersionList[i] === version) return true;
  }
  return false;
}