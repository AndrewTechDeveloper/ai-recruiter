json.jobs do
  json.array! @jobs.each do |job|
    json.id(job.id)
    json.name(job.name)
    json.logo(job.logo)
    json.link(job.link)
    json.total_rate(job.total_rate)
    json.review_nums(job.review_nums)
    json.working_hours(job.working_hours)
    json.consume_day_off(job.consume_day_off)
    json.satisfaction(job.satisfaction)
    json.motivation(job.motivation)
    json.transparency(job.transparency)
    json.respectable(job.transparency)
    json.growable(job.growable)
    json.mentorship(job.mentorship)
    json.compliance(job.compliance)
    json.fairness(job.fairness)
  end
end
