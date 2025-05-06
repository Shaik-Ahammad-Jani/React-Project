import React from 'react'
import { Link } from 'react-router-dom';

const Syntax = () => {
  const languages = ["HTML","CSS","JavaScript","ReactJS","NodeJS","ExpressJS", "Python", "Java", "C++", "Ruby", "Go"];

  return (
    <div>
      <section id="languages" className="languages-section">
        <div className="container1">
          <h2 className="section-title">Programming Languages We Offer</h2>

          <div className="languages-grid">
            {languages.map((language) => (
              <div key={language} className="language-card">
                <h3 className="language-name">{language}</h3>
                <Link to={`/${language.toLowerCase()}`}>Learn {language}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Syntax
