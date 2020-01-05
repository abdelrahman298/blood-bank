$('.card-deck').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '.arrow-left',
  prevArrow: '.arrow-right',
  rtl: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 427,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

var request = new XMLHttpRequest();
request.open('GET', 'https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/donation-requests?api_token=W4mx3VMIWetLcvEcyF554CfxjZHwdtQldbdlCl2XAaBTDIpNjKO1f7CHuwKl');
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var html = '';
    var text = JSON.parse(this.responseText);
    var finalData = text.data.data;
    for (var i = 0; i < finalData.length; i++) {
      html += `
      <div class='col-12'>
      <div class='volunteer'>
          <p>`+ finalData[i].blood_type.name + `</p>
          <ul class='list-unstyled'>
              <li>`+ finalData[i].patient_name + `</li>
              <li>`+ finalData[i].hospital_name + `</li>
              <li>`+ finalData[i].city.name + `</li>
          </ul>
          <button type="button" class="btn float-right ">التفاصيل</button>
      </div>
  </div>`;
    }
    $('.vol-1').append(html);
  }
}
request.send();