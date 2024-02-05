export default {
  name: 'heroImage',
  type: 'document',
  title: 'Hero Image',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Desktop Image',
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Mobile Image',
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
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'button',
      type: 'string',
      title: 'Button',
    },
  ],
}
