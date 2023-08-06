import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// const subtitle = document.getElementsByClassName("card-subtitle")[0];

// const createWord = (text, index) => {
//   const word = document.createElement("span");

//   word.innerHTML = `${text} `;

//   word.classList.add("card-subtitle-word");

//   word.style.trasitionDelay = `${index * 40}ms `;

//   return word;
// }

// const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

// const createSubtitle = text => text.split(" ").map(addWord);

// createSubtitle("But in a much more real sense, I have no idea what I'm doing");

function App() {

  const [subtitleWords, setSubtitleWords] = useState([]);

  const createSubtitle = (text) => {
    const words = text.split(' ').map((word, index) => (
      <span key={index} className="card-subtitle-word" style={{ transitionDelay: `${index * 40}ms` }}>
        {word}{' '}
      </span>
    ));
    setSubtitleWords(words);
  };

  useEffect(() => {
    createSubtitle("But in a much more real sense, I have no idea what I'm doing");
  }, []);
  return (
    <div className="main">
      <div className="card">
        <div class="card-content">
          <h3 class="card-title">I know exactly what I'm doing</h3>
          <h4 class="card-subtitle">{subtitleWords}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
