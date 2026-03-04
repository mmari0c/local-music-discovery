const mainContent = document.getElementById('main-content')

const renderEvents = async () => {
   const response = await fetch('/music-events')
   const data = await response.json()

   if (data && data.length > 0) {
      data.map(event => {
         const card = document.createElement('div')
         card.className = 'event-card'
         card.innerHTML = `
            <h2>${event.name}</h2>
            <p>${event.date} at ${event.time}</p>
            <p>${event.location}</p>
            <p>${event.genre}</p>
            <p>$${event.ticket_price}</p>
         `
         mainContent.appendChild(card)
      })
   } else {
      const h2 = document.createElement('h2')
      h2.textContent = 'No music events found.'
      mainContent.appendChild(h2)
   }
}

renderEvents()
