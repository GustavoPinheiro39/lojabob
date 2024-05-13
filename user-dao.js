const connection = require('./database');

function getAllUsers(callback) {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

function getUserById(id, callback) {
  connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results[0]);
    }
  });
}

function addUser(user, callback) {
  connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.insertId);
    }
  });
}

function updateUser(id, user, callback) {
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.affectedRows);
    }
  });
}

function deleteUser(id, callback) {
  connection.query('DELETE FROM users WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.affectedRows);
    }
  });
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};