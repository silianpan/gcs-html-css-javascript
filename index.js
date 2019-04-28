$('button').on('click', function() {
  $('p').css('opacity', 0)
})

$(document).ready(function() {
  document.onkeydown = function(event) {
    var e = event || window.event
		var k = e.keyCode || e.which
		var ret = '方向控制'
		switch(k) {
			case 37:
				console.log('向左')
				ret = '向左'
				break
			case 38:
				console.log('向上')
				ret = '向上'
				break
			case 39:
				console.log('向右')
				ret = '向右'
				break
			case 40:
				console.log('向下')
				ret = '向下'
				break
		}

		document.getElementById('eventTest').innerHTML = ret
    if (e.ctrlKey && e.altKey && e.keyCode == 77) {
      alert('刚刚按下的是 ctrl + alt + m 组合键')
    }
  }
})
