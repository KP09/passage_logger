puts "Destroying previous passages"
Passage.destroy_all

puts "Seeding new passages..."
10.times do
  Passage.create!({
    departure_port: "Some departure port #{counter}",
    arrival_port: "Some arrival port",
    departure_date: Date.today-100,
    arrival_date: Date.today-90,
    description: "A really awesome passage. We left from here and arrived there. The weather was rough.",
    miles: 150,
    hours: 20,
    night_hours: 10,
    role: "Crew",
    overnight: true,
    tidal: true,
    ocean_passage: true,
    user_id: 1
  })
end
puts "Finished seeding passages"
