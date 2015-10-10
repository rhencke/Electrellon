document.addEventListener("DOMContentLoaded", function() {
	const body = document.body;
	const css = document.createElement("style");

	css.appendChild(document.createTextNode(`

	.icon-lg {
		height: 22px;
		font-size: 15px;
		line-height: 24px;
		width: 37px;
	}

	#header {
		height: 22px;
		padding: 8px 5px 8px 78px;
   		box-shadow: 0 -1px 0 0 rgba(0,0,0,0.1) inset;
	}

	.header-btn {
		height: 22px;
		line-height: 22px;
		min-width: 37px;
	}

	.header-btn-icon {
		line-height: 22px;
	}

	.header-logo,.header-user {
		top: 8px;
	}

	.header-logo {
		margin-top: -3px;
	}

	input[type=text].header-search-input {
		height: 23px;
		min-height: 23px;
	}

	`));

	body.appendChild(css);

});