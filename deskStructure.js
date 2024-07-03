export const myStructure = (S) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Pages')
          .child(
            S.list()
              .title('Pages by Category')
              .items([
                S.listItem()
                  .title('Showrooms')
                  .child(
                    S.documentTypeList('page')
                      .title('Showrooms')
                      .filter('_type == "page" && category == "showrooms"')
                  ),
                S.listItem()
                  .title('Offerings')
                  .child(
                    S.documentTypeList('page')
                      .title('Offerings')
                      .filter('_type == "page" && category == "offerings"')
                  ),
                S.listItem()
                  .title('We Are MLD')
                  .child(
                    S.documentTypeList('page')
                      .title('We Are MLD')
                      .filter('_type == "page" && category == "We-Are-MLD"')
                  ),
                S.listItem()
                  .title('News & Events')
                  .child(
                    S.documentTypeList('page')
                      .title('News & Events')
                      .filter('_type == "page" && category == "News-and-Events"')
                  ),
                S.listItem()
                  .title('Home')
                  .child(
                    S.documentTypeList('page')
                      .title('Home')
                      .filter('_type == "page" && category == "Homepage"')
                  ),
              ])
          ),
        // Other list items or singletons
        ...S.documentTypeListItems().filter(
          (listItem) => !['page', 'seo', 'showroom'].includes(listItem.getId())
        ),
      ]);
  