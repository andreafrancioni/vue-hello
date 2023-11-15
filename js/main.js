const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'Benvenuto, ',
            nome: "",
            cognome: "",
        }
    }
};

createApp(opzioni).mount('#app')