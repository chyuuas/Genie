function searchNumber() {
    const input = document.getElementById('search-bar').value;
    const pages = {
        "1022": "../modelpages/1.html",
        "1024": "../modelpages/1.html",
        "1042": "../modelpages/1.html",

        "2022": "../modelpages/2.html",
        "2024": "../modelpages/2.html",
        "2027": "../modelpages/2.html",
        "2042": "../modelpages/2.html",

        "1028": "../modelpages/3.html",
        "1028H": "../modelpages/3.html",
        "2028": "../modelpages/3.html",
        "2028H": "../modelpages/3.html",

        "1128": "../modelpages/4.html",
        "1128B": "../modelpages/4.html",
        "2128": "../modelpages/4.html",
        "2128B": "../modelpages/4.html",

        "1035": "../modelpages/5.html",
        "1055": "../modelpages/5.html",
        "2036": "../modelpages/5.html",

        "2033": "../modelpages/6.html",
        "3053": "../modelpages/6.html",
        "3155": "../modelpages/6.html",
        "3155L": "../modelpages/6.html",
        "3155D": "../modelpages/6.html",
        "3155LD": "../modelpages/6.html",

        "2035": "../modelpages/7.html",
        "2055": "../modelpages/7.html",
        "3035": "../modelpages/7.html",
        "3055": "../modelpages/7.html",

        "3020H": "../modelpages/8.html",
        "3020HB": "../modelpages/8.html",

        "3120H": "../modelpages/9.html",
        "3120HB": "../modelpages/9.html",

        "3022": "../modelpages/10.html",
        "3024": "../modelpages/10.html",
        "3042": "../modelpages/10.html",

        "3124H": "../modelpages/11.html",
        "3142": "../modelpages/11.html",

        "4022": "../modelpages/12.html",
        "4024": "../modelpages/12.html",
        "4042": "../modelpages/12.html",

        "4124": "../modelpages/13.html",
        "4142": "../modelpages/13.html",

        "7035": "../modelpages/14.html",
        "7055": "../modelpages/14.html",

        "7053": "../modelpages/15.html",
        "7135": "../modelpages/15.html",
        "7155": "../modelpages/15.html",
        "7155L": "../modelpages/15.html",
        "7155D": "../modelpages/15.html",

        "PMX300": "../modelpages/16.html",
        "PMX300IC": "../modelpages/16.html",
        "PMX300IC-A": "../modelpages/16.html",
        "PMX300IC-B": "../modelpages/16.html",
        "PMX500": "../modelpages/16.html",
        "PMX500IC": "../modelpages/16.html",
        "PMX500IC-A": "../modelpages/16.html",
        "PMX500IC-B": "../modelpages/16.html",

        "PMX700": "../modelpages/17.html",
        "PMX1200": "../modelpages/17.html",
        "GPS700": "../modelpages/17.html",
        "GPS1200": "../modelpages/17.html",
        "GPS700IC": "../modelpages/17.html",
        "GPS1200IC": "../modelpages/17.html",

        "GCG350": "../modelpages/18.html",
        "PCG400": "../modelpages/18.html",
        "PCG600": "../modelpages/18.html",

        "GCG350L": "../modelpages/19.html",
        "PCG450": "../modelpages/19.html",
        "PCG650": "../modelpages/19.html",

        "GCG350ML": "../modelpages/20.html",
        "PCG500ML": "../modelpages/20.html",
        "PCG700ML": "../modelpages/20.html",

        "H2000C": "../modelpages/21.html",
        "2020CT": "../modelpages/21.html",
        "1020L": "../modelpages/21.html",
        "2020L": "../modelpages/21.html",

        "2562": "../modelpages/22.html",
        "2564": "../modelpages/22.html",
        "2568": "../modelpages/22.html",

        "3062": "../modelpages/23.html",
        "3064": "../modelpages/23.html",

        "3164": "../modelpages/24.html",

        "4062": "../modelpages/25.html",
        "4064": "../modelpages/25.html",

        "4063": "../modelpages/26.html",

        "4164": "../modelpages/27.html",

        "2060": "../modelpages/28.html",
        "3060": "../modelpages/28.html",
        "2060L": "../modelpages/28.html",
        "3060L": "../modelpages/28.html",

        "H4000": "../modelpages/29.html",
        "H6000": "../modelpages/29.html",

        "IS525": "../modelpages/30.html",
        "IS550": "../modelpages/30.html",
        "IS850": "../modelpages/30.html",
        "IS900": "../modelpages/30.html",
        "IS920": "../modelpages/30.html",
        "ISL920": "../modelpages/30.html",
        "ISL950": "../modelpages/30.html",
        "ISL980": "../modelpages/30.html",
        "IMS1000": "../modelpages/30.html",

        "Pro95": "../modelpages/31.html",
        "CM7600": "../modelpages/31.html",
        "CM8600": "../modelpages/31.html",
        "CM7600IC/A": "../modelpages/31.html",
        "CM8600IC/A": "../modelpages/31.html",
        "CM8600-FN": "../modelpages/31.html",

        "H8000": "../modelpages/32.html",
        "H8000-07": "../modelpages/32.html",
        "H8000D": "../modelpages/32.html",
        "ISD990": "../modelpages/32.html",
        "ISD995": "../modelpages/32.html",
        "ISD1000": "../modelpages/32.html",
        "PRO99": "../modelpages/32.html",
        "PRO99-2IC": "../modelpages/32.html",
        "PRO99FN": "../modelpages/32.html",
        "CMD9900": "../modelpages/32.html",

        "G": "../modelpages/33.html",
        "GX": "../modelpages/33.html",
        "GXL": "../modelpages/33.html",
        "CM7500": "../modelpages/33.html",
        "CM8500": "../modelpages/33.html",

        "6070H": "../modelpages/34.html",
        "6070H-B": "../modelpages/34.html",
        "6170H": "../modelpages/34.html",
        "6170H-B": "../modelpages/34.html",
        "6172H": "../modelpages/34.html",
        "6172H-B": "../modelpages/34.html",
        "6072": "../modelpages/34.html",


    };
    if (pages[input]) {
        window.location.href = pages[input];
    } else {
        alert("Page not found for this number. Please try another number.");
    }
}