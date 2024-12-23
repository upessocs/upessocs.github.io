const host = `https://upes-win-pg.tail9f300.ts.net`

// const host = `https://dell-i7.tail9f300.ts.net`
const apiurl = `${host}/api/marks/`


async function reload(){
    append(appheader,gen(h3,"title","Marks for Preview Only","title"),"o")

append(appmain, gen("section", "hero", gen("h1", "", "Marks Preview"), 'section container'), 'over')

append(hero,gen(div,"marksmain"))


append(marksmain,gen(span,"","Select subject/batch  ",""))
append(marksmain,gen(select,"subject","",""))
subject.type="radio"
var subjectlist = "python,soft computing,major project 1".split(",")
subjectlist.forEach((s)=>{
    append(subject,gen(option,s,s))
})



append(marksmain,gen(span,"","Enter sapid  ",""))
append(marksmain,gen(input,"sapid","",""))
append(marksmain,gen(button,"showmarks","Show Marks","",{"onclick":"getandshowmarks()"}))


setTimeout(() => {
    GeneratorWebHelper().init()
}, 1000)
}

reload()



async function getandshowmarks(){
    var sub=grab("#subject")[0].value
    var sap=grab("#sapid")[0].value
    var requesturl = `${apiurl}${sub}/${sap}`


    var dummydata={
        "MID":10,
        "IA":10,
        "END":50    
    }

    var resp = await fetch(requesturl)

    //success
    if (resp.status == "200"){
        console.log(resp.ok)
        console.log(resp.status)
        
        const data = await resp.json()
        // console.log(data)
        // console.log(resp.headers)

        append(marksmain,"","o")

        //show data
        for(const [key,val] of Object.entries(data)){   
            //log(key)
            //log(val)

            append(marksmain,gen(span,"",key,"key"))
            append(marksmain,gen(span,"",val,"val"))
    }



    append(marksmain,gen(button,"reloadbtn","Reload","",{"onclick":"reload()"}))
    }










    //error
    if (resp.status != "200"){

        var dummydata={
            "Status":resp.status,
            "Result":`Result Not Available for Said ${sap}`
        }
        console.log(resp.content)

        append(marksmain,"","o")

        //show data
        for(const [key,val] of Object.entries(dummydata)){   
            //log(key)
            //log(val)

            append(marksmain,gen(span,"",key,"key"))
            append(marksmain,gen(span,"",val,"val"))
    }



        append(marksmain,gen(button,"reloadbtn","Reload","",{"onclick":"reload()"}))
    }

    return data
}

var marksscss = `
#marksmain{
display:grid;
grid-gap:1em;
grid-template-columns:200px 1fr;


}



input,select,option{
    text-transform:capitalize;
    padding:.2em;
}

.key{
    text-transform:uppercase;
}
`

loadscss(marksscss)




