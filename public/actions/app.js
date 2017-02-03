export const SET_KBN_VERSION = 'SET_KBN_VERSION';
export const SET_BASE_PATH = 'SET_BASE_PATH';
import { dispatch } from '../dispatcher/dispatcher';

export class AppActions {
  static setKbnVersion(kbnVersion) {
    dispatch({ type: SET_KBN_VERSION, kbnVersion });
  }

  static setBasePath(basePath) {
    dispatch({ type: SET_BASE_PATH, basePath });
  }
}