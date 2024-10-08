/**
* ==04-10-2024==
* ini file js untuk tugas
*/
let params = new URLSearchParams(document.location.search);
let reverse = params.get("reverse");
function hideSections(sections) {
    sections.forEach(anu => {
        const element = document.getElementById(anu);
        if (element) {
            element.style.display = "none";
            element.style.visibility = "hidden";
        } else {
            console.warn(`Element with ID '${anu}' not found.`);
        }
    });
}
        
if (reverse === 'Fahrenheit') {
    hideSections([
        "anu-Celcius"
    ]);
}else{
    hideSections([
        "anu-Fahrenheit"
    ]);    
}