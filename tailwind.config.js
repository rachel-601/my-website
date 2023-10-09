/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page-bg': "url('https://i.postimg.cc/fyRY79Rp/IMG-3999.jpg')"
      },
      icon: {
        'menu-icon': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Fmenu-icons%2Fmenu-icon&psig=AOvVaw3U9knnTB4-vcLTmqZqpLul&ust=1693685590593000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIiU4tGcioEDFQAAAAAdAAAAABAE')"
      }
    }
  }
}
