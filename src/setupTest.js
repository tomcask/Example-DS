import '@testing-library/jest-dom/extend-expect';

////////// Mock Global Objects ////////////////////////////////////
global.XMLHttpRequest = null;
global.wait = () => new Promise(resolve => setImmediate(resolve))
