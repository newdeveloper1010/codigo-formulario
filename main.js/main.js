jQuery.validator.addMethod("cpf", function(value, element) {
    return this.optional(element) || /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(value);
}, "Por favor, digite um CPF válido.");

jQuery.validator.addMethod("cep", function(value, element) {
    return this.optional(element) || /^[0-9]{5}-[0-9]{3}$/.test(value);
}, "Por favor, digite um CEP válido.");

jQuery("#formulario").validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        cpf: {
            required: true,
            cpf: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true,
            cep: true
        }
    },
    messages: {
        nome: "Por favor, digite seu nome completo.",
        email: "Por favor, digite um endereço de e-mail válido.",
        cpf: "Por favor, digite um CPF válido.",
        endereco: "Por favor, digite seu endereço completo.",
        cep: "Por favor, digite um CEP válido."
    }
});
