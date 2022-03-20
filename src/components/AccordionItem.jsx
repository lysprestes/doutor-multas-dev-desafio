import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../static/arrow.svg'

export default function AccordionItem({ title, term, list }) {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item border border-gray-200 relative" onClick={() => setToggle(!toggle)}>
        <h2 className="accordion-header mb-0" id={`accordion-header-${term}`}>
          <button
            className="
            accordion-button
            relative
            flex
            items-center
            w-full
            py-4
            px-5
            text-base text-gray-800 text-left
            bg-white
            border-0
            rounded-none
            transition
            focus:outline-none
          "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${term}`}
            aria-expanded={true}
            aria-controls={`collapse-${term}`}
            onClick={() => setToggle(!toggle)}
          >
            {title}
            <div className="absolute right-2">
              <img
                src={arrow}
                alt="toggle-accordion"
                className={`${toggle ? 'rotate-180' : ''}`}
              />
            </div>
          </button>
        </h2>
        <div
          id={`collapse-${term}`}
          className={`accordion-collapse collapse`}
          aria-labelledby={`accordion-header-${term}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 bg-slate-100 rounded-md">
            {list.map((item) => (
              <div className="m-2 p-2 bg-white" key={item.codigo}>
                <Link to={`/${term}/${item.codigo}`} className="text-left hover:text-blue-600">{item.nome}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
