window.addEventListener("load", function() {

	const sheet = window.document.styleSheets[0];

	sheet.insertRule(`.icon-lg {
		height: 20px !important;
		font-size: 15px !important;
		line-height: 24px !important;
		width: 38px !important;
	}`, 0);

	sheet.insertRule(`#header {
		height: 21px !important;
		padding: 7px 5px 9px 78px !important;
	}`, 0);

	sheet.insertRule(`.header-btn {
		height: 23px !important;
		line-height: 23px !important;
		min-width: 38px !important;
	}`, 0);

	sheet.insertRule(`.header-btn-icon {
		line-height: 23px !important;
	}`, 0);

	sheet.insertRule(`.header-logo,.header-user {
		top: 7px !important;
	}`, 0);

	sheet.insertRule(`.header-logo {
		margin-top: -3px !important;
	}`, 0);
	sheet.insertRule(`input[type=text].header-search-input {
		height: 23px !important;
		min-height: 23px !important;
	}`, 0);
});