// import config from './config.json';
// window.onload = function () {
//     const name = "wsf";
//     document.getElementById('div1').textContent = config.greetText+" "+name;
// }


import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('div1'));
