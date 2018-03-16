module.exports = {
    db: {
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        // SQLite only
        storage: 'data.db'
    },
    vedioPath: "/vedios"
};