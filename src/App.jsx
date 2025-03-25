import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/footer.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h4>welcome to</h4>
        <h2>wallpaper designs</h2>

        <h6>why think about wallpaper designs,<br />when you can just slaps into template?</h6>
        <div className='buttons'>
          <Link to='/get-started' className='start'>Get started!</Link>
          <a className='favourite' href='https://www.github.com/yusufriduan/wallpaper-designs'>
            <i class="fa fa-bookmark-o" style={{ fontSize: '24px', display: 'flex' }}></i>
          </a>
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
