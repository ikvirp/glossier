export default {
  name: '',
  type: 'document',
  title: 'Category Promo',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'categoryImage',
      type: 'image',
      title: 'Category image',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Category slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'button',
      type: 'string',
      title: 'Button',
    },
  ],
}
