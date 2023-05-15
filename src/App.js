import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './action';
import './style.css';

function App() {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    /*<div className={darkMode ? 'dark' : 'light'}>
      <h1>Salam</h1>
      <button onClick={handleToggle}>Change Mode</button>
    </div>*/
      <div className={darkMode ? 'dark' : 'light'}>
        <head>
          <title>Photographing</title>
        </head>
        <body>
          <header>
            <input onClick={handleToggle} type="checkbox" id="darkmode-toggle"/>
            <label for="darkmode-toggle"/>
            <h1>Photographing</h1>
          </header>

          <div class="container">
            <div class="sidebar">
              <img src="https://picsum.photos/id/237/300/200" alt="Ad 1"/>
              <img src="https://picsum.photos/id/238/300/200" alt="Ad 2"/>
              <img src="https://picsum.photos/id/239/300/200" alt="Ad 1"/>
              
            </div>
            <div class="content">
              <p>Photographing refers to the act of capturing or taking a photograph using a camera or other photographic equipment. It involves the process of composing a scene, adjusting camera settings such as shutter speed, aperture, and ISO, and then pressing the camera's shutter button to capture an image.</p>
              <p>Photographing can be done for various purposes such as capturing memories, creating art, documenting events, or for commercial purposes like advertising or journalism. The process of photographing requires technical knowledge, artistic skills, and creativity to create compelling and visually appealing images.</p>
              <p>Photographing can be done using different types of cameras such as digital cameras, film cameras, or smartphone cameras, and it can be done in various settings such as studios, outdoor environments, or in low-light conditions. With the advancement of technology, photographing has become more accessible and easier for people to create and share their images.</p>
              <p>Advancements in technology have made photographing more accessible to the general public. Digital cameras, smartphones, and photo-sharing platforms like Instagram have made it easier than ever to take and share photos with a wider audience. However, despite these technological advancements, the art of photographing still requires a great deal of skill, knowledge, and creativity to truly master.</p>
            </div>
          

            <div class="sidebar">
              <img src="https://picsum.photos/id/240/300/200" alt="Ad 3"/>
              <img src="https://picsum.photos/id/250/300/200" alt="Ad 4"/>
              <img src="https://picsum.photos/id/260/300/200" alt="Ad 1"/>
              
            </div>
          </div>

          

        </body>
      </div>

  );
}

export default App;
