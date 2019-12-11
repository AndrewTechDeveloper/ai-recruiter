require 'csv'

CSV.read('db/fixtures/csv/jobs.csv').each do |row|
  unless row[0].include?("name")
    Job.seed_once do |s|
      "----jobs_seed------"
      p s.name = row[0]
    end
  end
end
