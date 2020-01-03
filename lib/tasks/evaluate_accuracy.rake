namespace :evaluate_accuracy do
  desc "evaluate random"
  task :random => :environment do
    applicants = Applicant.all
    accuracy = []
    applicants.each do |applicant|
      precision = []
      applicant.applicant_companies.each.with_index(1) do |ac, idx|
        precision << idx / ac.company_rank
      end
      accuracy << precision.sum / precision.size.to_f
      p '----accuracy rate----'
      p accuracy.sum / accuracy.size.to_f
    end
    pp mean_average_precision = accuracy.sum / accuracy.size.to_f
  end

  desc "evaluate ahp"
  task :ahp => :environment do
    def AHP(companies, applicant)
      hash_array = []
      companies.each do |company|
        wor = company.working_hours * applicant.working_hours.to_f
        cor = company.consume_day_off * applicant.consume_day_off.to_f
        sat = company.satisfaction * applicant.satisfaction.to_f
        mot = company.motivation * applicant.motivation.to_f
        tra = company.transparency * applicant.transparency.to_f
        res = company.respectable * applicant.respectable.to_f
        gro = company.growable * applicant.growable.to_f
        men = company.mentorship * applicant.mentorship.to_f
        com = company.compliance * applicant.compliance.to_f
        fai = company.fairness * applicant.fairness.to_f
        evaluation = wor + cor + sat + mot + tra + res + gro + men + com + fai
        hash = {:id => company.id, :name => company.name, :evaluation => evaluation}
        hash_array << hash
      end
      hash_array.sort_by!{ |k| k[:evaluation] }.reverse!
      return hash_array.map{|v| v[:id]}
    end

    applicants = Applicant.all
    accuracy = []
    applicants.each do |applicant|
      companies = Company
        .joins(:company_jobs)
        .where(industry_id: applicant.applicant_industries.pluck(:industry_id),
               company_jobs: {job_id: applicant.applicant_jobs.pluck(:job_id)})
        .distinct
      ahp = AHP(companies, applicant)
      ranks = applicant
        .applicant_companies
        .map{|ac| ahp.index(ahp.select{|s| s == ac.company_id}.join.to_i) + 1}
        .sort
      precision = []
      ranks.each.with_index(1) do |rank, idx|
        precision << idx / rank.to_f
      end
      accuracy << precision.sum / precision.size.to_f
      p '----accuracy rate----'
      p accuracy.sum / accuracy.size.to_f
    end
    pp mean_average_precision = accuracy.sum / accuracy.size.to_f
  end
end
