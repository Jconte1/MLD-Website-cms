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
    ]);