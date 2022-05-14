module.exports = {
    hooks: {
        "pre-commit": "npm run prettier && npm run test && npm run build",
    },
};
