$(window).scroll(function(){
	const scrollTop = $(window).scrollTop()
	if(scrollTop > 200){
      $('.navdiv').css({
      	background:'#fff',
      	boxShadow: '0 10px 15px -5px #ccc'
      })
      $('.navdiv a').css({
      	color:'blue'
      })
      $('.navdiv li').css({
      	color:'#000'
      })
      $('#home').css({
      	color:'blue'
      })
	}else{
	  $('.navdiv').css({
		background:'transparent',
		boxShadow:'none'
	  })
	  $('.navdiv a').css({
		color:'#fff'
	  })
	  $('.navdiv li').css({
		color:'#fff'
	  })
	}
})



$(window).scroll(function(){
	const scrollTop = $(window).scrollTop()
	if(scrollTop > 600){
       $('#about').css({
       	color:'blue'
       })
       $('#home').css({
       	color:'#000'
       })
	}
})


$(window).scroll(function(){
      const scrollTop = $(window).scrollTop()
      if(scrollTop > 1300){
       $('#services').css({
            color:'blue'
       })
       $('#about').css({
            color:'#000'
       })
      }
})

$(window).scroll(function(){
      const scrollTop = $(window).scrollTop()
      if(scrollTop > 2400){
       $('#portfolio').css({
            color:'blue'
       })
       $('#services').css({
            color:'#000'
       })
      }
})


$(window).scroll(function(){
      const scrollTop = $(window).scrollTop()
      if(scrollTop > 3300){
       $('#testimonial').css({
            color:'blue'
       })
       $('#portfolio').css({
            color:'#000'
       })
      }
})


$(window).scroll(function(){
      const scrollTop = $(window).scrollTop()
      if(scrollTop > 4100){
       $('#contact').css({
            color:'blue'
       })
       $('#testimonial').css({
            color:'#000'
       })
      }
})



