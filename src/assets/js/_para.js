/*! function()
{
	var pages = [],
		active, prev,
		perspective = 6,
		timeStep = 0.05,
		pointer = {
			x: 0,
			y: 0
		},
		screen = {
			w: 0,
			h: 0
		},
		position = {
			x: 0,
			y: 0
		},
		target = {
			x: 0,
			y: 0
		},
		parallax = {
			x: 0,
			y: 0
		};
	window.addEventListener("mousemove", function(e)
	{
		e.preventDefault();
		pointer.x = e.clientX - screen.w * 0.5;
		pointer.y = e.clientY - screen.h * 0.5;
	}, false);
	function resize()
	{
		screen.w = document.body.offsetWidth;
		screen.h = document.body.offsetHeight;
	}
	window.addEventListener("resize", resize, false);
	resize();
	function run()
	{
		requestAnimationFrame(run);
		parallax.x += (pointer.x - parallax.x) * (timeStep * 0.5);
		parallax.y += (pointer.y - parallax.y) * (timeStep * 0.5);
		position.x += (target.x - position.x) * timeStep;
		position.y += (target.y - position.y) * timeStep;
		for (var i = 0, n = pages.length; i < n; i++)
		{
			var p = pages[i];
			if (p.visible)
			{
				for (var j = 0, m = p.nodes.length; j < m; j++)
				{
					var o = p.nodes[j];
					var transform = 'matrix(1,0,0,1,' + ((p.x - parallax.x * 0.5 - position.x) * o.d) + ',' + ((p.y - parallax.y * 0.5 - position.y) * o.d) + ')';
					o.css.transform = o.css.webkitTransform = transform;
				}
			}
		}
	}
	var goto = function(label)
	{
		for (var i = 0, n = pages.length; i < n; i++)
		{
			if (pages[i].id == label)
			{
				prev = active;
				active = pages[i];
				target.x = active.x;
				target.y = active.y;
				if (prev) setTimeout(function()
				{
					prev.elem.style.visibility = "hidden";
					prev.visible = false;
				}, 800);
				active.elem.style.visibility = "visible";
				active.visible = true;
				return;
			}
		}
	}
	window.addEventListener("hashchange", function()
	{
		goto(location.hash);
		return false;
	}, false);
	var k = 0;
	var r = document.querySelectorAll('.page');
	for (var i = 0, n = r.length; i < n; i++)
	{
		var o = r[i];
		var p = {
			elem: o,
			id: o.id,
			x: o.offsetLeft,
			y: o.offsetTop,
			visible: false,
			nodes: []
		};
		pages.push(p);
		o.style.position = 'static';
		var c = o.getElementsByTagName('*');
		for (var j = 0, m = c.length; j < m; j++)
		{
			var elem = c[j];
			if (elem.className.indexOf('prx') >= 0)
			{
				var z = (elem.style.zIndex || 0) * 1;
				p.nodes.push(
				{
					css: elem.style,
					d: Math.min(perspective, perspective / (perspective + 1 - z)),
				});
			}
		}
	}
	run();
	if (location.hash !== '' && location.hash !== "#") {
		goto(location.hash);
	} else window.location.hash = "#pan1";
}();*/

// var parallax = function(e) {
//     var windowWidth = $(window).width();
//     if (windowWidth < 768) return;
//     var halfFieldWidth = $(".parallax").width() / 2,
//       halfFieldHeight = $(".parallax").height() / 2,
//       fieldPos = $(".parallax").offset(),
//       x = e.pageX,
//       y = e.pageY - fieldPos.top,
//       newX = (x - halfFieldWidth) / 30,
//       newY = (y - halfFieldHeight) / 30;
//     $('.parallax [class*="moove"]').each(function(index) {
//       $(this).css({
//         transition: "",
//         transform:
//           "translate3d(" + index * newX + "px," + index * newY + "px,0px)"
//       });
//     });
//   },
//   stopParallax = function() {
//     $('.parallax [class*="moove"]').css({
//       transform: "translate(0px,0px)",
//       transition: "all .7s"
//     });
//     $timeout(function() {
//       $('.parallax [class*="moove"]').css("transition", "");
//     }, 700);
//   };
// $(document).ready(function() {
//   $("main").on("mousemove", parallax);
//   $("main").on("mouseleave", stopParallax);
// });

var parallax = function(e) {
    var windowWidth = $(window).width();
    if (windowWidth < 768) return;
    var halfFieldWidth = $(".parallax").width() / 2,
      halfFieldHeight = $(".parallax").height() / 2,
      fieldPos = $(".parallax").offset(),
      x = e.pageX,
      y = e.pageY - fieldPos.top,
      newX = (x - halfFieldWidth) / 30,
      newY = (y - halfFieldHeight) / 30;
    $('.parallax [class*="wave"]').each(function(index) {
      $(this).css({
        transition: "",
        transform:
          "translate3d(" + index * newX + "px," + index * newY + "px,0px)"
      });
    });
  },
  stopParallax = function() {
    $('.parallax [class*="wave"]').css({
      transform: "translate(0px,0px)",
      transition: "all .7s"
    });
    (function() {
      $('.parallax [class*="wave"]').css("transition", "");
    }, 700);
  };
$(document).ready(function() {
  $(".not-found").on("mousemove", parallax);
});