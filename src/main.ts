import './style.scss'
import toadPict from '/toad.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <img src="${toadPict}" width="200" height="200" />
    <h1>Quixotic Javascript Sandbox</h1>
    <p class="read-the-docs">
      Click on the <a href="#">Vite</a> and <a href="#">TypeScript</a> logos to learn more
    </p>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
