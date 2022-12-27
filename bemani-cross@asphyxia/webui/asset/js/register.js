$(document).ready(async function() {
	$("#profile-submit").click(async function(){
		console.log("START")
		findResult = await axios.post(
		    '/data/db',
		    {
		      command: 'Find',
		      plugin: 'bemani-cross@asphyxia',
		      args: [$("#profile-id").val(), {collection: 'profile'}],
		    },
		    { timeout: 10000 }
	    )

	    console.log(findResult.data)
	    if(findResult.data.length == 0) {
			let insertResult = await axios.post(
			    '/data/db',
			    {
			      command: 'Insert',
			      plugin: 'bemani-cross@asphyxia',
			      args: [$("#profile-id").val(), {collection: 'profile'}],
			    },
			    { timeout: 10000 }
		    )
		    console.log(insertResult)
	    }
	})
})