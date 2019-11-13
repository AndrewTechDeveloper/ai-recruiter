json.colleges do
  json.array! @colleges, :name
end
json.faculties do
  json.array! @faculties, :faculty, :level
end

