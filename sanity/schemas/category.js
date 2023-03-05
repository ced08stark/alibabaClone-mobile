export default {
  name: 'category',
  type: 'document',
  title: 'category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
}
