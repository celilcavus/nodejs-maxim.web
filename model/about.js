const context = require('../database/data');


class About {
    constructor(title,subtitle){
        this.title = title;
        this.subtitle = subtitle;
    }

    Add(){
        context.execute("INSERT INTO about (title,subtitle) VALUES (?,?)",[this.title,this.subtitle]);
    }
    GetAll(){
        return context.execute("SELECT * FROM about")
    }

    GetById(id){
        return context.execute("SELECT * FROM about WHERE id = ?",[id]);;
    }

    Update(id){
        context.execute("UPDATE about SET title = ? , subtitle = ? WHERE id = ?",[this.title,this.subtitle,id]);
    }
    Delete(id){
        context.execute("DELETE FROM about WHERE id = ? ",[id])
    }
}

module.exports = About;
