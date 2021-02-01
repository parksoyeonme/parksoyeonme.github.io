/* $("#listclick").on("click", function(event){
    console.log('clicked');
});
 */

/* list */
function saveUserInfo(){
     var userInfo = new UserInfo($(userName).val(), $(useremail).val(),$(userMemo).val());
     console.log(userInfo);
 
     var arr = JSON.parse(localStorage.getItem("arr"));
     if(arr == null) arr = [];
     arr.push(userInfo);
     console.log(arr);
 
     //배열로 저장
     var jsonStr = JSON.stringify(arr);
     localStorage.setItem("arr", jsonStr);
 
     //초기화
     $(userName).val('').focus();
     $(useremail).val();
     $(userMemo).val('');
 
     loadUserInfo();
     alert("전송되었습니다.");
   }
 
 function UserInfo(name, email, memo){
     this.name = name;
     this.email = email;
     this.memo = memo;
     this.time = new Date().getTime();
   }
   $(function(){
      loadUserInfo();
    });
 
   function loadUserInfo(){
      var arr = JSON.parse(localStorage.getItem("arr"));
      var $userInfo = $(userInfo);
  
      //헤더부분 추가
      $userInfo.html("<tr><th>No</th><th>이름</th><th>이메일</th><th>내용</th><th>방문일시</th></tr>");
  
      //내용부분 추가
      if(arr == null){
        $userInfo.append("<tr><td colspan = '5'>방문자가 없습니다.</td></tr>");
      }
      else {
        arr.reverse(); 
  
        $.each(arr, function(index, elem){
          //console.log(index, elem);
          var date = new Date(elem.time); 
          var tr = "<tr>";
            tr += "<td>" + (index + 1) + "</td>";
            tr += "<td>" + elem.name + "</td>";
            tr += "<td>" + elem.email + "</td>";
            tr += "<td>" + elem.memo.replaceAll("\n", "<br>") + "</td>";
            tr += "<td>" + displayTime(date) + "</td>";
            tr += "</tr>";
            $userInfo.append(tr);
        });
      }
  
    }
    function displayTime(date){
      return date.getFullYear() + "/" + (date.getMonth() +1) + "/" + date.getDate() 
            + " " + date.getHours() + " : " + date.getMinutes();
    }
 
    //===================================================//
 const open = () => {

     document.querySelector(".modal0").classList.remove("hidden");
     document.body.style.overflow ='hidden';
   }
 
   const close = () => {
     document.querySelector(".modal0").classList.add("hidden");
     document.body.style.overflow ='auto';
   }
   const open1 = () => {
     document.querySelector(".modal1").classList.remove("hidden");
     document.body.style.overflow ='hidden';
   }
 
   const close1 = () => {
     document.querySelector(".modal1").classList.add("hidden");
     document.body.style.overflow ='auto';
   }
   function open2(){
        document.querySelector(".modal2").classList.remove("hidden");
     document.body.style.overflow ='hidden';
   }
 
   const close2 = () => {
     document.querySelector(".modal2").classList.add("hidden");
     document.body.style.overflow ='auto';
   }
 
   document.getElementById("more1_pop").addEventListener("click",open);
   document.getElementById("more2_pop").addEventListener("click",open1);
   document.querySelector(".closeBtn").addEventListener("click", close);
   document.querySelector(".closeBtn1").addEventListener("click", close1);
   document.querySelector(".closeBtn2").addEventListener("click", close2);
   document.querySelector(".bg").addEventListener("click", close);
 
 
   //쓸어담은 지식 javascript 진행바
 
   function moreFn() {
        open2();
        java();
        db();
        html();
        css();
        javascript();
        jquery();
   }
 
   function java(){
        var elem = document.getElementById("java");   
        var width = 20;
        var id = setInterval(frame, 10);
   function frame() {
        if (width >= 80) {
             clearInterval(id);
        } else {
             width++; 
             elem.style.width = width + '%'; 
             document.getElementById("demojava").innerHTML = width * 1  + '%';
             }
        }
   }
   function db() {
        var elem = document.getElementById("db");   
        var width = 20;
        var id = setInterval(frame, 10);
   function frame() {
        if (width >= 60) {
             clearInterval(id);
        } else {
             width++; 
             elem.style.width = width + '%'; 
             document.getElementById("demodb").innerHTML = width * 1  + '%';
             }
        }
   }
   function html() {
        var elem = document.getElementById("html");   
        var width = 20;
        var id = setInterval(frame, 10);
   function frame() {
        if (width >= 65) {
             clearInterval(id);
        } else {
             width++; 
             elem.style.width = width + '%'; 
             document.getElementById("demohtml").innerHTML = width * 1  + '%';
             }
        }
   }
   function css() {
        var elem = document.getElementById("css");   
        var width = 20;
        var id = setInterval(frame, 10);
   function frame() {
        if (width >= 65) {
             clearInterval(id);
        } else {
             width++; 
             elem.style.width = width + '%'; 
             document.getElementById("democss").innerHTML = width * 1  + '%';
             }
        }
   }
   function javascript() {
        var elem = document.getElementById("javascript");   
        var width = 20;
        var id = setInterval(frame, 10);
   function frame() {
        if (width >= 30) {
             clearInterval(id);
        } else {
             width++; 
             elem.style.width = width + '%'; 
             document.getElementById("demojavascript").innerHTML = width * 1  + '%';
             }
        }
   }
   function jquery() {
        var elem = document.getElementById("jquery");   
        var width = 20;
        var id = setInterval(frame, 10);
   function frame() {
        if (width >= 40) {
             clearInterval(id);
        } else {
             width++; 
             elem.style.width = width + '%'; 
             document.getElementById("demojquery").innerHTML = width * 1  + '%';
             }
        }
   }
 
 
   //치밀한계획 로드맵
   $(".step").click( function() {
      $(this).addClass("active").prevAll().addClass("active");
      $(this).nextAll().removeClass("active");
      });
 
      $(".step01").click( function() {
           $("#line-progress").css("width", "3%");
           $(".present").addClass("active").siblings().removeClass("active");
      });
 
      $(".step02").click( function() {
           $("#line-progress").css("width", "25%");
           $(".month6").addClass("active").siblings().removeClass("active");
      });
 
      $(".step03").click( function() {
           $("#line-progress").css("width", "50%");
           $(".years1").addClass("active").siblings().removeClass("active");
      });
 
      $(".step04").click( function() {
           $("#line-progress").css("width", "75%");
           $(".years3").addClass("active").siblings().removeClass("active");
      });
 
      $(".step05").click( function() {
           $("#line-progress").css("width", "100%");
           $(".years5").addClass("active").siblings().removeClass("active");
      });
 
 
 
 
   jQuery(document).ready(function() {
        $(".more2").click(function(){
             $('#contact-modal').show();
             $('body').css('overflow','hidden');
 
        });
 
   });
 
 //팝업 Close 기능
 function close_pop(flag) {
      $('#contact-modal').hide();
      $('body').css('overflow','auto');
 };