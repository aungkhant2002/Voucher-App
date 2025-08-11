import React from 'react'
import { HiChevronRight, HiMiniHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <section>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-stone-700 hover:text-stone-600">
              <HiMiniHome className='mr-1' />
              Home
            </Link>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path} className="inline-flex items-center text-sm font-medium text-stone-700 hover:text-stone-600">
                  <HiChevronRight className='mr-1' />
                  {link.title}
                </Link>
              </li>
            ))
          }

          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronRight />
              <span className="ms-1 text-sm font-medium text-stone-500 md:ms-2">{currentPageTitle}</span>
            </div>
          </li>
        </ol>
      </nav>
    </section>
  )
}

export default Breadcrumb