import {EventEmitter} from 'events'

let e = new EventEmitter()

e.on("message", function(text:string){
    console.log('message:', text);
})

e.emit('message', '11')