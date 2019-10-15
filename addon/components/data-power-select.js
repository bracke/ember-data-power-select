import PowerSelect from 'ember-power-select/components/power-select';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object'

export default PowerSelect.extend({
  store: service(),

  search: computed(function(){
    return term => {
      const { modelName, params, queryKey = 'search', store } =
        this.getProperties('modelName', 'params', 'queryKey', 'store')

      const query = Object.assign({}, params)
      query[queryKey] = term

      return store.query(modelName, query)
    };
  }),

  actions: {
    
    onOpen() {
      this._super(...arguments)
      this._performSearch('')
    }, 
    onTriggerFocus(){
      this._super(...arguments)
      this._performSearch('')
    }
  }
});
