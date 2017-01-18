module.exports = {
    cookie: {
        secret: 'blog admin',
        maxAge: 24*3600*1000
    },
    session: {
        name: 'mitch.blog'
    },
    mongodb: 'mongodb://blog:mitch@localhost/blog'
};