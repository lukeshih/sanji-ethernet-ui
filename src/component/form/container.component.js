import EthernetFormContainerController from './container.controller';

const EthernetFormContainerComponent = {
  bindings: {
    onLogout: '&'
  },
  template: `<sanji-ethernet-form data="$ctrl.data"
              tab-index="$ctrl.sanjiWindowMgr.tabIndex"
              on-submit="$ctrl.onSave($event)"></sanji-ethernet-form>`,
  controller: EthernetFormContainerController
};
export default EthernetFormContainerComponent;
