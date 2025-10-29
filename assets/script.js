// js interactions: menu, lightbox (if you add images), forms, WhatsApp
document.addEventListener('DOMContentLoaded', function() {
  // set copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  var menuBtn = document.getElementById('menu-btn');
  var nav = document.getElementById('nav');
  if (menuBtn) {
    menuBtn.addEventListener('click', function(){
      nav.classList.toggle('show');
    });
  }

  // Lightbox (works if you add <img class="lightbox"> in gallery)
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbClose = document.getElementById('lb-close');
  document.querySelectorAll('.lightbox').forEach(function(img){
    img.addEventListener('click', function(){
      lbImg.src = this.src;
      lb.classList.add('show');
      lb.setAttribute('aria-hidden','false');
    });
  });
  if (lbClose) {
    lbClose.addEventListener('click', function(){ lb.classList.remove('show'); lb.setAttribute('aria-hidden','true');});
  }
  if (lb) {
    lb.addEventListener('click', function(e){ if(e.target === lb) { lb.classList.remove('show'); lb.setAttribute('aria-hidden','true'); } });
  }

  // WhatsApp helper number (India) — no + or dashes
  var waNumber = '916296229505';
  function sendWhatsAppText(text){
    window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text), '_blank');
  }

  // Book buttons (service cards)
  document.querySelectorAll('.book-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var service = this.dataset.service || 'Service';
      var msg = 'Hello Banik Decorators,%0A%0AI would like to book: *' + service + '*.%0A%0AName:%0ADate:%0AVenue:%0AGuests:%0AAdditional details:';
      window.open('https://wa.me/' + waNumber + '?text=' + msg, '_blank');
    });
  });

  // Booking form
  var bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      var fd = new FormData(bookingForm);
      var lines = [];
      lines.push('*Booking request from website*');
      lines.push('Name: ' + (fd.get('name') || ''));
      lines.push('Event type: ' + (fd.get('eventType') || ''));
      lines.push('Date: ' + (fd.get('date') || ''));
      lines.push('Venue: ' + (fd.get('venue') || ''));
      lines.push('Guests: ' + (fd.get('guests') || ''));
      lines.push('Budget: ' + (fd.get('budget') || ''));
      lines.push('Details: ' + (fd.get('details') || ''));
      var msg = lines.join('%0A');
      window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  // Contact form
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var fd = new FormData(contactForm);
      var msg = '*Contact from website*%0AName: ' + (fd.get('name') || '') + '%0APhone: ' + (fd.get('phone') || '') + '%0AMessage: ' + (fd.get('message') || '');
      window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  // Home page quick Book Now
  var waBook = document.getElementById('whatsapp-book');
  if (waBook) {
    waBook.addEventListener('click', function(e){
      e.preventDefault();
      var msg = 'Hello Banik Decorators, I am interested in your services. Please assist.';
      sendWhatsAppText(msg);
    });
  }
});
