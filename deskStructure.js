import { MdEvent, MdArticle } from 'react-icons/md';

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .schemaType('homepage')
        .child(
          S.editor()
            .id('homepage')
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.divider(),
      S.listItem()
        .title('Showrooms')
        .child(
          S.list()
            .title('Showrooms')
            .items([
              S.documentTypeListItem('showroom').title('Showrooms'),
              S.listItem()
                .title('All Showrooms Page')
                .schemaType('allShowrooms')
                .child(
                  S.editor()
                    .id('allShowrooms')
                    .schemaType('allShowrooms')
                    .documentId('allShowrooms')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Offerings')
        .child(
          S.list()
            .title('Offerings')
            .items([
              S.documentTypeListItem('offering').title('Offerings'),
              S.listItem()
                .title('All Offerings Page')
                .schemaType('offering')
                .child(
                  S.editor()
                    .id('allOfferings')
                    .schemaType('allOfferings')
                    .documentId('allOfferings')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Events & News')
        .icon(MdEvent)
        .id('eventsNews')  
        .child(
          S.list()
            .title('Blog')
            .id('blogList')  
            .items([
              S.documentTypeListItem('blogPost')
                .title('Blogs')
                .icon(MdArticle)
                .id('blogDocuments'),  
             
            ])
        ),
    ]);
