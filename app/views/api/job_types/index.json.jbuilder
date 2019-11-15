json.job_types do
  json.array! @job_types.each do |type|
    json.name(type.name)
  end
end
