require 'csv'

College.seed_once do |s|
  "----job_school_seed------"
  p s.level = 0
  p s.name = "その他"
  p s.faculty = ""
end
College.seed_once do |s|
  "----job_school_seed------"
  p s.level = 0
  p s.name = "高卒"
  p s.faculty = ""
end
CSV.read('db/fixtures/csv/colleges.csv').each do |row|
  unless row[0].include?("level")
    College.seed_once do |s|
      "----job_school_seed------"
      p s.level = row[0]
      p s.name = row[1].sub(/\(.*/m,'')
      p s.faculty = row[1].match(/\((.*)/)[0].sub('(','').sub(')','') if row[1].match(/\((.*)/).present?
    end
  end
end

