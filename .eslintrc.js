module.exports = {
  extends: [
    // ... your other extends
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
