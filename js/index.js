$(document).ready(function() {
    //=========================== Start navbar color===============================================================
    $(window).scroll(function() {


        if ($(window).scrollTop() >= 90) {


            $("nav").css({
                "backgroundColor": "#eee",
                "box-shadow": "8px 0 5px #000"
            })

            $("nav li a").css({
                "color": "#222",
            })

            //swicth image icon and color navbar
            $('.logo img').attr('src', 'images/logo.png')

            $("nav .checkbtn").css({
                "color": "#000",
            })


        } else {

            $("nav").css({
                "backgroundColor": "transparent",
                "box-shadow": "none"
            })

            $("nav .checkbtn").css({
                "color": "#fff",
            })

            $("nav li a").css({
                "color": "#fff",
            })


            //swicth image icon
            $('.logo img').attr('src', 'images/logo-footer.png')

        }


        //.......................................................     button up      ........................................

        if ($(window).scrollTop() >= 500) {
            $('.up').fadeIn(1000)
        } else {
            $('.up').fadeOut(1000)
        }

    });


    //...................................................    when click button up   ...................................................
    $('.up').on('click', function() {

        $('body, html').animate({ scrollTop: 0 }, 1000);
    });







    //...................................    when you refresh at anywhere at page slidbar will make the same effect       .......................................

    if ($(window).scrollTop() >= 90) {


        $("nav").css({
            "backgroundColor": "#eee",
            "box-shadow": "8px 0 5px #000"
        })

        $("nav li a").css({
            "color": "#222",
        })

        //swicth image icon and color navbar
        $('.logo img').attr('src', 'images/logo.png')

        $("nav .checkbtn").css({
            "color": "#000",
        })


    } else {

        $("nav").css({
            "backgroundColor": "transparent",
            "box-shadow": "none"
        })

        $("nav .checkbtn").css({
            "color": "#fff",
        })

        $("nav li a").css({
            "color": "#fff",
        })


        //swicth image icon
        $('.logo img').attr('src', 'images/logo-footer.png')

    }






});