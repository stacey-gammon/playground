import { AppConsts } from '../../common/AppConsts';

export class SavedObjectApi {
  static getPathForType(type) {
    return `..${AppConsts.BASE_API}/${type}`;
  }

  static getGetHeader(kbnVersion) {
    return {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'kbn-version': kbnVersion
      }
    };
  }
}