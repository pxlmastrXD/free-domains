addSubDomain({
  description: '...', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'evanwiety', // desired subdomain name
  owner: {
    repo: 'https://github.com/pxlmastrXD/evan-website',
    email: 'calebwietholter9@outlook.com',
  },
  record: {
    CNAME: 'pxlmastrXD.github.io/evan-website', // e.g.: <your-github-account>.github.io
  },
})