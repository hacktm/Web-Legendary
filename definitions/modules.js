/**
 * External modules
 */

// Real-time web tracking
INSTALL('module', 'https://modules.totaljs.com/webcounter/v1.00/webcounter.js', { url: '/webcounter/' });

// A simple DDOS protection
INSTALL('module', 'https://modules.totaljs.com/ddos/v1.00/ddos.js');

//Session module
var options = {
	timeout:'5 minutes'
};
INSTALL('module', 'https://modules.totaljs.com/session/v1.00/session.js', options);