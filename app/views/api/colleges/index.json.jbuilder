json.colleges do
  json.array! @colleges, :id, :name
end
json.faculties do
  json.array! @faculties, :id, :faculty, :level
end
