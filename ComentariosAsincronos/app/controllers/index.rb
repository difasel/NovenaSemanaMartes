get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  erb :index
end

post '/datos' do

  p comment = params[:comment_send]
  p author = params[:author_send]

  comment_new = Comment.create(comment: comment, author: author)

end