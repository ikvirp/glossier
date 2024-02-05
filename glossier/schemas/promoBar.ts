export default {
  name: 'promoBar',
  type: 'document',
  title: 'Promo Bar',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of PromoBar',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Hero slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'Text',
      type: 'text',
      title: 'Description',
    },
  ],
}
