export async function getAllEvents() {
  const response = await fetch(
    "https://meetups-react-4fcfb-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  console.log(events);

  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  let filteredEvents = events.filter((e) => {
    const date = new Date(e.date);
    return date.getFullYear() === year && date.getMonth() === month - 1;
  });

  return filteredEvents;
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.filter((event) => event.id === id)[0];
}
