import './style.scss'
import toadPict from '/toad.svg'
import anime from 'animejs/lib/anime.es.js';

const go = anime({
  targets: '#mrtoad',
  // translateX: 250,
  rotate: '1turn',
  opacity: 1,
  duration: 800
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>Quixotic Javascript Sandbox</h1>
    <article>
    <p>
      Quixotic is not a javascript manual for business. You will not build an app clone in React or Vue for a Todo list or Spotify. This Javascript manual is about Javascript, not frameworks, and it is primarily concerned with how pretty Javascript can be.
      </p>
    </article>

    <footer>
      <p>
        Built with &#x1F3E9; and <a href="#">Vite</a> and <a href="#">TypeScript</a>. Click the links to learn more about what this project is built with.
      </p>
    </footer>
`

console.log(`Where's the animation?`)

// go.play()

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
