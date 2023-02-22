const db = require('../utility/database');

exports.getContents = (req, res) => {
    db.query('SELECT * FROM contents', (err, result) => {
        err && console.log(err);
        res.send({
            result
        })
    })
}

exports.postContent = (req, res) => {
    const { title, content, name } = req.body.content;
    db.query('INSERT INTO contents(title,content,name) VALUES(?,?,?)', [title, content, name], (err, result) => {
        err && console.log(err);
        res.send({
            result
        })
    })
}

exports.getContentById = (req, res) => {
    const { contentId } = req.params;
    db.query('SELECT * FROM contents where contents.id=?', [contentId], (err, result) => {
        err && console.log(err);
        const content = result[0];
        res.send({
            content
        })
    })
}

exports.updateContent = (req, res) => {
    const { contentId } = req.params;
    const { title, content, name } = req.body;
    db.query('UPDATE contents set contents.title=?,contents.content=?,contents.name=? where contents.id=?', [title, content, name, contentId], (err, result) => {
        err && console.log(err);
        res.send({
            message: 'updated !'
        })
    })
}

exports.deleteContent = (req, res) => {
    const { contentId } = req.params;
    db.query('DELETE FROM contents where contents.id=?', [contentId], (err, result) => {
        err && console.log(err);
        res.send({
            message: 'content deleted !'
        })
    })
}

exports.getCommentsByContentId = (req, res) => {
    const { contentId } = req.params;
    db.query('SELECT * FROM comments where comments.contentId=?', [contentId], (err, result) => {
        err && console.log(err);
        res.send({
            result
        })
    })
}

exports.addComment = (req, res) => {
    const { contentId } = req.params;
    const { name, comment } = req.body;
    db.query('INSERT INTO comments(name,contentId,comment) VALUES(?,?,?)', [name, contentId, comment], (err, result) => {
        err && console.log(err);
        res.send({
            message: 'comment uploaded !'
        })
    })
}