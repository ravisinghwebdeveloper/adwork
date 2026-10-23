
document.addEventListener('DOMContentLoaded',()=>{
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
