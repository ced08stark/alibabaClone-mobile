export default {
  name: 'tendance',
  type: 'document',
  title: 'tendance of article',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'tendance name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'articles',
      type: 'array',
      title: 'articles',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
  ],
}
