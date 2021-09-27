// TEST
// import MANY different sizes of the image and create a srcset from them
import test_avif from './img/greg.jpg?format=avif'
import test_jpg from './img/greg.jpg'
// import srcsetJpg1 from './assets/images/banner1.png?w=500;640;768;1024;1200;1366;1600;1920&jpg&quality=50&srcset'
// create a small placeholder and import its metadata
// import { src as placeholder1 } from './assets/images/banner1.png?width=600&blur=30&quality=50&metadata'

document.querySelector('#test').innerHTML = `
  <picture>
    <source scrset="${test_avif}" type="image/avif"/>

    <img
        src="${test_jpg}" />
  </picture>
`

import test2 from './img/greg.jpg?&format=avif&width=630'
document.getElementById('test2').srcset = test2;