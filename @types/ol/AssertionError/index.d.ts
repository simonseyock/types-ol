declare module 'ol/AssertionError' {

  export default class AssertionError extends Error {
    constructor(code: number);
    code: number;
  }

}
