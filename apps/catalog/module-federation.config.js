const moduleFederationConfig = {
  name: 'catalog',
  remotes: ['recommendations'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
