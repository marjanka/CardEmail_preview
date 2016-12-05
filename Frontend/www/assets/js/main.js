$(document).ready(function(){

    var element = $(".right-panel"); // global variable
    var getCanvas; // global variable

    $('.left-panel input,textarea').each(function(){

        $(this).bind('blur keypress', function() {

            if($(this).attr('id') == 'img') $('#new_img').attr('src',$(this).val());
            else $('#new_' + $(this).attr('id')).text($(this).val());

        });
    });


    $(".preview").on('click', function () {
        var can;
        $(".previewImage").empty(can);
       html2canvas(element, {
            onrendered: function (canvas) {
                can = canvas;
                $(".previewImage").append(can);
                getCanvas = canvas;
            }
        });
       // $(".card-container").hide();
    });


    $(".download").on('click', function () {
        var imageData = getCanvas.toDataURL("image/jpg");
        // Now browser starts downloading it instead of just showing it
        var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
        $(".download").attr("download", "greeting_card.jpg").attr("href", newData);
    });


    function sendform() {

        if (document.forms[0].name.value == "") { //если поле пустое
            alert('Пожалуйста, введите Ваше имя');// выдается сообщение об ошибке
            document.forms[0].name.focus(); //курсор устанавливается в поле ввода
            return false //возвращается false и отправка формы не происходит
        }

        if (document.forms[0].mail.value == "") {//аналогичная проверка полей: mail, message, q
            alert('Пожалуйста, введите электронный адрес');
            document.forms[0].mail.focus();
            return false
        }

        if (!(/^[\w\.-]+@[\w\.-]+\.\w+$/i).test(document.forms[0].mail.value)) {//здесь происходит проверка email адреса
            alert('Введите реальный электронный адрес!'); //в случае некоррекного адреса выдается ошибка
            return false;
        }

        if (document.forms[0].message.value == "") {
            alert('Пожалуйста, введите текст сообщения');
            document.forms[0].message.focus();
            return false
        }

        if (document.forms[0].q.value != 4) { //проверка ответа на контрольный вопрос
            alert('Неверный ответ на контрольный вопрос!'); //сообщение об ошибке
            document.forms[0].q.focus();
            return false
        }

        return true;
    }
    });

