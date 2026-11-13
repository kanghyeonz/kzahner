import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import '@/fonts-ko.css';
import '@/index.css';
import App from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet defaultTitle='Kanghyeon Kim' titleTemplate='%s | Kanghyeon Kim'>
      <meta charSet='utf-8' />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
