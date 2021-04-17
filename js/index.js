
let socail = document.querySelector('[data-toggle="popover"]');
let socialMobile = document.querySelector('footer');


let validation = window.innerWidth;


$(document).ready(function(){
    const clearHistoryBtn = `
    <div class='pr-3 pl-3 pt-1 pb-1'>
    <h5 class='mr-2 font-weight-light d-inline  text-light text-uppercase'>Share</h5>
    <a href="www.facebook.com"><i class="fa fa-2x mr-2 fa-inverse fa-facebook-official" aria-hidden="true"></i></a>
    <a href="www.twitter.com"><i class="fa fa-2x mr-2 fa-inverse fa-twitter" aria-hidden="true"></i></a>
    <a href="https://www.pinterest.com/"><i class="fa fa-2x mr-2 fa-inverse fa-pinterest" aria-hidden="true"></i></a>
    </div>
    `;

    const mytemplate = `<div class="popover" role="tooltip">
    <div class="arrow"></div>
    <h3 class="popover-header"></h3>
    <div class="popover-body"></div>
    </div>`;

        $('[rel="social"]').popover({
            placement: 'top',
            html: true,
            container:'body',
            content: clearHistoryBtn,
            template: mytemplate,
        });
});

socail.addEventListener('click',()=>{
    let validation = window.innerWidth;
    console.log(validation)
    if(validation > 900){
        $('[data-toggle="popover"]').popover('enable');
    } else {
        $('[data-toggle="popover"]').popover('disable');
        //----------------- TODO adding toggling row functionality -------------------//
        let mobileFooter2 = document.querySelector('.img-footer');
        if(mobileFooter2.style.display === 'none'){
            mobileFooter2.style.display = 'unset';
            document.querySelector('footer').style.display = 'none';
        } else{
            mobileFooter2.style.display = 'none';
            document.querySelector('footer').style.display = 'unset';
        }
    }
});

socialMobile.addEventListener('click',()=>{
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.img-footer').style.display = 'unset';
});



window.addEventListener('resize',()=>{
    if(window.innerWidth >770){
        socialMobile.style.display = 'none';
        let mobileFooter2 = document.querySelector('.img-footer');
        mobileFooter2.style.display = 'unset';
    }
})

