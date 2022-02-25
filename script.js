const app = new Vue ({
    el: '#app',
    data: {
        newTodo:'', 
        todoList:[],
    },

    methods: {
        // funzione in cui se nell'input html (nel js colegato a newTodo) viene scritto qualcosa allora pusho quello che viene scritto (la stringa) dentro all'array todoList
        addTodo: function () {
            console.log(this.newTodo)

            if(this.newTodo){ //è la stessa cosa di scrivere this.newTodo !== ''
                console.log('la stringa non è vuota')
                this.todoList.push(this.newTodo)
            }else{
                console.log('la stringa è vuota');
            }
        }
    },
})