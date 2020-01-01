const config: Config = {
    siteTitle: 'Mudassar Ali',
    siteTitleShort: 'MD',
    siteTitleAlt: 'Mudassar',
    siteLogo: '/logos/logo-1024.png',
    siteUrl: 'https://www.mudassarali.com',
    repo: 'https://github.com/mudassar045/mudassarali.com',
    pathPrefix: '',
    dateFromFormat: '',
    dateFormat: '',
    siteDescription: 'Mudassar Ali is a full-stack Software Developer currently working with JavaScript and Elixir, changing imaginations into reality through code. A bit Open-Sourcer',
    whoAm: 'A full-stack Software Developer & A Bit Open Sourcer',
    homeDescription: 'I love to make Tools and OSS contributions to serve the different communities',
    siteRss: '/rss.xml',
    googleAnalyticsID: '',
    postDefaultCategoryID: 'Tech',
    newsletter: 'https://mudassarali.substack.com',
    newsletterEmbed: 'https://mudassarali.substack.com/embed',
    userName: 'MudassarAli',
    userEmail: 'mudassar.ali@cerp.org.pk',
    userTwitter: 'https://twitter.com/voidwebdev',
    userGitHub: 'https://github.com/mudassar045',
    userStackOverFlow: 'https://stackoverflow.com/mudassar045',
    userLinkedIn: 'https://www.linkedin.com/in/mudassar-ali-045/',
    userFacebook: 'https://web.facebook.com/mudassar045',
    userInstagram: 'https://web.instagram/voidwebdev',
    blog: 'https://voidweb.dev',
    menuLinks: [
      {
        name: 'Home',
        link: '/me/',
      },
      {
        name: 'About',
        link: '/about/',
      },
      {
        name: 'Works',
        link: '/works/',
      },
      {
        name: 'Contact',
        link: '/contact/',
      },
      {
        name: 'Articles',
        link: '/articles/',
      },
    ],
    themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
    backgroundColor: '#ffffff',
  }
  
  // Make sure pathPrefix is empty if not needed
  if (config.pathPrefix === '/') {
    config.pathPrefix = ''
  } else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
  }
  
  // Make sure siteUrl doesn't have an ending forward slash
  if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)
  
  // Make sure siteRss has a starting forward slash
  if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`
  
export default config
  