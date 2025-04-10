export const moveItemToTop = (list, item) => {
  return [item, ...list.filter(i => i !== item)];
};
