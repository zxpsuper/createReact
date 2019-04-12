import { observable, action } from 'mobx';

class Store {
    @observable title = 'Suporka';
    @observable finished = false;
    @observable clickTime = 0;

    @action
    addClickTime() {
        ++this.clickTime;
    }
}

export default Store;
