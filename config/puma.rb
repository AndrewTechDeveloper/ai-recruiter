threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
threads threads_count, threads_count
port        ENV.fetch("PORT") { 3000 }
environment ENV.fetch("RAILS_ENV") { "development" }
plugin :tmp_restart
if Rails.env.production?
  daemonize ENV.fetch("DAEMONIZE") { true } if Rails.env.production?
  bind "unix://#{Rails.root}/tmp/sockets/puma.sock"
end
