Avatar::Application.routes.draw do
  get '*path' => 'assets#index'
  root to: 'assets#index'
end
