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

	function processData() {
		let newData = []
		if(ldjData.data != []) {
			for(let index in ldjData.data) {
				let start_date = new Date(ldjData.data[index].start_date * 1000)
				ldjData.data[index].game = 'beatmania IIDX 30 RESIDENT'
				ldjData.data[index].start_date_string = start_date.toLocaleString()
				newData.push(ldjData.data[index])
			}
		}
		if(kfcData.data != []) {
			for(let index in kfcData.data) {
				let start_date = new Date(kfcData.data[index].start_date * 1000)
				kfcData.data[index].game = 'SOUND VOLTEX EXCEED GEAR'
				kfcData.data[index].start_date_string = start_date.toLocaleString()
				newData.push(kfcData.data[index])
			}
		}
		
		if(m32Data.data != []) {
			for(let index in m32Data.data) {
				let start_date = new Date(m32Data.data[index].start_date * 1000)
				m32Data.data[index].game = 'GITADORA HIGH-VOLTAGE'
				m32Data.data[index].start_date_string = start_date.toLocaleString()
				newData.push(m32Data.data[index])
			}
		}
		
		if(mdxData.data != []) {
			for(let index in mdxData.data) {
				let start_date = new Date(mdxData.data[index].start_date * 1000)
				mdxData.data[index].game = 'DanceDanceRevolution A3'
				mdxData.data[index].start_date_string = start_date.toLocaleString()
				newData.push(mdxData.data[index])
			}
		}
		
		if(recData.data != []) {
			for(let index in recData.data) {
				let start_date = new Date(recData.data[index].start_date * 1000)
				recData.data[index].game = 'DANCERUSH STARDOM'
				recData.data[index].start_date_string = start_date.toLocaleString()
				newData.push(recData.data[index])
			}
		}
		
		if(l44Data.data != []) {
			for(let index in l44Data.data) {
				let start_date = new Date(l44Data.data[index].start_date * 1000)
				l44Data.data[index].game = 'jubeat Ave.'
				l44Data.data[index].start_date_string = start_date.toLocaleString()
				newData.push(l44Data.data[index])
			}
		}
		
		if(panData.data != []) {
			for(let index in panData.data) {
				let start_date = new Date(panData.data[index].start_date * 1000)
				panData.data[index].game = 'ノスタルジア Op.3'
				panData.data[index].start_date_string = start_date.toLocaleString()
				newData.push(panData.data[index])
			}
		}
		
		if(m39Data.data != []) {
			for(let index in m39Data.data) {
				let start_date = new Date(m39Data.data[index].start_date * 1000)
				m39Data.data[index].game = 'pop\'n music UniLab'
				m39Data.data[index].start_date_string = start_date.toLocaleString()
				newData.push(m39Data.data[index])
			}
		}

		return newData.sort((a,b)=> (a.start_date < b.start_date ? 1 : -1))
	}

    $("#search-data").click(async function() {
    	$("#points-list").DataTable().destroy()
    	refid = $('#refid-input').val()
    	kfcData = await axios.post(
		    '/data/db',
		    {
		      command: 'Find',
		      plugin: 'sdvx@asphyxia',
		      args: [refid, {collection: 'gmz-2022-log'}],
		    },
		    { timeout: 10000 }
	    )

	    newData = processData()
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