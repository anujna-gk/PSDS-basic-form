module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
            stage: 4,
            browsers: ['Last 2 versions', 'IE >= 11']
        },
        'postcss-custom-media': {},
        'postcss-flexbugs-fixes': {}
    }
}
