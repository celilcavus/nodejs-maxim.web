const context = require('../database/data');


class About {
    constructor(title,subtitle){
        this.title = title;
        this.subtitle = subtitle;
    }

    Add(){
        return context.execute("INSERT INTO about (title,subtitle) VALUES (?,?)",[this.title,this.subtitle]);
    }
    GetAll(){
        return context.execute("SELECT * FROM about")
    }

    GetById(id){
        return context.execute("SELECT * FROM about WHERE id = ?",[id]);;
    }

    Update(id){
        return context.execute("UPDATE about SET title = ? , subtitle = ? WHERE id = ?",[this.title,this.subtitle,id]);
    }
    Delete(id){
        return context.execute("DELETE FROM about WHERE id = ? ",[id])
    }
}

module.exports = About;
