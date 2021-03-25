import '@testing-library/jest-dom/extend-expect';

import IntlPolyfill from 'intl';

if (global.Intl) {
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
} else {
  global.Intl = require('intl');
}
