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
                  buildHookId: '5e2bf1e87eb7a25ddd0543a2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wz91jn5k',
                  apiId: 'b37a7db0-87c1-45d3-a368-e1cc5114e72d'
                },
                {
                  buildHookId: '5e2bf1e822392d6481b27c90',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mdo3jd3m',
                  apiId: '0e0d6745-0615-4d19-baf7-b66174174926'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlamb6/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mdo3jd3m.netlify.com', category: 'apps' }
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
