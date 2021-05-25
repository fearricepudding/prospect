<template

</template>

<script>
export default {
	data: function(){
		return {
			"emails": [
				{
					"subject": "Some important subject",
					"recieved": Date.now().toDateString(),
					"body": "body of this important message states stuff",
					"headers": {
						"to": "blah@blah.com",
						"from": "someone@from.co.uk",
						"date": Date.now().toDateString()
					}
				}
			],
			"test": "test"
		};
	}
}
</script>
<style>

</style>
