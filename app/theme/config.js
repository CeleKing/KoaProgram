module.exports = {
    root: __dirname,
    layout: false,
    viewExt: 'ejs',
    cache: true,
    debug: false,
    filters: require('./helpers/filter'),
    locals: require('./helpers/locals')
}