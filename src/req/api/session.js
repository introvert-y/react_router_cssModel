/**
 * 设置cookie
 * @param {string} cName key
 * @param {string} value value
 * @param {number} expiredays 日期天数
 */
export function setCookie(cName, value, expiredays) {
	const cookies = {
		[cName]: escape(value),
		path: "/"
	};
	if (expiredays) {
		const exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		cookies.expires = exdate.toGMTString();
	}
	document.cookie = Object.keys(cookies)
		.map(key => `${key}=${cookies[key]}`)
		.join(";");
}

/**
 * 获取cookie
 * @param {string} cName key
 */
export function getCookie(cName) {
	if (document.cookie.length > 0) {
		let cStart = document.cookie.indexOf(`${cName}=`);
		if (cStart !== -1) {
			cStart = cStart + cName.length + 1;
			let cEnd = document.cookie.indexOf(";", cStart);
			if (cEnd === -1) {
				cEnd = document.cookie.length;
			}
			return unescape(document.cookie.substring(cStart, cEnd));
		}
	}
	return "";
}

const cookieKey = "sessionId";
let sessionId = getCookie(cookieKey) || "";

/**
 * 获取session
 */
function getSession() {
	return sessionId;
}

/**
 * 设置session
 */
function setSession(val) {
	sessionId = val;
	setCookie(cookieKey, val);
}

export default {
	get: getSession,
	set: setSession
};
