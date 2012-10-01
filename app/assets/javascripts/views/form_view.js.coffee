Avatar.FormView = Em.View.extend
  tagName: 'form'

  submit: (e) ->
    unless @get('controller.preventsSubmit')
      Avatar.get('router').send('sendRequest', @get('controller.content'))

    false
