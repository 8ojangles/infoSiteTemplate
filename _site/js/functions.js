$(document).ready(function(){



/******************************************************
SUBMENU BUILDER
******************************************************/

/* collect section headings into array */

var submenuHeadingArray = [];
var sectionSubtitleArray = [];


var contentSlides = $('.contentSlide');

var submenuHeadings = $('.contentSlide h2');
var submenuHeadingLen = submenuHeadings.length -1;

for (var i = 0; i <= submenuHeadingLen; i++) {

	var submenuHeading = submenuHeadings.eq(i).text();
	submenuHeadingArray.push(submenuHeading);

	var subtitleArray = [];
	var currSlide = i+1;
	var subtitleHeadings = $("#slide"+currSlide+" h3");
	var subtitleHeadingLen = subtitleHeadings.length -1;

	for (var j = 0; j <= subtitleHeadingLen; j++) {
		var subtitleHeading = subtitleHeadings.eq(j).text();
		subtitleArray.push(subtitleHeading);
	}

	sectionSubtitleArray.push(subtitleArray);

}

console.log(submenuHeadingArray);
console.log(sectionSubtitleArray);

// var subtitleArray = [];

// 	var subtitleHeadings = submenuHeadings.eq(i).find('h3');
// 	var subtitleHeadingLen = subtitleHeadings.length -1;

// 	for (var i = 0; i <= subtitleHeadingLen; i++) {

// 		var subtitleHeading = subtitleHeadings.eq(i).text();
// 		subtitleArray.push(subtitleHeading);
// alert(sectionSubtitleArray);







/********** ANIMATION VARIABLES AND LINKS **********/

/* declare animation timing vars */

	var slideTime = 750;

	var page = $('html');

	var waypointOffset_subTitles = 170;

	var waypointOffset_header = 0;




/********** CACHE ELEMENTS **********/
	var subMenuContainer = $('.subMenuContainer');
	var subMenuArray = $('.subMenu');
	var subMenuArrayNumber = 0;

/********** CACHE CLASSES **********/
	var subMenuClasses = "pos1 pos2 pos3 pos4 pos5";


/********** CACHE VARIABLES **********/
	var thisSubMenu;


/**************************************************************
CLICK FUNCTIONS
**************************************************************/

// click function for navigation accordion effect

$('.subMenu h3').click(function(){
		
	var thisParent = $(this).parent();

	if ( thisParent.hasClass('open') ) {
		return false;
	} else if ( thisParent.hasClass('closed') ) {

		subMenus.removeClass('open closed').addClass('closed');
		thisParent.removeClass('closed').addClass('open');

	}

});



// scroll function for navigation linking

$('.subMenu li a').click(function(event){

	var el = $(this);
	var thislink = el.prop('class');

	varViewThisEl = $('#'+thislink);
	varViewThisEl.velocity("scroll",{ duration: slideTime, offset: -160 , easing: "ease-out" });

	return false;
	event.preventDefault();

});



/**************************************************************
WAYPOINT FUNCTIONS
**************************************************************/

	var titleBGClasses = "summaryBg htmlBg cssBg jsBg qaBg refBg";
	var onOffClasses = "on off";
	var headerTitles = $('.sectionTitle h3');
	var headerBgEl = $('.headerBg');
	var headerEl = $('header');

	var summaryH2El = $('#summaryBlock h2');

	var subMenus = $('.subMenu');

	var sidebarContainer = $('.sideBarContainer');

/* smallanize header using "summary" title position */

	summaryH2El.waypoint(function(direction) {

		if (direction == 'down') {
			headerEl.removeClass('open').addClass('closed');
			sidebarContainer.removeClass('lowPos highPos').addClass('highPos');


		}
		if (direction == 'up') {
			headerEl.removeClass('closed').addClass('open');
			sidebarContainer.removeClass('lowPos highPos').addClass('lowPos');
		}

	}, { offset: 275 });



	/* monitor scroll position to open current subMenu */

	summaryH2El.waypoint(function(direction) {

		if (direction == "down") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#summarySubMenu').removeClass('closed').addClass('open');

		}

	}, { offset: waypointOffset_subTitles });


	/* HTML content waypoints */

	var htmlH2 = $('#htmlContentTitle');
	var htmlSectionCrossoverEls = $('#htmlContentTitle, .summaryTitle');
	var htmlHeaderTitle = $('.htmlTitle');

	htmlH2.waypoint(function(direction) {

		if (direction == "down") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#htmlSubMenu').removeClass('closed').addClass('open');
		}

		if (direction == "up") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#summarySubMenu').removeClass('closed').addClass('open');

		}

	}, { offset: waypointOffset_subTitles });


	htmlH2.waypoint(function(direction) {

		if (direction == "down") {
			headerBgEl.removeClass(titleBGClasses).addClass('htmlBg');
			htmlSectionCrossoverEls.removeClass('on').addClass('off');
			htmlHeaderTitle.removeClass('off').addClass('on');
		}

		if (direction == "up") {
			headerBgEl.removeClass(titleBGClasses).addClass('summaryBg');
			htmlSectionCrossoverEls.removeClass('off').addClass('on');
			htmlHeaderTitle.removeClass('on').addClass('off');		
		}

	}, { offset: waypointOffset_header });




	$('#cssBlock h2').waypoint(function(direction) {

		if (direction == "down") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#cssSubMenu').removeClass('closed').addClass('open');
		}

		if (direction == "up") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#htmlSubMenu').removeClass('closed').addClass('open');
		}

	}, { offset: waypointOffset_subTitles });


	var cssH2 = $('#cssContentTitle');
	var cssSectionCrossoverEls = $('#cssContentTitle, .htmlTitle');
	var cssHeaderTitle = $('.cssTitle');


	cssH2.waypoint(function(direction) {

		if (direction == "down") {
			headerBgEl.removeClass(titleBGClasses).addClass('cssBg');
			cssSectionCrossoverEls.removeClass('on').addClass('off');
			cssHeaderTitle.removeClass('off').addClass('on');
		}

		if (direction == "up") {
			headerBgEl.removeClass(titleBGClasses).addClass('htmlBg');
			cssSectionCrossoverEls.removeClass('off').addClass('on');
			cssHeaderTitle.removeClass('on').addClass('off');		
		}

	}, { offset: waypointOffset_header });




	$('#jsBlock h2').waypoint(function(direction) {

		if (direction == "down") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#jsSubMenu').removeClass('closed').addClass('open');
		}

		if (direction == "up") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#cssSubMenu').removeClass('closed').addClass('open');
		}

	}, { offset: waypointOffset_subTitles });


	var jsH2 = $('#jsContentTitle');
	var jsSectionCrossoverEls = $('#jsContentTitle, .cssTitle');
	var jsHeaderTitle = $('.jsTitle');


	jsH2.waypoint(function(direction) {

		if (direction == "down") {
			headerBgEl.removeClass(titleBGClasses).addClass('jsBg');
			jsSectionCrossoverEls.removeClass('on').addClass('off');
			jsHeaderTitle.removeClass('off').addClass('on');
		}

		if (direction == "up") {
			headerBgEl.removeClass(titleBGClasses).addClass('cssBg');
			jsSectionCrossoverEls.removeClass('off').addClass('on');
			jsHeaderTitle.removeClass('on').addClass('off');		
		}

	}, { offset: waypointOffset_header });




	$('#qaBlock h2').waypoint(function(direction) {

		if (direction == "down") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#qaSubMenu').removeClass('closed').addClass('open');
		}

		if (direction == "up") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#jsSubMenu').removeClass('closed').addClass('open');
		}

	}, { offset: waypointOffset_subTitles });


	var qaH2 = $('#qaContentTitle');
	var qaSectionCrossoverEls = $('#qaContentTitle, .jsTitle');
	var qaHeaderTitle = $('.qaTitle');


	qaH2.waypoint(function(direction) {

		if (direction == "down") {
			headerBgEl.removeClass(titleBGClasses).addClass('qaBg');
			qaSectionCrossoverEls.removeClass('on').addClass('off');
			qaHeaderTitle.removeClass('off').addClass('on');
		}

		if (direction == "up") {
			headerBgEl.removeClass(titleBGClasses).addClass('jsBg');
			qaSectionCrossoverEls.removeClass('off').addClass('on');
			qaHeaderTitle.removeClass('on').addClass('off');		
		}

	}, { offset: waypointOffset_header });


	/* monitor scroll position of subtitles to highlight current matching subMenu item */

		
		$('.contentBlock h3').waypoint(function(e) {

			var elID = $(this).prop('id');
			$('.subMenu .hilite').removeClass('hilite');
			$('.'+elID).parent().addClass('hilite');

		}, { offset: waypointOffset_subTitles });




	$('#refBlock h2').waypoint(function(direction) {

		if (direction == "down") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#refSubMenu').removeClass('closed').addClass('open');
		}

		if (direction == "up") {
			subMenus.removeClass('open closed').addClass('closed');
			$('#qaSubMenu').removeClass('closed').addClass('open');
		}

	}, { offset: waypointOffset_subTitles });


	var refH2 = $('#refContentTitle');
	var refSectionCrossoverEls = $('#refContentTitle, .qaTitle');
	var refHeaderTitle = $('.refTitle');


	refH2.waypoint(function(direction) {

		if (direction == "down") {
			headerBgEl.removeClass(titleBGClasses).addClass('refBg');
			refSectionCrossoverEls.removeClass('on').addClass('off');
			refHeaderTitle.removeClass('off').addClass('on');
		}

		if (direction == "up") {
			headerBgEl.removeClass(titleBGClasses).addClass('qaBg');
			refSectionCrossoverEls.removeClass('off').addClass('on');
			refHeaderTitle.removeClass('on').addClass('off');		
		}

	}, { offset: waypointOffset_header });





}); // end doc ready
