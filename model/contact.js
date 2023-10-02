const context = require('../database/data');

class Contact {
    constructor(name,email,subject,message){
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }


    Add = () => {
        return context.execute("INSERT INTO contact (name,email,subject,message) VALUES (?,?,?,?)",[this.name,this.email,this.subject,this.message]);
    }
    GetById = (id) =>{
        return context.execute("SELECT * FROM contact WHERE id = ?",[id]);
    }
    GetAll = () =>{
        return context.execute("SELECT * FROM contact");
    }
    Update = (id)=>{
        return context.execute("UPDATE contact SET name = ? , email = ? , subject = ? , message = ? WHERE id = ?",[this.name,this.email,this.subject,this.message,id]);
    }
    Delete = (id)=>{
        return  context.execute("DELETE FROM contact WHERE id = ?",[id]);
    }
}


module.exports = Contact;