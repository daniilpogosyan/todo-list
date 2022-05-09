export const getNewId = () => {
  const id = Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);
  console.log(id)
  return id;
};

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