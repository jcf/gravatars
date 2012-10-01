Avatar.Router = Ember.Router.extend({
  location: 'history',
  enableLogging: true,

  root: Ember.Route.extend({
    sendRequest: function(router, avatar) {
      router.transitionTo('avatars.show', avatar);
    },

    removeAvatar: function (router) {
      router.transitionTo('root.index')
    },

    index: Ember.Route.extend({
      route: '/',

      connectOutlets: function(router) {
        var avatar = Avatar.Avatar.create()
        router.get('applicationController').connectOutlet('avatars', avatar);
      }
    }),

    avatars: Em.Route.extend({
      route: '/email',

      connectOutlets: function(router) {
        var avatar = Avatar.Avatar.create()
        router.get('applicationController').connectOutlet('avatars', avatar);
      },

      show: Ember.Route.extend({
        route: '/:email',

        deserialize: function(router, params) {
          return Avatar.Avatar.create({email: params.email});
        },

        connectOutlets: function(router, avatar) {
          var newAvatar = Avatar.Avatar.create({email: avatar.get('email')})

          router.set('avatarsController.content', newAvatar);
          router.get('avatarsController').connectOutlet('avatar', avatar);
        }
      })
    })
  })
});
