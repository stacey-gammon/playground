/**
 * @type Object
 * @property kbnVersion {string}
 */
export class AppState {
  constructor() {
    this.kbnVersion = '6.0.0-alpha1';
    this.basePath;

    this.showSpinner = false;
  }
}