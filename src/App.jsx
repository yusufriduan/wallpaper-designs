import React from 'react';
import logo from './logo.svg';
import favIcon from './static/star_favorite_3421.ico';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h4>welcome to</h4>
        <h2>wallpaper designs</h2>

        <h6>why think about wallpaper designs,<br />when you can just slaps into template?</h6>
        <div className='buttons'>
          <button className='start'>Get started!</button>
          <a className='favourite' href='https://www.github.com/yusufriduan/wallpaper-designs'>
            <i class="fa fa-bookmark-o" style={{ fontSize: '25px' }}></i>
          </a>
        </div>
        </header>
    </div>
  );
}

export default App;
