require 'csv'

def company_job_converter(t)
  if t.include?('営業') or t.include?('リテール') or t.include?('小売') or t.include?("販売")
    Job.find_by(name: "営業/販売").id
  elsif t.include?('エンジニア') or t.include?('SE') or t.include?("設計")
    Job.find_by(name: "エンジニア/SE").id
  elsif t.include?('研究') or t.include?("開発") or t.include?("技術") or t.include?("テクノロジー")
    Job.find_by(name: "研究開発/技術").id
  elsif t.include?('コンサル') or t.include?("戦略")
    Job.find_by(name: "コンサルタント").id
  elsif t.include?('マーケティング')
    Job.find_by(name: "マーケティング").id
  elsif t.include?('企画')
    Job.find_by(name: "企画").id
  elsif t.include?('アナリスト')
    Job.find_by(name: "アナリスト").id
  elsif t.include?('投資銀行')
    Job.find_by(name: "投資銀行").id
  elsif t.include?('金融')
    Job.find_by(name: "金融").id
  elsif t.include?('会計士')
    Job.find_by(name: "会計士").id
  elsif t.include?('アドバイザー')
    Job.find_by(name: "アドバイザー").id
  elsif t.include?('人事')
    Job.find_by(name: "人事").id
  elsif t.include?('総合職') or t.include?("一般職") or t.include?("事務")
    Job.find_by(name: "総合職/一般職").id
  elsif t.include?('監査')
    Job.find_by(name: "監査").id
  elsif t.include?('マネージャー') or t.include?("管理")
    Job.find_by(name: "マネージャー").id
  elsif t.include?('アソシエイト')
    Job.find_by(name: "アソシエイト").id
  elsif t.include?('MR')
    Job.find_by(name: "MR(医薬情報担当者)").id
  else
    Job.find_by(name: "その他").id
  end
end
def company_job_seed(job,i)
  t = job.sub(/：.*/m,'').strip
  number = job.tr('０-９ａ-ｚＡ-Ｚ', '0-9a-zA-Z').delete("^0-9").to_i
  CompanyJob.seed_once do |s|
    "----company job seed----"
    if company_job_converter(t) != 0
      s.company_id = i
      s.job_id = company_job_converter(t)
      s.number = number
    end
  end
end

CSV.read('db/fixtures/csv/companies.csv').each_with_index do |row,i|
  if row[0].include?("https")
    Company.seed_once do |s|
      "----companies_seed------"
      s.id = i
      s.logo = row[0]
      s.name = row[1]
      s.link = row[2]
      s.total_rate = row[3].to_f
      s.industry_id = Industry.find_by(name: row[4].gsub('業界','').strip).id
      s.review_nums = row[5].to_i
      s.working_hours = row[6].to_f
      s.consume_day_off = row[7].to_f
      row[8] = row[8].gsub!('[','').gsub(']','').gsub("'",'').gsub(/"/,'|').split(',')
      row[8].each do |job|
        company_job_seed(job,i)
      end
      row[9] = row[9].gsub!('[','').gsub(']','').gsub("'",'').gsub(/"/,'|').split(',')
      s.fairness = row[9][0].to_f
      s.compliance = row[9][1].to_f
      s.mentorship = row[9][2].to_f
      s.growable = row[9][3].to_f
      s.respectable = row[9][4].to_f
      s.transparency = row[9][5].to_f
      s.motivation = row[9][6].to_f
      s.satisfaction = row[9][7].to_f
    end
  end
end
