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
              S.listItem()
                .title('Salt Lake Showroom')
                .schemaType('slcShowroom')  // Ensure this matches the schema name
                .child(
                  S.editor()
                    .id('saltLakeShowroom')
                    .schemaType('slcShowroom')  // Ensure this matches the schema name
                    .documentId('saltLakeShowroom')
                ),
              S.listItem()
                .title('Boise Showroom')
                .schemaType('boiseShowroom')
                .child(
                  S.editor()
                    .id('boiseShowroom')
                    .schemaType('boiseShowroom')
                    .documentId('boiseShowroom')
                ),
              S.listItem()
                .title('Jackson Hole Showroom')
                .schemaType('jacksonShowroom')
                .child(
                  S.editor()
                    .id('jacksonShowroom')
                    .schemaType('jacksonShowroom')
                    .documentId('jacksonShowroom')
                ),
              S.listItem()
                .title('Ketchum Showroom')
                .schemaType('ketchumShowroom')
                .child(
                  S.editor()
                    .id('ketchumShowroom')
                    .schemaType('ketchumShowroom')
                    .documentId('ketchumShowroom')
                ),
              S.listItem()
                .title('Provo Showroom')
                .schemaType('provoShowroom')
                .child(
                  S.editor()
                    .id('provoShowroom')
                    .schemaType('provoShowroom')
                    .documentId('provoShowroom')
                ),
              S.listItem()
                .title('All Showrooms')
                .schemaType('allShowrooms')
                .child(
                  S.editor()
                    .id('allShowrooms')
                    .schemaType('allShowrooms')
                    .documentId('allShowrooms')
                )
            ])
        )
    ]);
