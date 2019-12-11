require 'csv'

CSV.read('db/fixtures/csv/industries.csv').each do |row|
  unless row[0].include?("name")
    Industry.seed_once do |s|
      "----industries_seed------"
      row[0] = "その他" if row[0] == "すべての業界"
      p s.name = row[0]
    end
  end
end
