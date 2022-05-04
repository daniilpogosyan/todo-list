export const getNewId = (function() {
  let currentId = 0;

  return () => currentId++
})();

// wrap DOM-element in <li><li>
export const WrapInLi = (DOMelement, attributes) => {
  const wrapper = document.createElement('li');
  wrapper.appendChild(DOMelement);

  if (attributes) {
    for(const [key, value] of Object.entries(attributes)) {
      wrapper.setAttribute(key, value)
    }
  }
  
  return wrapper;
}