import './index.scss';
import { render } from 'react-dom';
import YoutubeToPostAdminPageMain from './cmp/main'
window.onload = function () {
  render(<YoutubeToPostAdminPageMain settings={window.yttpData} />, document.getElementById('yttpMain'));
};

console.log('React for  the win 2');
