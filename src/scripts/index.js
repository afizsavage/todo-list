import '../styles/styles.css';

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = `Hello, webpack`;
 
   element.classList.add('dark');
 
    return element;
  }
 
 window.onload =  document.body.appendChild(component());