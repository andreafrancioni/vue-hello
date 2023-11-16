const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'Benvenuto, ',
            nome: "",
            cognome: "",
            immagine: "https://placehold.co/600x400",
        }
    }
};

createApp(opzioni).mount('#app')