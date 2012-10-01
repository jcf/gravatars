Avatar.AvatarController = Em.ObjectController.extend
  preventsSubmit: (->
    not @get('isValid')
  ).property('isValid').cacheable()
