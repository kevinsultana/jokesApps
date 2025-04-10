export const moveItemToTop = (list, item) => {
  return [item, ...list.filter(i => i !== item)];
};

export const generateKey = (prefix = '') =>
  `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
