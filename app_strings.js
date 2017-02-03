export class AppStrings {
  static appName() { return 'React Examples'; }
  static lowercaseAppName() { return this.appName().toLowerCase(); }
  static normalizedAppName() { return this.lowercaseAppName().replace(/ /g, '-'); }
  static indexName() { return `kibana.index`; }
  static appUrl() { return `/app/${this.normalizedAppName()}`; }
}
