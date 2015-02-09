/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'MoreThanIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-Windscreenicon': '&#xe600;',
		'icon-VanIconicon': '&#xe601;',
		'icon-TravelIconicon': '&#xe602;',
		'icon-Tickicon': '&#xe603;',
		'icon-Studenticon': '&#xe604;',
		'icon-Secureicon': '&#xe605;',
		'icon-Searchicon': '&#xe606;',
		'icon-Refreshicon': '&#xe607;',
		'icon-ProtectedNCDicon': '&#xe608;',
		'icon-Printicon': '&#xe609;',
		'icon-Posticon': '&#xe60a;',
		'icon-Phoneicon': '&#xe60b;',
		'icon-PetIconicon': '&#xe60c;',
		'icon-PersonalBelongingsicon': '&#xe60d;',
		'icon-MTLogoicon': '&#xe60e;',
		'icon-Motorcycleicon': '&#xe60f;',
		'icon-Loginicon': '&#xe610;',
		'icon-LifeIconicon': '&#xe611;',
		'icon-LegalServicesicon': '&#xe612;',
		'icon-Landlordicon': '&#xe613;',
		'icon-IncomeProtectionicon': '&#xe614;',
		'icon-HomeIconicon': '&#xe615;',
		'icon-Headstoneicon': '&#xe616;',
		'icon-Golficon': '&#xe617;',
		'icon-ExternalLinkicon': '&#xe618;',
		'icon-Emergencyicon': '&#xe619;',
		'icon-Emailicon': '&#xe61a;',
		'icon-Downloadicon': '&#xe61b;',
		'icon-Downicon': '&#xe61c;',
		'icon-Crossicon': '&#xe61d;',
		'icon-CourtesyCaricon': '&#xe61e;',
		'icon-Claimicon': '&#xe61f;',
		'icon-CarIconicon': '&#xe620;',
		'icon-CaravanIconicon': '&#xe621;',
		'icon-Calendaricon': '&#xe622;',
		'icon-BusinessIconicon': '&#xe623;',
		'icon-Breakdownicon': '&#xe624;',
		'icon-Boaticon': '&#xe625;',
		'icon-Accidenticon': '&#xe626;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
