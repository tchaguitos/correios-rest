'use strict';
/* eslint-disable import/no-dynamic-require, import/no-unresolved */
const process = require('process');

function getClosestVersion() {
	const version = parseFloat(process.versions.node);
	if (version >= 8) {
		if (!process.versions.v8) {
			// Assume compatibility with Node.js 8.3.0
			return 'v8-6.0';
		}

		const v8 = parseFloat(process.versions.v8);
		if (v8 >= 6.3) {
			return 'v8-6.3';
		}

		if (v8 >= 6.2) {
			return 'v8-6.2';
		}

		return `v8-6.0`;
	}

	// Node.js 6 is the minimal supported version.
	return '6';
}

module.exports = require(`./${getClosestVersion()}.json`);
