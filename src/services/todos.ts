import {
    username, 
    password,
    db
} from '../config';

class TodosService {
    private static instance: TodosService;
    url: string;
    headers: Headers;
    options: Object;

    private constructor() {
        this.url = `https://${username}.cloudant.com/${db}`;
        this.headers = new Headers(); 
        
        this.headers.append('Authorization', `Basic ${btoa((username+':'+password))}`);    
        this.headers.append('Content-Type', 'application/json');
        this.options = {
            headers: this.headers
        };
    }

    static getInstance() {
        if (!TodosService.instance) {
            TodosService.instance = new TodosService();
        }

        return TodosService.instance;
    }

    getTodos() {        
        return fetch(`${this.url}/_all_docs?include_docs=true`, this.options)
            .then(data => data.json());
    }

    addTodo(todo: any) {
        const options = {
            ...this.options, 
            method: 'POST', 
            body: JSON.stringify(todo),
        };

        return fetch(`${this.url}`, options)
            .then(data => data.json());
    }

    removeTodo(id: string, rev: string) {
        const options = {
            ...this.options,
            method: 'DELETE'
        };

        return fetch(`${this.url}/${id}/?rev=${rev}`, options)
            .then(data => data.json());
    }

    editTodo(id: string, data: any) {
        const options = {
            ...this.options,
            method: 'PUT',
            body: JSON.stringify(data)
        };

        return fetch(`${this.url}/${id}`, options)
            .then(data => data.json());
    } 
}

export default TodosService;
