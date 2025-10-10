var visible = 5;
const comments = [
	{
		order: 1,
		likes: 1,
		avatar: `./assets/images/1.jpg`,
		profile: `#`,
		name: `Willem Janssen`,
		text: `Ik heb net mijn elektrische fiets gekregen en hij is geweldig! De rit is zo soepel en moeiteloos. Dank je, E-Bike Voordeelregeling!`,
		image: `./assets/images/test7.jpg`,
		age: `een week geleden`,
		comments: []
	},
	{
		order: 2,
		likes: 1,
		avatar: `./assets/images/2.jpg`,
		profile: `#`,
		name: `Klaas Jansen`,
		text: `Helaas geen geluk voor mij deze keer.. gefeliciteerd aan de anderen!`,
		image: null,
		age: `een week geleden`,
		comments: []
	},
	{
		order: 3,
		likes: 3,
		avatar: `./assets/images/3.jpg`,
		profile: `#`,
		name: `Femke de Vries`,
		text: `Ik ben er helemaal weg van! Dit is de eerste keer dat ik een e-bike probeer. Ik had er al lang eentje willen hebben als ik wist hoe geweldig het was.`,
		image: `./assets/images/test1.jpg`,
		age: `een week geleden`,
		comments: [
			{
				likes: 16,
				avatar: `./images/logo-small.png`,
				profile: `#`,
				name: `E-Bike Voordeelregeling`,
				text: `We zijn blij voor je! Geniet ervan!`,
				age: `een week geleden`,
			},
			{
				likes: 3,
				avatar: `./assets/images/3.jpg`,
				profile: `#`,
				name: `Femke de Vries`,
				text: `Heel erg bedankt!`,
				age: `een week geleden`,
			}
		]
	},
	{
		order: 4,
		likes: 7,
		avatar: `./assets/images/4.jpg`,
		profile: `#`,
		name: `Marloes van Dijk`,
		text: `Geweldig initiatief, mensen! Een leuke manier om te reizen en ook nog eens milieuvriendelijk.`,
		image: null,
		age: `twee weken geleden`,
		comments: []
	},
	{
		order: 5,
		likes: 7,
		avatar: `./assets/images/5.jpg`,
		profile: `#`,
		name: `Arjan de Boer`,
		text: `Kan niet wachten om het uit te proberen. Bedankt allemaal, hij is net aangekomen!`,
		image: `./assets/images/test6.jpg`,
		age: `twee weken geleden`,
		comments: [
			{
				likes: 25,
				avatar: `./images/logo-small.png`,
				profile: `#`,
				name: `E-Bike Voordeelregeling`,
				text: `Bedankt dat je meedoet aan onze regeling! We horen graag weer van je!`,
				age: `twee weken geleden`,
			}
		]
	},
	{
		order: 6,
		likes: 8,
		avatar: `./assets/images/10.jpg`,
		profile: `#`,
		name: `Stefan van den Berg`,
		text: `Ik ben niet aangenomen. Maar hoe dan ook, geweldig programma! We moeten ook aan de natuur denken, dat is het belangrijkste.`,
		image: null,
		age: `twee weken geleden`,
		comments: []
	},
	{
		order: 7,
		likes: 3,
		avatar: `./assets/images/11.jpg`,
		profile: `#`,
		name: `Jasmijn Bakker`,
		text: `Super enthousiast over mijn e-bike! Het ontwerp en de functionaliteit zijn top. Mijn man gaat er dol op zijn:`,
		image: `./assets/images/test2.jpg`,
		age: `twee weken geleden`,
		comments: [
			{
				likes: 56,
				avatar: `./images/logo-small.png`,
				profile: `#`,
				name: `E-Bike Voordeelregeling`,
				text: `We zijn blij je in onze regeling te hebben! Geniet ervan!`,
				age: `twee weken geleden`,
			}
		]
	},
	{
		order: 8,
		likes: 12,
		avatar: `./assets/images/12.jpg`,
		profile: `#`,
		name: `Jan Koster`,
		text: `Deze e-bike is perfect voor mijn dagelijkse ritjes. Bedankt!`,
		image: `./assets/images/test5.jpg`,
		age: `twee weken geleden`,
		comments: []
	},
	{
		order: 9,
		likes: 3,
		avatar: `./assets/images/13.jpg`,
		profile: `#`,
		name: `Rik Meijer`,
		text: `Er zouden meer regelingen zoals deze moeten zijn! Iedereen gebruikt nu auto’s, maar we denken niet na over hoeveel dat vervuilt.`,
		image: null,
		age: `twee weken geleden`,
		comments: []
	},
	{
		order: 10,
		likes: 1,
		avatar: `./assets/images/14.jpg`,
		profile: `#`,
		name: `Linda de Wit`,
		text: `Wat is de deadline voor de regeling?`,
		image: null,
		age: `twee weken geleden`,
		comments: []
	},
	{
		order: 11,
		likes: 1,
		avatar: `./assets/images/15.jpg`,
		profile: `#`,
		name: `Jeroen Mulder`,
		text: `Ik kan het niet geloven! Ik wilde er altijd een, maar de prijs was te hoog. Ik ben erg dankbaar, dank aan het hele E-Bike Voordeelregeling-team:`,
		image: `./assets/images/test3.jpg`,
		age: `twee weken geleden`,
		comments: []
	},
	{
		order: 13,
		likes: 6,
		avatar: `./assets/images/20.jpg`,
		profile: `#`,
		name: `Hugo de Jong`,
		text: `Vanaf nu ga ik niet meer met de auto naar werk, ik bespaar elke dag een uur sinds hij is aangekomen. En ik help ook een beetje het milieu te beschermen:`,
		image: `./assets/images/test4.jpg`,
		age: `twee weken geleden`,
		comments: []
	}
];

