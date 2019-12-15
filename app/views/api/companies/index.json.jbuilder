json.companies do
  json.array! @companies.each do |company|
    json.id(company.id)
    json.name(company.name)
    json.logo(company.logo)
    json.link(company.link)
    json.total_rate(company.total_rate)
    json.industry(company.industry.name)
    json.review_nums(company.review_nums)
    json.working_hours(company.working_hours)
    json.consume_day_off(company.consume_day_off)
    json.satisfaction(company.satisfaction)
    json.motivation(company.motivation)
    json.transparency(company.transparency)
    json.respectable(company.transparency)
    json.growable(company.growable)
    json.mentorship(company.mentorship)
    json.compliance(company.compliance)
    json.fairness(company.fairness)
  end
end
