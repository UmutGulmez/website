export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).only(['path']).fetch()

  return files.map((file) =>
    file.path === '/index' ? '/' : '/blog/' + file.path.split('/')[2]
  )
}
