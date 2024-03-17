import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <header >
        This is the Contact page.
      </header>
      <body>
        <h1>contact me!</h1>
        <ol>
          <li>
            <a href='https://www.linkedin.com/in/rachel-shi-04b52720a/' target='_blank' ><img src='linkedIn icon' alt="Link to Rachel's LinkedIn page"/></a>
          </li>
          <li>
            <a href='https://github.com/rachel-601' target='_blank' ><img src='GitHub icon' alt="Link to Rachel's GitHub page"/></a>
          </li>
          <li>
            <a href='mailto:racheljune2004@gmail.com' target='_blank' ><img src='Mail icon' alt="Link to send Rachel an email"/></a>
          </li>
        </ol>
      </body>
    </div>
  );
}