const obj_comment = `
<div class="comment sort-coms start-coms" data-order="{{ORDER}}" data-likes="{{LIKES}}">
	<a class="comment-user-img" href="{{PROFILE_URL}}"
		target="_blank"><img src="{{AVATAR}}" width="48" height="48" alt="{{USERNAME}}" /></a>
	<a href="{{PROFILE_URL}}" target="_blank"
		class="comment-user-name"><span> {{USERNAME}} </span></a>
	<p class="comment-text">{{COMMENT_TEXT}}</p>
	{{COMMENT_IMG}}
	<div class="comment-meta">
		<button>Like</button><span> · </span>
		<button>Reply</button><span> · </span>
		<span class="total-likes">{{LIKES}}</span><span> · </span>
		<span class="comment-age">{{TIMEAGO}}</span>
	</div>
	{{SUB_COMMENTS}}
</div>
`;

const obj_sub_comment = `
<div class="comment">
	<a class="comment-user-img" href="{{PROFILE_URL}}"
		target="_blank"><img src="{{AVATAR}}" width="48" height="48" alt="{{USERNAME}}" /></a>
	<a href="{{PROFILE_URL}}" target="_blank"
		class="comment-user-name"><span> {{USERNAME}} </span></a>
	<p class="comment-text">{{COMMENT_TEXT}}</p>
	<div class="comment-meta">
		<button>Like</button><span> · </span>
		<button>Reply</button><span> · </span>
		<span class="total-likes">{{LIKES}}</span><span> · </span>
		<span class="comment-age">{{TIMEAGO}}</span>
	</div>
</div>
`;

const renderComments = () => {
	let html = ``;

	for (var comment of comments) {
		let sub_comments = ``;

		for (var scomment of comment.comments) {
			sub_comments += obj_sub_comment
				.replace(new RegExp('{{PROFILE_URL}}', 'g'), scomment.profile)
				.replace(new RegExp('{{AVATAR}}', 'g'), scomment.avatar)
				.replace(new RegExp('{{USERNAME}}', 'g'), scomment.name)
				.replace(new RegExp('{{COMMENT_TEXT}}', 'g'), scomment.text)
				.replace(new RegExp('{{LIKES}}', 'g'), scomment.likes)
				.replace(new RegExp('{{TIMEAGO}}', 'g'), scomment.age);
		};

		let img_html = comment.image
			? `<img class="fb-img" src="${comment.image}" width="210" alt="${comment.name}"/>`
			: ``;

		html += obj_comment
			.replace(new RegExp('{{PROFILE_URL}}', 'g'), comment.profile)
			.replace(new RegExp('{{AVATAR}}', 'g'), comment.avatar)
			.replace(new RegExp('{{USERNAME}}', 'g'), comment.name)
			.replace(new RegExp('{{COMMENT_TEXT}}', 'g'), comment.text)
			.replace(new RegExp('{{COMMENT_IMG}}', 'g'), img_html)
			.replace(new RegExp('{{LIKES}}', 'g'), comment.likes)
			.replace(new RegExp('{{ORDER}}', 'g'), comment.order)
			.replace(new RegExp('{{TIMEAGO}}', 'g'), comment.age)
			.replace(new RegExp('{{SUB_COMMENTS}}', 'g'), sub_comments);
	};

	return html;
};

