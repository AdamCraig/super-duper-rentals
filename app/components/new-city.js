import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    saveCity() {
      var params = {
        name: this.get('name') ? this.get('name') : null,
        country: this.get('country') ? this.get('country') : null
      };
      if ((params.name !== null) && (params.country !== null)) {
        this.set('addNewRental', false);
        this.sendAction('saveCity', params);
      }
    }
  }
});
