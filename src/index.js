module.exports = function check(str, bracketsConfig) {
		let bufferStr = [];
		str.split("").forEach(function(element, index) {
			if(index == 0) {
				bufferStr.push(element);
				return 0;
			}
			let currentBracket = bracketsConfig.find(bracketType =>
				bufferStr[bufferStr.length - 1] == bracketType[0]);
			currentBracket = currentBracket && currentBracket[1];
			if(element != currentBracket){
				bufferStr.push(element);
			}
			
			else{
				bufferStr.pop();
			}
		});
	
		if(bufferStr.length == 0) return true;
		return false;
		
	}