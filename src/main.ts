import './style.scss'
import toadPict from '/toad.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <img src="${toadPict}" width="200" height="200" id="mrtoad" />
    <h1>Quixotic Javascript Sandbox</h1>
    <article>
    <p>
      Quixotic is not a javascript manual for business. You will not build an app clone in React or Vue for a Todo list or Spotify. This Javascript manual is about Javascript, not frameworks, and it is primarily concerned with how pretty Javascript can be.
      </p>
      <p><small>
      Built with &#x1F3E9; and <a href="#">Vite</a> and <a href="#">TypeScript</a>. Click the links to learn more about what this project is built with.
    </small></p>
    </article>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
