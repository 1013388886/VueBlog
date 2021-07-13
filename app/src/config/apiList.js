export default {
    'login': {
      url: '/login',
      method: 'post',
      setToken: true,
      rsaKey: 'password',
    },
    'register': {
      url: '/register',
      method: 'post',
      rsaKey: 'password',
      setToken: true,
    },
    'getArticle': {
      url: '/getArticle',
      method: 'get',
    },
    'getArticleID': {
      url: '/getArticleID',
      method: 'get',
    },
    'getComment': {
      url: '/getComment',
      method: 'get',
    },
    'publishComment': {
      url: '/publishComment',
      method: 'post',
    },
    'commitEdit': {
      url: '/commitEdit',
      method: 'post',
    },
    'getColumn': {
      url: '/getColumn',
      method: 'get',
    },
    'getColumnArticle': {
      url: '/getColumnArticle',
      method: 'get',
    },
    'cover': {
      url: '/cover',
      method: "post",
    },
    'getUserInfo': {
      url: '/getUserInfo',
      method: "get",
    },
    'PostUserinfo':{
      url: '/PostUserinfo',
      method: "post",
    },
    'postLikes':{
      url: '/postLikes',
      method: "post",
    }
  }