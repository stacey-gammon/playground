import { AppConsts } from './common/AppConsts';

export class AppStrings {
  static appName() { return AppConsts.APP_NAME; }
  static lowercaseAppName() { return this.appName().toLowerCase(); }
  static normalizedAppName() { return this.lowercaseAppName().replace(/ /g, '-'); }
  static indexName() { return AppConsts.APP_INDEX; }
  static appUrl() { return `/app/${this.normalizedAppName()}`; }
}
