import{EventEmitter} from "node:events";
const task = new EventEmitter ();

const sayHi = (name) =>{
    console.log(`Logged By ${name}`);
};
const starts = ()=> {
    cosole.log("System started");
};

task.on("greet",sayHi);//Event and Method binding
task.on("greet",(name)=>{
    console.log(`${name} starts shopping`);
});
task.on("greet",(name)=>{
    console.log(`${name} logged out`);
});
task.emit("greet","Ajay");//Announcement
task.emit("greet","Anil Pandey");