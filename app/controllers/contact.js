import Controller from '@ember/controller';

export default Controller.extend({

    contatactEmail: '',
    contatactMessage: '',

    isValidEmail: Ember.computed.match('contactEmail', /^.+@.+\..+$/),
    isValidMessage: Ember.computed.gte('contactMessage.length', 10),

    isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        sendMessage() {
            alert(`A seguinte mensagem está sendo enviada: ${this.get('contactMessage')}\nPara o email: ${this.get('contactEmail')}`);
            this.set('responseMessage', 'Obrigado! Reponderemos sua mensagem em breve.');
            this.set('contactEmail', '');
            this.set('contactMessage', '');
        }
    }
});
