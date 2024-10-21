var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  
'use strict';
//mobil menu variables

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn] ');
const mobilMenu = document.querySelectorAll ('[data-mobile-menu] ');
const mobilMenuCloseBtn = document.querySelectorAll ('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]')

for (let i=0; i<mobileMenuOpenBtn. length; i++){
    const mobilMenuCloseFunc = function (){
        mobilMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function(){
        mobilMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobilMenuCloseBtn[i].addEventListener('click', mobilMenuCloseFunc);
    overlay.addEventListener('click', mobilMenuCloseFunc);
}



// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


// pagina catalogo



}
/*
     FILE ARCHIVED ON 07:06:41 Jan 08, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:41:14 Oct 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.428
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 22.761
  LoadShardBlock: 83.987 (3)
  PetaboxLoader3.datanode: 91.76 (4)
  PetaboxLoader3.resolve: 56.33 (2)
  load_resource: 76.311
*/