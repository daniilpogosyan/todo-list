export const getNewId = (function() {
  let currentId = 0;

  return () => currentId++
})();