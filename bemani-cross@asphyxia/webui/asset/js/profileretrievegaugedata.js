$(document).ready(async function() {
	/*
	- LDJ: beatmania IIDX
	- KFC: SOUND VOLTEX
	- M32: GITADORA
	- MDX: DanceDanceRevolution
	- REC: DANCERUSH
	- L44: jubeat
	- PAN: ノスタルジア (Nostalgia)
	- M39: pop'n music
	*/
	var refid
	var ldjData = kfcData = m32Data = mdxData = recData = l44Data = panData = m39Data = []
	var gameInfo = {
		'ldj': {
			'name': 'beatmania IIDX 30 RESIDENT'
		},
		'kfc': {
			'name': 'SOUND VOLTEX EXCEED GEAR'
		},
		'm32': {
			'name': 'GITADORA HIGH-VOLTAGE'
		},
		'mdx': {
			'name': 'DanceDanceRevolution A3'
		},
		'rec': {
			'name': 'DANCERUSH STARDOM'
		},
		'l44': {
			'name': 'jubeat Ave.'
		},
		'pan': {
			'name': 'ノスタルジア Op.3'
		},
		'm39': {
			'name': 'pop\'n music UniLab'
		},

	}

	async function dbCall(pluginName) {
		if(pluginName != '') {
			return await axios.post(
			    '/data/db',
			    {
			      command: 'Find',
			      plugin: pluginName,
			      args: [refid, {collection: 'gmz-2022-log'}],
			    },
			    { timeout: 10000 }
		    )
		}
		return []
	}



	function retrieveData() {
		ldjData = dbCall($('#ldjPlugin').text())
		kfcData = dbCall($('#kfcPlugin').text())
		m32Data = dbCall($('#m32Plugin').text())
		mdxData = dbCall($('#mdxPlugin').text())
		recData = dbCall($('#recPlugin').text())
		l44Data = dbCall($('#l44Plugin').text())
		panData = dbCall($('#panPlugin').text())
		m39Data = dbCall($('#m39Plugin').text())
		return processData()
	}

	function processData() {
		let newData = formatGameData('ldj', ldjData).concat(
			formatGameData('kfc', kfcData),
			formatGameData('m32', m32Data),
			formatGameData('mdx', mdxData),
			formatGameData('rec', recData),
			formatGameData('l44', l44Data),
			formatGameData('pan', panData),
			formatGameData('m39', m39Data)
		)
		return newData.sort((a,b)=> (a.start_date < b.start_date ? 1 : -1))
	}
	
	function formatGameData(gameCode, gameData) {
		formattedData = []
		if(gameData.data != []) {
			for(let index in gameData.data) {
				let start_date = new Date(gameData.data[index].start_date * 1000)
				gameData.data[index].game = gameInfo[gameCode].name
				gameData.data[index].start_date_string = start_date.toLocaleString()
				formattedData.push(gameData.data[index])
			}
		}
		return formattedData
	}

    $("#search-data").click(async function() {
    	$("#points-list").DataTable().destroy()
    	refid = $('#refid-input').val()
	    newData = retrieveData()
	    console.log(newData)
	    $('#points-list').DataTable({
            data: newData,
            columns: [
                { data: 'start_date_string' },
                { data: 'game' },
                { data: 'mode' },
                { data: 'points' }
            ],
            columnDefs: [

            ],
            searching: false,
            ordering: false,
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.modal({
                        header: function(row) {
                            var data = row.data();
                            return 'Details for ' + data.songname;
                        }
                    })
                }
            },

        });
	})
})