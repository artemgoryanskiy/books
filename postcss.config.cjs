module.exports = {
    plugins: {
        'postcss-preset-env': {
            'browsers': 'last 2 versions',
        },
        'cssnano': {
            preset: 'default'
        },
        'autoprefixer': {
            grid: true
        }
    }
}