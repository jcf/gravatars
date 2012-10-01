Avatar.Avatar = Em.Object.extend
  email: ''

  md5: (->
    md5 @get('email').toLowerCase().trim()
  ).property('email').cacheable()

  url: (->
    "http://www.gravatar.com/avatar/#{@get('md5')}"
  ).property('md5').cacheable()

  urlPng: (->
    "#{@get('url')}.png"
  ).property('url').cacheable()

  urlJpg: (->
    "#{@get('url')}.jpg"
  ).property('url').cacheable()

  isValid: (->
    /^\S+@\S+\.\S+$/.test @get('email')
  ).property('email').cacheable()
