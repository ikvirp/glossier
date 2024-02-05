export default {
  name: 'logo',
  type: 'document',
  title: 'Logo',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Logo slug',
      options: {
        source: 'name',
      },
    },
  ],
}
