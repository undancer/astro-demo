export async function get({ params, request }) {
  return {
    body: JSON.stringify({
      short_name: '',
      name: '',
      icons: [{
        src: 'icon.png',
        type: 'image/png',
        sizes: '192x192',
      }],
      start_url: '/?utm_source=homescreen',
      background_color: '#fafafa',
      theme_color: '#fafafa',
    }),
  }
}
