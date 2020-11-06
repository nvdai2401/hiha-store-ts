import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="c-contact">
      <h1 className="m-t-b-0 m-b-24">Contact information</h1>
      <p className="bold">Contact with me via:</p>
      <ul>
        <li className="m-l-24">
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/nvdai2401/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/nvdai2401/
          </a>
        </li>
        <li className="m-l-24">
          Github:{' '}
          <a
            href="https://github.com/nvdai2401"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/nvdai2401
          </a>
        </li>
        <li className="m-l-24">
          Stackoverflow:{' '}
          <a
            href="https://stackoverflow.com/users/9548285/michael"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://stackoverflow.com/users/9548285
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
