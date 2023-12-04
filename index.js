import { on } from 'socket.io';
const users={};
on('connection',socket=>{
    socket.on('user-joined',name=>{
        users[socket.id]=name;
        socket.broadcast.emit('new-user-joined');
    });
    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message,name:users[socket.id]})
    });
});