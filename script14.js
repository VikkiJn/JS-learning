// //1. Создать объект в одном файле, использовать свойство объекта в другом файле 
// the line in html file: 
// <script type="module" src="script14.js"></script>

import friend from './script13';

console.log(friend.name);