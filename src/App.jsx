import Accordion from './components/Accordion'
import Logo from './logotipo.png'
import 'tw-elements'
import './App.css'

function App() {
  return (
    <div className="App">
      <header class="text-gray-600 body-font stiky">
        <div class="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
          
          <a href="https://doutormultas.com.br/" target="_blank">
            <img src={Logo} alt="" srcset="" className="max-h-12" />
          </a>
          <a
            href="https://doutormultas.com.br/consulta-gratis/?utm_content=popup-hellobar"
            target="_blank">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Você foi multado?
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
      <Accordion/>
    </div>
  )
}

export default App
