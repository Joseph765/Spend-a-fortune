export function createCurrentItems(items, currentPage) {
  if (items.length > 0) {
    const currentItems = [];

    for (let i = currentPage * 9 - 9; i < currentPage * 9; i++) {
      if (items[i]) {
        currentItems.push(items[i]);
      }
    }

    return currentItems;
  }

  return items;
}

export function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
