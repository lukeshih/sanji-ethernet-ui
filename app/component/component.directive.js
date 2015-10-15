const injectMap = new WeakMap();
const $inject = [];
class EthernetDirective {
  constructor(injects) {
    EthernetDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetDirective[item] = injects[index];
      injectMap.set(EthernetDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-ethernet-edit.tpl.html'
    this.restrict = 'EA';
    this.controller = 'EthernetController';
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {
      tabs: '='
    };
  }

  static directiveFactory(...injects) {
    EthernetDirective.instance = new EthernetDirective(injects);
    return EthernetDirective.instance;
  }
}
EthernetDirective.directiveFactory.$inject = $inject;
export default EthernetDirective;