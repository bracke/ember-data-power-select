import PowerSelect from 'ember-power-select/components/power-select';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object'
import { action } from "@ember/object";

export default class extends PowerSelect
{
  @service
  store;

  @computed
  get search(){
    return term => {
      const { modelName, params, queryKey = 'search', store } =
        this.getProperties('modelName', 'params', 'queryKey', 'store')

      const query = Object.assign({}, params)
      query[queryKey] = term

      return store.query(modelName, query)
    };
  };
  @action
  onChange() {
    this._super(...arguments);
  }
  @action
  onOpen() {
    this._super(...arguments);
    this._performSearch('');
  }
  @action
  onTriggerFocus(){
    this._super(...arguments);
    this._performSearch('');
  } 
}
