import './css/Notice.css';
import { useState, useEffect } from 'react';
import textfile from './notice.txt';

export default function Notice() {

  // notice.txt 의 텍스트를 불러옵니다.
  const [text, setText] = useState('');
  useEffect(() => {
    fetch(textfile)
      .then(response => response.text())
      .then(textContent => {
        setText(textContent);
  })}, []);
  
  return (
    <div className='notice'>
      <div className='notice_title'>
        <img src='img/bell.png' alt='bell'/>
        <span>공지사항</span>
      </div>
      <div className='notice_text'>
        <span dangerouslySetInnerHTML={{__html: text.replace(/\n/g, "<br />")}}></span>
      </div>
    </div>
  )
}