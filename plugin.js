"use strict";

module.export = function (_ref) {
	var t = _ref.types;

	return {
		visitor: {
			VariableDeclarator: function VariableDeclarator(path) {
				if (path.node.init.value === false) {
					path.node.init.value = true;
				} else if (path.node.init.value === true) {
					path.node.init.value = false;
				}
			}
		}
	};
};
