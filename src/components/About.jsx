import React, { useState } from 'react';
import useTheme from './useTheme';
import 'bootstrap/dist/css/bootstrap.min.css';

const tabContent = [
  {
    label: 'About Project',
    content: 'This is a React Orchid Gallery project for FER202 Lab. It demonstrates React Hooks, Routing, Formik, Yup, and Material UI.'
  },
  {
    label: 'About Author',
    content: 'Author: Your Name. Student at University. Contact: orchid@example.com.'
  },
  {
    label: 'About Orchids',
    content: 'Orchids are a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant.'
  }
];

const faq = [
  { q: 'What is an orchid?', a: 'Orchids are a family of flowering plants with diverse and beautiful blooms.' },
  { q: 'How to care for orchids?', a: 'Provide bright, indirect light, water sparingly, and use well-draining soil.' },
  { q: 'Are orchids hard to grow?', a: 'Some are easy, some are challenging. Most need humidity and good airflow.' }
];

export default function About() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(null);
  const [theme] = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="container my-5">
      <ul className="nav nav-tabs justify-content-center mb-4">
        {tabContent.map((t, i) => (
          <li className="nav-item" key={i}>
            <button className={`nav-link${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{t.label}</button>
          </li>
        ))}
      </ul>
      <div className={`${isDark ? 'bg-dark text-light' : 'bg-white'} rounded shadow-sm p-4 mb-4 text-center`} style={{minHeight: 120}}>
        {tabContent[tab].content}
      </div>
      <h5 className={`${isDark ? 'text-info' : 'text-primary'} mb-3`}>FAQ</h5>
      <div className="accordion" id="faqAccordion">
        {faq.map((item, idx) => (
          <div className={`accordion-item ${isDark ? 'bg-dark' : ''}`} key={idx}>
            <h2 className="accordion-header" id={`heading${idx}`}>
              <button className={`accordion-button${open === idx ? '' : ' collapsed'} ${isDark ? 'bg-dark text-light' : ''}`} type="button" onClick={() => setOpen(open === idx ? null : idx)}>
                {item.q}
              </button>
            </h2>
            <div className={`accordion-collapse collapse${open === idx ? ' show' : ''}`}>
              <div className={`accordion-body ${isDark ? 'bg-dark text-light' : ''}`}>{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
