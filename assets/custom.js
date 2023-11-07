/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

function discountModalClose() {
    const closeBtn = document.querySelector( ".modal-discount_close_btn" );
    const modalAside = document.querySelector('.modal-discount');

    closeBtn.addEventListener( 'click', function () {
        modalAside.style.display = "none";
    } )
}

discountModalClose()


function cookieAccepted() {
 let btn = document.querySelector('.cookie-bar__button');
 let cookieAside = document.querySelector('.cookie-bar');
 
 if (localStorage.getItem('cookieWasAccepted') === null) {
   cookieAside.setAttribute('aria-hidden', 'false');
   btn.addEventListener('click', function(){ 
   	 cookieAside.setAttribute('aria-hidden', 'true');
     localStorage.setItem('cookieWasAccepted', 'true');
   })
 } else {
  	cookieAside.setAttribute('aria-hidden', 'true');
 }
}

cookieAccepted();

function cookieModalClose() {
   let closeBtn = document.querySelector('.cookie_close_btn');
   let cookieAside = document.querySelector('.cookie-bar');
   closeBtn.addEventListener('click', function(){ 
     cookieAside.setAttribute('aria-hidden', 'true');
   })
}

cookieModalClose()

if (window.location.href === ('https://vapejuicedepot.com/collections/vape-clearance') || window.location.href === ('https://vapejuicedepot.com/collections/nicotine-salt-deals') || window.location.href === ('https://vapejuicedepot.com/collections/freebase-eliquid-deals')) {
  	window.addEventListener('DOMContentLoaded', (event) => {
    	(function clearance() {
          window.location = location.protocol + "//" + location.hostname + window.location.pathname + "?sort_by=manual&filter.v.availability=1&filter.v.price.gte=&filter.v.price.lte=";
  		})()
	}); 
}


// collections/weekly-savings-challenge page countdown timer Suren
if( window.location.pathname === '/collections/weekly-savings-challenge'){
  setInterval(function time(){
    var d = new Date();
    var days = 7 - d.getDay();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    document.querySelector('.week-countdown__days').innerHTML= days;
    document.querySelector('.week-countdown__hours').innerHTML= hours;
    document.querySelector('.week-countdown__minutes').innerHTML= min;
    document.querySelector('.week-countdown__seconds').innerHTML= sec;
  }, 1000);
}
// End   countdown timer Suren

(function showAgeModal(time_now) {
  
  function getThree_hours_before_now(){
    
  	const result = new Date();
    result.setHours(result.getHours() - 3);
    return result;
    
  }
  
  if (window.theme.show_ageModal) {
    // var body = document.querySelector("body");
    
	window.addEventListener('load', function () {

        document.querySelector('.btn_agree').onclick = function() {
           document.getElementById('modal-demo').style.display = 'none';
           document.getElementsByTagName('html')[0].classList.remove("scroll");
           localStorage.setItem('ageVerifiedDate', (new Date()).toISOString());
        };
      
		const age_verified_date = new Date(localStorage.getItem('ageVerifiedDate') || 0);
      	const three_hours_before_now = getThree_hours_before_now();
              
        if( three_hours_before_now > age_verified_date ) { 
              document.getElementById('modal-demo').style.display = 'flex';
              document.getElementsByTagName('html')[0].classList.add("scroll");
        } else {
              localStorage.setItem('ageVerifiedDate', (new Date().toISOString()));
        };
    })
  }
})();



if (document.querySelector('#modal-15-demo')) {
    (function() {
        setTimeout(() => {
            const show_modal_15_data = localStorage.getItem('modal15hide');

            if (!localStorage.getItem('modal15hide') && document.querySelector('#modal-15-demo')) {
                document.querySelector('#modal-15-demo').style.display = "flex";
            }

            window.onclick = function(event) {
                if (event.target == document.querySelector('#modal-15-demo')) {
                    document.querySelector('#modal-15-demo').style.display = "none";
                    localStorage.setItem('modal15hide', true);
                }
            }

            if (document.querySelector('.modal-discount_close_btn')) {
                document.querySelector('.modal-discount_close_btn').addEventListener('click', function() {
                    if (document.querySelector('#modal-15-demo')) {
                        document.querySelector('#modal-15-demo').style.display = "none";
                        localStorage.setItem('modal15hide', true);
                    }
                })
            }
        }, 20000)
    })()
}
  
  
if (document.querySelector('#modal-10-demo')) {
    (function() {
        setTimeout(() => {
            const show_modal_10_data = localStorage.getItem('modal10hide');

            if (!localStorage.getItem('modal10hide') && document.querySelector('#modal-10-demo')) {
                document.querySelector('#modal-10-demo').style.display = "flex";
            }

            window.onclick = function(event) {
                if (event.target == document.querySelector('#modal-10-demo')) {
                    document.querySelector('#modal-10-demo').style.display = "none";
                    localStorage.setItem('modal10hide', true);
                }
            }

            if (document.querySelector('#modal-10-btn')) {
                document.querySelector('#modal-10-btn').addEventListener('click', function() {
                    if (document.querySelector('#modal-10-demo')) {
                        document.querySelector('#modal-10-demo').style.display = "none";
                        localStorage.setItem('modal10hide', true);
                    }
                })
            }
        }, 20000)
    })()
}


