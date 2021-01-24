export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600d111bbd7fe400027ec70d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4biigvq7',
                  apiId: 'c4780ffb-9c6f-4e06-a55a-4e0a879f396a'
                },
                {
                  buildHookId: '600d111b107a941e7333ed8a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-psfaj76y',
                  apiId: '09aa88cb-8719-4959-9a25-25836dc723d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wysher/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-psfaj76y.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
