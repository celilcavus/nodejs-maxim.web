var context = require('../database/data');


class Testimonial{
    constructor(fullname,title,image,description){
        this.fullname = fullname;
        this.title = title,
        this.image = image;
        this.description = description;
    }

    Add = ()=>{
        return context.execute("INSERT INTO testimonial (fullname,title,image,description) VALUES (?,?,?,?)",[this.fullname,this.title,this.image,this.description]);
    }

    GetById = (id)=>{
        return context.execute("SELECT * FROM testimonial WHERE id =?",[id]);
    }
    GetAll= ()=>{
        return context.execute("SELECT * FROM testimonial");
    }
    Update = (id)=>{
        return context.execute("UPDATE testimonial SET fullname = ? , title = ? , image = ? , description = ? WHERE id = ? ",[this.fullname,this.title,this.image,this.description,id]);
    }

    Delete = (id)=>{
        return context.execute("DELETE FROM testimonial WHERE id = ?",[id]);
    }
}


module.exports = Testimonial;