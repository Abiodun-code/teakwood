export const NavUl = [
  {
    name: 'Home',
    path: '',
    subMenu: true,
    subLink: [
      {
        name: 'Home1',
        path: ''
      },
      {
        name: 'Home2',
        path: ''
      },
      {
        name: 'Home3',
        path: ''
      }
    ]
  },
  {
    name: 'About',
    path: 'about',
    subMenu: false,
  },
  {
    name: 'Shop',
    path: 'shop',
    subMenu: true,
    subLink: [
      {
        name: 'Shop',
        path: 'shop'
      },
      {
        name: 'Create Product',
        path: '/create-product'
      }
    ]
  },
  {
    name: 'Blog',
    path: 'blog',
    subMenu: true,
    subLink: [
      {
        name: 'Blog',
        path: 'blog'
      },
      {
        name: 'Create Blog',
        path: 'create-blog'
      }
    ]
  },
  {
    name: 'Contact',
    path: 'contact'
  }
]