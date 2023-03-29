const pageNotFoundMessages = [
	{
		one: "what are you doing here?",
		two: "go back. there is nothing here.",
	},
	{
		one: "what?",
		two: "looks like there is not much here. go back.",
	},
	{
		one: "a chinga?",
		two: "that was a very mexican reaction. you should go back since there is nothing here.",
	},
	{
		one: "...",
		two: "that is the sound of nothingness. maybe return?",
	},
	{
		one: "are you lost?",
		two: "a Disney employee asked me that once. now it's your turn.",
	},
	{
		one: "it's dark in here...",
		two: "let's go back to the light.",
	},
	{
		one: "looking for rizz?",
		two: "i got none. ha. go back.",
	},
	{
		one: "these are not the restrooms.",
		two: "look somewhere else.",
	},
	{
		one: "chinitas?",
		two: "no chinitas :c (you must go back now)",
	},
	{
		one: "need to be rescued?",
		two: "oh wait. you can go back easily.",
	},
	{
		one: "giving roses to an office aid on valentine's day?",
		two: "just don't. they will reject you 😭",
	},
	{
		one: "🎶 do you ever get a little bit tired of life? 🎶",
		two: "that's a song by Em Beihold. you should listen to it after you get back.",
	},
	{
		one: "what are you looking for?",
		two: "there is nothing here.",
	}
]

const option = Math.floor(Math.random() * pageNotFoundMessages.length);

console.log(pageNotFoundMessages[option].one);
console.log(pageNotFoundMessages[option].two);

document.getElementById('headerOne').textContent=`${pageNotFoundMessages[option].one}`;
document.getElementById('headerTwo').textContent=`${pageNotFoundMessages[option].two}`;