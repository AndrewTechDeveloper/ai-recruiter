Rails.application.configure do
  config.cache_classes = true
  config.eager_load = true
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true
  config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present?
  config.active_storage.service = :local
  config.log_level = :error
  config.log_tags = [ :request_id ]
  config.action_mailer.perform_caching = false
  config.i18n.fallbacks = true
  config.active_support.deprecation = :notify
  config.log_formatter = ::Logger::Formatter.new
  config.force_ssl = true
  config.require_master_key = true

  if ENV["RAILS_LOG_TO_STDOUT"].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end

  config.active_record.dump_schema_after_migration = false
  config.action_mailer.default_url_options = { host: 'konpeki.site' }
  ActionMailer::Base.delivery_method = :smtp
  config.action_mailer.delivery_method = :smtp
  ActionMailer::Base.smtp_settings = {
    address: 'email-smtp.us-east-1.amazonaws.com',
    domain: 'no-reply@konpeki.site',
    port: 587,
    user_name: ENV['SES_USER_NAME'],
    password: ENV['SES_PASSWORD'],
    authetication: :login,
    enable_starttls_auto: true,
  }
end
