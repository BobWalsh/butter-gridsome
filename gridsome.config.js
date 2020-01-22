// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'Description of this gridsome site',

  plugins: [{
    use: "gridsome-source-buttercms",
    options: {
      authToken: '<Your AuthToken>'
      collections: [''],
      pages: '',
      pageTypes: ''
    }
  }
  ]
}
