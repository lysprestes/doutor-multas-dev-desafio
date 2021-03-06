import Logo from '../static/logotipo.png';

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font stiky">
        <div className="container mx-auto flex justify-between flex-wrap justify-between p-5 md:flex-row items-center">
          <a href="https://doutormultas.com.br/" target="_blank">
            <img src={Logo} alt="Logo Doutor Multas" className="max-h-12" />
          </a>
          
          <a
            href="https://doutormultas.com.br/consulta-gratis/?utm_content=popup-hellobar"
            target="_blank"
          >
            <button className="flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Você foi multado?
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
    </div>
  )
}
