require 'csv'

CSV.read('db/fixtures/csv/occupations.csv').each do |row|
  unless row[0].include?("name")
    Occupation.seed_once do |s|
      "----occupation_seed------"
      p s.name = row[0]
      p s.about = row[1]
    end
  end
end
