$(document).ready(function () {
    console.log("HOLI");


    init();



    $('#intro').on('click', function (event) {

        gsap.killTweensOf($('#intro > *'))


        gsap.to("#dimmer", { duration: 0.5, alpha: 0, ease: "power3.inOut" });
        gsap.to("#avatar", { duration: 0.5, alpha: 0 });
        gsap.to("#avatar", { duration: 0.5, x: 200, ease: "power3.out" });
        gsap.to("#speechBubble", { duration: 0.5, alpha: 0, scale: 0, ease: "power3.inOut" });
        gsap.to(".txt-presentation", {
            duration: 0.5, alpha: 0, y: -20, ease: "power3.inOut", onComplete: function () {
                $('#intro').addClass("d-none");
            }
        });

    })

    $('.link-sobre-mi').on('click', function (event) {
        event.preventDefault();
        ShowSobreMi();
    });

    $('.link-proyectos').on('click', function (event) {
        event.preventDefault();
        ShowProyectos();
    });

    $('.link-contacto').on('click', function (event) {
        event.preventDefault();
        ShowContacto();
    });

    $('nav a').on('mouseenter', function (event) {
        console.log('entrando')
        gsap.to($(this).find('.folder-image'), { duration: 0.3, rotation: 3});
        gsap.to($(this).find('.folder-image'), { duration: 0.3, scale:0.9, ease:"back.out(4)"});

    });

    $('nav a').on('mouseleave', function (event) {
        console.log('saliendo')
        gsap.killTweensOf($(this).find('.folder-image'))
        gsap.to($(this).find('.folder-image'), { duration: 0.2, rotation: 0,scale:1});
    });


    $('#btnCorreo').click(function () {
        console.log("copiando correo al portapapeles...")
        CopyText("victoria.molina89@gmail.com");
    });

    function ChangeImg() {
        $('main').removeClass('background-image-intro');
        $('main').addClass('background-image-sections');
    }

    function ShowSobreMi() {
        console.log("Sobre mi");
        HideAll();
        $('#sobre-mi').removeClass('d-none');
        ChangeImg();
    }

    function ShowProyectos() {
        console.log("Proyectos");
        HideAll();
        $('#proyectos').removeClass('d-none');
        ChangeImg();
    }

    function ShowContacto() {
        console.log("Contacto");
        HideAll();
        $('#contacto').removeClass('d-none');
        ChangeImg();
    }

    function HideAll() {
        console.log("ocultando secciones...")
        $('.ShowHide').addClass("d-none");
    }

    function CopyText(textoACopiar) {
        // Usar la API del portapapeles para copiar el texto
        navigator.clipboard.writeText(textoACopiar).then(function () {
            console.log('Texto copiado al portapapeles');
            mostrarNotificacion();
        }).catch(function (error) {
            console.error('Error al copiar el texto: ', error);
        });

    }

    function mostrarNotificacion() {
        var $notificacion = $('#notificacion');
        $notificacion.fadeIn('slow').delay(2000).fadeOut('slow'); // Ocultar la notificación después de 3 segundos
    }


    // Ocultar o mostrar la flecha para mostrar el scroll al usuario
    $('#scrollableDivSobreMi').on('scroll', function () {
        var $this = $(this);
        var scrollHeight = $this.prop('scrollHeight');
        var scrollTop = $this.scrollTop();
        var divHeight = $this.height();

        // Verificar si ha llegado al final del scroll
        if (scrollTop + divHeight >= scrollHeight - 22) {
            $('#arrow-sobreMi').hide(); // Ocultar la imagen
            console.log("Hemos llegado al final del scroll");
        } else {
            $('#arrow-sobreMi').show(); // Mostrar la imagen si no está al final
        }
    });
    // Ocultar o mostrar la flecha para mostrar el scroll al usuario
    $('#scrollableDivProyectos').on('scroll', function () {
        var $this = $(this);
        var scrollHeight = $this.prop('scrollHeight');
        var scrollTop = $this.scrollTop();
        var divHeight = $this.height();

        // Verificar si ha llegado al final del scroll
        if (scrollTop + divHeight >= scrollHeight - 22) {
            $('#arrow-proyectos').hide(); // Ocultar la imagen
            console.log("Hemos llegado al final del scroll");
        } else {
            $('#arrow-proyectos').show(); // Mostrar la imagen si no está al final
        }
    });

    // En pc no es necesaria la flecha
    var esMovil = window.matchMedia("(max-width: 601px)").matches;

    if (!esMovil) {
        $('#arrow-sobreMi').hide();
    }

    function init() {
        animationStart();
    }

    function animationStart() {

        gsap.set(".animation-parent > *", { alpha: 1, x: 0, y: 0, scale: 1, rotation: 0 });
        gsap.set("#dimmer", { alpha: 0.5 });

        gsap.from("#dimmer", { duration: 0.5, delay: 0, alpha: 0, ease: "power3.inOut" });
        gsap.from("#avatar", { duration: 0.3, delay: 0.5, alpha: 0 });
        gsap.from("#avatar", { duration: 1.5, delay: 0.5, x: 200, ease: "power3.out" });
        gsap.from("#speechBubble", { duration: 1, delay: 1.2, alpha: 0, scale: 0, ease: "power3.inOut" });
        gsap.from(".txt-presentation", { duration: 1, delay: 1.7, alpha: 0, y: -20, ease: "power3.inOut" });


        gsap.to("#dimmer", { duration: 0.5, delay: 7, alpha: 0, ease: "power3.inOut" });
        gsap.to("#avatar", { duration: 0.5, delay: 7, alpha: 0 });
        gsap.to("#avatar", { duration: 0.5, delay: 7, x: 200, ease: "power3.out" });
        gsap.to("#speechBubble", { duration: 0.5, delay: 7, alpha: 0, scale: 0, ease: "power3.inOut" });
        gsap.to(".txt-presentation", {
            duration: 0.5, delay: 7, alpha: 0, y: -20, ease: "power3.inOut", onComplete: function () {
                $('#intro').addClass("d-none");
            }
        });

    }


});
