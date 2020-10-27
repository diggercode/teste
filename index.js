$(document).ready(function () {
    $("#raposa").click(function () {
        $.ajax({
            url: "conteudo.txt", success: function (resultado) {
                $("#info").html(resultado);
            }
        });
    });
    $("#lorem").click(function () {
        $.ajax({
            url: "conteudo1.html ", 
            success: function (resultado) {
                $("#info").html(resultado);
            }
        });
    });

/* Testando sem Ajax */
$("#semAjax").click(function () {
$("#info").html(`
<h1>
Lorem ipsum dolor sit
</h1>
<p style="color: red;" class="bg-light p-3">
Include everything you need in one script with our bundle. Our bootstrap.bundle.js and bootstrap.bundle.min.js include Popper, but not jQuery. For more information about what’s included in Bootstrap, please see our contents section.
<input type="button" class="btn btn-primary" value="Sem Ajax">
</p>`)

});
});
