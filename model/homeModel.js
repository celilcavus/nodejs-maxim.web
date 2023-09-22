var context = require('../database/data');

class HomeModel {
    
    constructor(title, subtitle) {
        this.title = title;
        this.subtitle = subtitle;
    }

    Add() {
        return context.execute("INSERT INTO home (title,subtitle) values(?,?)", [this.title, this.subtitle]);
    }
    Update(id) {
        return context.execute("UPDATE home SET title = ?,subtitle = ? WHERE id = ?", [this.title, this.subtitle, id]);
    }
    Delete(id) {
        return context.execute("DELETE FROM home WHERE id = ?", [id]);
    }
    GetById(id) {
        return context.execute("SELECT * FROM home WHERE id = ?", [id]);
    }
    GetAll() {
        return context.query("SELECT * FROM home");
    }
}

module.exports = HomeModel