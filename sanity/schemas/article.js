export default {
  name: 'article',
  type: 'document',
  title: 'article',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'article name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description of article',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of article',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'quantity of article',
    },
    {
      name: 'price',
      type: 'number',
      title: 'price of article',
    },
    {
      name: 'createdAt',
      type: 'date',
      title: 'date publication of article',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter rating from article (1-5 Stars)',
      validation: (Rule) => {
        Rule.required().min(1).max(5).error('please enter a valid number between 1 and 5')
      },
    },
    {
      name: 'type',
      title: 'category of article',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
