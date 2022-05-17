cities = [
    {naziv : 'Podgorica',
    regija: 'Centralna',
    brStanovnika: 150000,
    znamenitosti: ['Sahat Kula', 'Milenijum', 'Hram Hristovog Vaskrsenja'],
    slika: 'https://th.bing.com/th/id/OIP.VabXnjSznNpcI9sOKiLb2AHaFj?pid=ImgDet&rs=1'},
    {naziv : 'Niksic',
    regija: 'Centralna',
    brStanovnika: 15000,
    znamenitosti: ['Kraljevski most', 'Pivara', 'Jezero Krupac'],
    slika: 'https://th.bing.com/th/id/OIP.IfbddPxPnEy2VXHGGJcfmwAAAA?pid=ImgDet&rs=1'},
    {naziv: 'Bijelo Polje',
    regija: 'Sjeverna',
    brStanovnika: 15000,
    znamenitosti: ['Zavicajni muzej', 'crkva Svetih apostola Petra i Pavla', 'Kiselak '],
    slika: 'https://www.aktuelno.me/wp-content/uploads/2019/01/bijelo-polje-2.jpg'},
    {naziv : 'Berane',
    regija: 'Sjeverna',
    brStanovnika: 5000,
    znamenitosti: ['manastir Đurđevi stupovi', 'Jasikovac', 'Vasove vode'],
    slika: 'https://th.bing.com/th/id/R.f39331666cd59700756de9f465a54cb2?rik=%2fHpo8QT4bAVxhg&riu=http%3a%2f%2fwww.mojacrnagora.com%2fwp-content%2fuploads%2f2014%2f01%2fmcg-slika-dana-2014-01-18-berane-ribo-raicevic.jpg&ehk=3Pasvv5xI3mIhMKkfL4JF79NZxL9P5JIoPADikr%2bfZQ%3d&risl=&pid=ImgRaw&r=0'},
    {naziv : 'Pljevlja',
    regija: 'Sjeverna',
    brStanovnika: 10000,
    znamenitosti: ['Manastir Sv. Trojica', 'Kukanj', 'Crkva Svetog Ilije'],
    slika: 'https://www.vodovodpljevlja.com/wp-content/uploads/2016/06/slika-pljevlja.jpg'},
    {naziv : 'Kotor',
    regija: 'Juzna',
    brStanovnika: 7000,
    znamenitosti: ['Vrata od mora', 'Gradski toranj sa satom', 'Trg od Oružja'],
    slika: 'https://kasadoo.com/assets/site/images/Montenegro/Kotor/Palaces/The-Vrakjen-Palace/palata-vrakjen-kotor.jpg'},
    {naziv : 'Herceg Novi',
    regija: 'Juzna',
    brStanovnika: 10000,
    znamenitosti: ['Manastirski Savina', 'Trg Belavista', 'Tvrđava Kanli kula'],
    slika: 'https://www.funtravelnis.rs/wp-content/uploads/2018/01/DSC_0492.jpg'}
];



function insertDataInTable(){
    sortArray();
    let data = [];

    cities.forEach((element,id) => {

        let pomData = [`<ol>`];
        element.znamenitosti.forEach((elem) =>{
            pomData.push(`<li>${elem}</li>`)
        });
        pomData.push(`</ol>`);

        if((id+1)%2 == 0){
        data.push(`
        <div class="col-2 bgGray marginTop1">${id+1}</div>
        <div class="col-2 bgGray marginTop1"><a href = "https://en.wikipedia.org/wiki/${element.naziv}" target = "_blank">${element.naziv}</a></div>
        <div class="col-2 bgGray marginTop1">${element.regija}</div>
        <div class="col-2  bgGray marginTop1">${element.brStanovnika}</div>
        <div class="col-2 bgGray marginTop1">${pomData.join('')}</div>
        <div class="col-2  bgGray marginTop1"><img src = '${element.slika}' height = 100px weight = 190px></div>
    `)}
    else{
        data.push(`
        <div class="col-2 marginTop1">${id+1}</div>
        <div class="col-2 marginTop1"><a href = "https://en.wikipedia.org/wiki/${element.naziv}" target = "_blank">${element.naziv}</a></div>
        <div class="col-2 marginTop1">${element.regija}</div>
        <div class="col-2 marginTop1">${element.brStanovnika}</div>
        <div class="col-2 marginTop1">${pomData.join('')}</div>
        <div class="col-2 marginTop1"><img src = '${element.slika}' height = 100px weight = 190px></div>
    `)}
    });

    document.getElementById('red').innerHTML = data.join('');
}


function sortArray(){
    cities.sort((a, b) => {
        let fa = a.naziv.toLowerCase(),
            fb = b.naziv.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
}


insertDataInTable();