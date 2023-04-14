// src/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faPhone,faMailForward } from '@fortawesome/free-solid-svg-icons';

// 如果你需要其他图标集，也可以在这里添加
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faCheckSquare, faCoffee,faPhone,faMailForward); // 添加你需要的图标

export default FontAwesomeIcon; // 导出FontAwesomeIcon组件