const context = require('../database/data');

class Services {
    constructor(title = "", icon = "", description = "", id = 0) {
        this.title = title;
        this.icon = icon;
        this.description = description;
    }

    Add = () => {
        return context.execute("INSERT INTO services (title,icon,description) VALUES (?,?,?)", [this.title, this.icon, this.description])
    }

    GetAll = () => {
        return context.execute("SELECT * FROM services");
    }
    GetById = (id) => {
        return context.execute("SELECT * FROM services WHERE id = ?", [id])
    }

    Update = (id) => {
        return context.execute("UPDATE services SET  title = ? , icon = ? , description = ? WHERE id = ?", [this.title, this.icon, this.description, id])
    }
    Delete = (id) => {
        return context.execute("DELETE FROM services WHERE id = ?", [id]);
    }
}

module.exports = Services;