jQuery.fn.orderBy = function (keySelector, order) {
	return this.sort(function (a, b) {
		a = keySelector.apply(a);
		b = keySelector.apply(b);
		if (order == "newest") {
			if (a > b)
				return 1;
			if (a < b)
				return -1;
			return 0;
		} else if (order == "oldest" || order == "top") {
			if (a < b)
				return 1;
			if (a > b)
				return -1;
			return 0;
		}
	});
};

$(document).ready(function () {
	const html_comms = renderComments();

	$(".main-comments").html(html_comms);

	setTimeout(function () {
		$(".sorting-box > p").html("130 reacties");
		$(".start-coms").removeClass("start-coms");
	}, 250);

	$(document).on('click', 'textarea', function () {
		$(".add-comment").addClass("active");
	});

	$(".comment-button-left [type=checkbox]").on('change', function () {
		if ($(this).is(":checked") && text_remaining > 0) {
			$(".comment-button-left p").show();
			$(".comment-button-right button").addClass("disabled").prop("disabled", true);
		} else {
			$(".comment-button-left p").hide();
			$(".comment-button-right button").removeClass("disabled").prop("disabled", false);
		}
	});

	$(document).on('click', '.sort > button', function () {
		var $this = $(this);
		$this.next().is(":visible") ? $this.next().hide() : $this.next().show();
	});

	$(document).on('click', '.dropdown-sort button', function () {
		var $this = $(this);
		var sort_by = $this.data("sort") == "top" ? "likes" : "order";
		$this.parent().hide();
		$this.parent().find(".selected").removeClass("selected");
		$this.addClass("selected");
		$(".sort > button span").html($this.find("span").html());
		$(".sort-coms").orderBy(function () { return +$(this).data(sort_by); }, $this.data("sort")).appendTo(".main-comments");
		$(".inner-sorting-box > svg").css({ display: "inline-block" });
		setTimeout(function () { $(".inner-sorting-box > svg").hide(); }, 200);
		$(".sort-coms").hide();
		for (var i = 0; i < visible; i++) {
			$(".main-comments > :hidden:first").show();
		}
	});

	$(document).on('click', '.load-more', function () {
		var elem = $(".main-comments > :hidden").length < 5 ? $(".main-comments > :hidden").length : 5;
		for (var i = 0; i < elem; i++) {
			$(".main-comments > :hidden:first").show();
		}
		visible = visible + elem;
		if (visible == $(".sort-coms").length) {
			$(this).addClass("end-coms").prop("disabled", true).find("span").html("Laden...");
		}
	});

	$("textarea").keyup(function () {
		var text_length = $(this).val().length;
		text_length <= 0 ? $(".comment-button-right button").addClass("disabled").prop("disabled", true) : $(".comment-button-right button").removeClass("disabled").prop("disabled", false);
		text_remaining = 6 - text_length;
		$(".comment-button-left p").html("Schrijf nog " + text_remaining + " tekens om te posten op Facebook");
		if ($(".comment-button-left [type=checkbox]").is(":checked")) {
			if (text_remaining <= 0) {
				$(".comment-button-left p").hide();
				$(".comment-button-right button").removeClass("disabled").prop("disabled", false);
			} else {
				$(".comment-button-left p").show();
				$(".comment-button-right button").addClass("disabled").prop("disabled", true);
			}
		}
	});

	$(".comment-button-right button").on('click', function () {
		alert("Reacties zijn uitgeschakeld door de auteur.")
	});

	$(".comment-meta button").on('click', function () {
		alert("Actie verboden. Je bent niet geauthenticeerd.");
	});
});
