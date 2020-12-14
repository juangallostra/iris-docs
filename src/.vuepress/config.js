const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Iris Technical Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Setup',
        link: '/setup/'
      },
      {
        text: 'Miscelaneous',
        link: '/miscelaneous/'
      }
      // {
      //   text: 'Legacy',
      //   link: '/legacy/'
      // }
    ],
    sidebar: {
      '/setup/': [
        {
          title: 'Setup',
          collapsable: false,
          children: [
            '',
            'iris_environment_setup',
            'module_generator_setup',
          ]
        }
      ],
      '/miscelaneous/': [
        {
          title: 'Miscelaneous',
          collapsable: false,
          children: [
            '',
            'graphql_client_update',
            'technologies'
          ]
        }
      ],
      // '/legacy/': [
      //   {
      //     title: 'Legacy Docs',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'demo-jg-smart-platform',
      //       'jgsmart-demo-setup',
      //     ]
      //   }
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
