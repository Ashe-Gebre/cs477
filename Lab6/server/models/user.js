/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
"use strict";


class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    login() {
        return users.find(user =>  user.username === this.username && user.password === this.password);
    }
}

const users = [new User("Ashe", "Liverpool","Admin"), new User("Love", "Peace", "Member")];

module.exports = User;

