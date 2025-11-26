import { MdEvent, MdArticle, MdPeople } from 'react-icons/md'; // Add an icon for Teams page

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .schemaType('homePage')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
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
                .schemaType('allOfferings')
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
                .title('Blog Post')
                .icon(MdArticle)
                .id('blogDocuments'),
              S.listItem()
                .title('All Blogs Page')
                .schemaType('blogPageConfig')
                .child(
                  S.editor()
                    .id('blogPageConfig')
                    .schemaType('blogPageConfig')
                    .documentId('blogPageConfig')
                ),
              S.divider(),
              S.documentTypeListItem('recipe')
                .title('Recipes')
                .icon(MdArticle),
              S.listItem()
                .title('All Recipes Page')
                .schemaType('allRecipes')
                .child(
                  S.editor()
                    .id('allRecipes')
                    .schemaType('allRecipes')
                    .documentId('allRecipes')
                ),
              S.divider(),
              S.listItem()
                .title('Chefs Corner')
                .schemaType('chefscorner')
                .child(
                  S.editor()
                    .id('chefscorner')
                    .schemaType('chefscorner')
                    .documentId('chefscorner')
                ),
              S.divider(),
              S.listItem()
                .title('Demo Calendar')
                .schemaType('event')

                .child(
                  S.documentTypeList('event')
                    .title('Events')

                )
            ])
        ),
      S.divider(),
      // Add the Teams Page list item
      S.listItem()
        .title('We Are MLD')
        .icon(MdPeople)
        .child(
          S.list()
            .title('We Are MLD')
            .items([
              // ✅ Our Team – single "team" document with pageSections
              S.listItem()
                .title('Our Team')
                .schemaType('team')
                .child(
                  S.editor()
                    .id('teamsPage')
                    .schemaType('team')
                    .documentId('teamsPage') // keep this consistent with your team doc ID
                ),

              S.listItem()
                .title('Our Story')
                .child(
                  S.documentTypeList('timelineEvent')
                    .title('Timeline Events')
                ),
              S.listItem()
                .title('MLD Cares')
                .child(
                  S.documentTypeList('mldcares')
                    .title('MLD Cares page')
                ),
              S.listItem()
                .title('Careers')
                // You can change the icon as per your preference
                .child(
                  S.list()
                    .title('Careers')
                    .items([

                      S.listItem()
                        .title('Careers')

                        .schemaType('career')
                        .child(S.documentTypeList('career').title('Job Postings'))
                    ])
                )
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Shop Closeout Page')
        .child(
          S.editor()
            .title('Shop Closeout Page')
            .schemaType('closeout')
            .documentId('closeout')
        ),
      S.divider(),
      S.listItem()
        .title('Contact Us Page')
        .child(
          S.editor()
            .id('contactPage')
            .schemaType('contact')
            .documentId('contactPage')
        ),
      S.divider(),
      S.listItem()
        .title('Catalogue')
        .child(
          S.documentTypeList('productcategory')
            .title('Product Categories')
        )



    ]);