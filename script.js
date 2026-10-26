
document.addEventListener('DOMContentLoaded',()=>{
  // Rotate the ten homepage hero images every 2 seconds.
  const heroSlides=Array.from(document.querySelectorAll('.hero-slides .hero-slide'));
  if(heroSlides.length>1){
    let currentHeroSlide=0;
    window.setInterval(()=>{
      heroSlides[currentHeroSlide].classList.remove('active');
      currentHeroSlide=(currentHeroSlide+1)%heroSlides.length;
      heroSlides[currentHeroSlide].classList.add('active');
    },2000);
  }
  document.querySelectorAll('img[data-fallback-label]').forEach(img=>{
    img.addEventListener('error',()=>{
      img.classList.add('image-pending');
      img.alt='Hospitality photo placeholder';
      img.removeAttribute('src');
      img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><rect width="640" height="420" fill="#eaf8fd"/><rect x="24" y="24" width="592" height="372" rx="16" fill="#f8fcfd" stroke="#b8dce9" stroke-width="3" stroke-dasharray="10 8"/><text x="320" y="190" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" fill="#12324b">Hospitality Gallery</text><text x="320" y="232" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#56717e">Photo coming soon</text></svg>');
    },{once:true});
  });

  const toggle=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
  document.querySelectorAll('[data-whatsapp-form]').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=data.get('name')||'';
      const phone=data.get('phone')||'';
      const email=data.get('email')||'';
      const business=data.get('business')||'';
      const city=data.get('city')||'';
      const service=data.get('service')||'';
      const message=data.get('message')||'';
      const text=`Adwork Hospitality & Marketing Services - Enquiry%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AHotel/Restaurant: ${encodeURIComponent(business)}%0ACity: ${encodeURIComponent(city)}%0AService Required: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
      window.open('https://wa.me/919996666694?text='+text,'_blank','noopener');
      const status=form.querySelector('.form-status');
      if(status) status.textContent='Your enquiry has been prepared in WhatsApp. Please press Send in WhatsApp to complete submission.';
    });
  });
});
