// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

const app = new Vue ({
    el: '#app',
    data: {
        showTodo: true,
        newTodo:'', 
        todoList:[
            {
                text: 'Fare la lavatrice',
                done: 'true',
            },

            {
                text: 'Fare la spesa',
                done: 'false',
            },

            {
                text: 'Andare a correre',
                done: 'true',
            },

            {
                text: 'Lavare la macchina',
                done: 'false',
            },
        ],

    },

    methods: {
        // funzione in cui se nell'input html (nel js colegato a newTodo) viene scritto qualcosa allora pusho quello che viene scritto (la stringa) dentro all'array todoList
        addTodo: function () {
            console.log(this.newTodo)

            if(this.newTodo){ //è la stessa cosa di scrivere this.newTodo !== ''
                console.log('la stringa non è vuota')

                // nell'array di oggetti todoList devo aggiungere un nuovo oggetto che come proprietà ha:
                // text che è la nuova stringa inserita(quindi newTodo) e la proprietà done con false
                let newObject = {
                    text: this.newTodo,
                    done: 'false',
                }

                this.todoList.push(newObject);
                console.log(this.todoList);

                // quando è stata inserita una nuova todo l'input text torna vuoto
                this.newTodo = '';

            }else{
                console.log('la stringa è vuota');
            }
        },

        //se clicco sull'icona x il todo che è in quella posizione viene rimosso
        removeTodo: function(objectPosition) {
            console.log(objectPosition),
            this.todoList.splice(objectPosition, 1);
        },

        // cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
        doneOrNot: function (index) {
            // quando clicco sul todo devo prendere la properietà done dell'oggetto nella posizione corrispondente
            if(this.todoList[index].done === 'false'){
                this.todoList[index].done = 'true';

            } else {
                this.todoList[index].done = 'false';
            }
        },

        //se done è true, quindi se il to do è già stato fatto, assegno la classe che barra il testo
        alreadyDone: function (element) {
            if(element === 'true'){
                return 'strikethrough';
            }
        },
        //se done è true, quindi se il to do è già stato fatto, la checkbox viene spuntata
        checked: function (element) {
            if(element === 'true'){
                return 'isVisible';
            }
        },
    },

    
})