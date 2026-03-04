const renderEvent = async () => {
   const requestedID = parseInt(new URLSearchParams(window.location.search).get('id'))

   const response = await fetch('/music-events')
   const data = await response.json()

   let event

   event = data.find(event => event.id === requestedID)

   if (event) {
      document.getElementById('name').textContent = event.name
      document.getElementById('genre').textContent = event.genre
      document.getElementById('date').textContent = event.date
      document.getElementById('time').textContent = event.time
      document.getElementById('location').textContent = event.location
      document.getElementById('price').textContent = event.price
   } else {
      window.location.replace('/404')
   }
}

renderEvent()