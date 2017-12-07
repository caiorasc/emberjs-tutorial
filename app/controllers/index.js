import Controller from '@ember/controller';

export default Controller.extend({

  isDisabled: true,

  emailAddress: '',
  
    actualEmailAddress: Ember.computed('emailAddress', function() {
      console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    }),
  
    emailAddressChanged: Ember.observer('emailAddress', function() {
      console.log('observer is called', this.get('emailAddress'));
    }),

  nome: '',

    actualNome: Ember.computed('nome', function(){
      console.log('actualName function is called: ', this.get('name'));
    }),

    nomeChanged: Ember.observer('nome', function(){
      console.log('observer is called', this.get('nome'));
    })

});