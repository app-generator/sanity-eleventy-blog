export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60bf14ce56e232e55db0799b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-nzz7b5ce',
                  apiId: '8c9649e7-5c57-4274-8721-a0028644e629'
                },
                {
                  buildHookId: '60bf14ce248bac0623f53c56',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-2zppvetn',
                  apiId: 'c766100d-c728-4a18-8076-634169023cd5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/app-generator/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-2zppvetn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
