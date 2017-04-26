import fetchPonyfill from 'fetch-ponyfill';
import Promise from 'bluebird';

const XMLHttpRequest = (window && window.XMLHttpRequest) || null;

const { fetch } = fetchPonyfill({ Promise, XMLHttpRequest });

export default fetch;
