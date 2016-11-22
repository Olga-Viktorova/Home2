module.export = function({ types: t }) {
return {
	visitor: {
	            VariableDeclarator(path) {
	                if (path.node.init.value === false) {
	                    path.node.init.value = true;
	                } else if (path.node.init.value === true) {
	                    path.node.init.value = false;
	                }
	            }
	        }
	};
};