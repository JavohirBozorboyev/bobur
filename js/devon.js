const list = document.querySelector("#list");

const sher = [
  {
    title: "Keltursa yuz baloni oʼshal bevafo manga",
    content: `
    Kelsun, agar yuzumni evursam, balo manga.
Netkaymen, ul rafiq bilakim, qilur base –
Mehru vafo – raqibgʼa, javru jafo – manga?
Begona boʼlsa aql meni telbadin, ne tong,
Chun boʼldi ul pari sifatim oshno manga.
Ohu yoshimdin ortadurur zaʼf, ey tabib,
Bildim yarashmas emdi bu obu havo manga.
Dardim koʼrub muʼolajada zoye' etma umr
Kim, jonda dardi ishqdurur bedavo manga.
To yor kimni istaru koʼnglina kim yoqar,
Tashvish bejihatdurur oxir sango, manga.
Bobur, boʼlubturur ikki koʼzum yoʼlida toʼrt,
Kelsa ne boʼldi qoshima bir-bir mango-manga.`,
    type: "gazal",
  },
  {
    title: `Ne ko‘ray to‘bini qaddi xushxiroming borida?`,
    content: `
    Ne qilay sunbulni xatti mushkfoming borida?!
Kim Xizr suyin og‘izlag‘ay labingning qoshida?!
Kim Masih alfozidin degay kaloming borida?!
Oshiqingni davlatin vasling bila qil muhtaram,
Husn ahli ichra muncha ehtiroming borida.
Bizdin ayru doim el birla icharsen bodani,
Bizni ham gohi sog‘in, shurbi mudoming borida.
Ey ko‘ngul, gar g‘ayr so‘zi zahri qotildur, ne g‘am?!
Lablaridin sharbati «yuhyil-’izom»ing borida.
Tarki nomus aylabon badnom bo‘lg‘il ishq aro,
Kim seni oshiq degay nomusu noming borida?!
Bobur, ul gul ko‘yida bulbul kibi topting maqom,
Bir navoe rost qil mundoq maqoming borida.`,
    type: "gazal",
  },
  {
    title: `Chun falak qo‘ymas meni bir lahza vasl ayyomida ...`,
    content: `
    Tong yo‘q, ey bemehr, agar o‘lsam firoqing shomida.
Ey ko‘ngul, yuzin ko‘rub, zulfi parishonin sog‘in,
Shomi hijrondin tavahhum ayla vasl ayyomida.
Zulfidakim maskan etting, ko‘r zanaxdon chohini,
Voqif o‘lg‘ilkim, erursen ajdahoning komida.
G‘unchadek og‘zing g‘ami ko‘nglumda gar yo‘q, bas nedur
Chok ko‘nglum hay’ati gul g‘unchasi andomida?
Yorning payg‘omidin topti tani farsuda jon,
Iyso e’jozi magar muzmardurur payg‘omida.
Bobur, ul gul zulfi ostinda emastur xollar,
Jon qushin sayd aylar uchun donalardur domida.`,
    type: "gazal",
  },
  {
    title: `Yog‘lig‘ingkim, jon bila men xastadurmen, zor anga,`,
    content: `
   Xasta jonlar rishtasidindur magar har tor anga.
Evrulur boshingg‘au gohi yuzunga yuz qo‘yar,
Bu jihatdin ot emish «gulpech»u gah «gulzor» anga.
Bir chamandur sahnikim, bo‘lg‘ay binafsha sarbasar,
Tegrasi gulzordurkim, bo‘lmag‘ay bir xor6 anga.
Yog‘lig‘ing tokim yuzu ko‘zungga tegmish, bordurur
Yuz meningdek zoru yuz ming men kibi bemor anga.
Ey ko‘ngul, yuz pora qilsa yor tig‘i, g‘am yema,
Lutf etib, gar bog‘lar o‘lsa yog‘lig‘ini yor anga.
Ko‘nglum istar yog‘lig‘ingni, balki andin bir nasim –
Yetsa Boburg‘a, erur jon birla minnatdor anga.`,
    type: "gazal",
  },
  {
    title: `Ul parining tig‘idin qo‘rqutma meni, ey raqib,`,
    content: `
   Ishqida boshimg‘a mening har ne kelsa, yo nasib!
Evrulub boshingg‘a, ey oy, qilmisham tarki vatan,
Rahm qilg‘il mangakim, sargashtadurmen, ham g‘arib.
Telba bo‘lmoqlig‘din o‘zga chorae yo‘qtur manga,
Ul pariro‘ nogahon ar chiqsa uydin yosanib.
Jonda berkitgan o‘qin chekmak manga ranjedurur,
Qo‘yg‘il ul o‘qni, chekay deb ranj chekma, ey tabib.
Boburo, hargiz quloq she’ringg‘a ul gul solmadi,
Gulga ne parvoki, yuz faryod qilsa andalib.`,
    type: "gazal",
  },
  {
    title: `Eshigingg‘a bosh urarmen telbalar yanglig‘ yurub,`,
    content: `
   Ey pari, yo‘l ber visolingg‘aki, ketmay bosh urub.
Sarv qadding borida o‘z qaddini chun qildi vasf,
O‘tqa yoqti bog‘bon sarvi sihisin sindurub.
O‘lturub erdi, qo‘pub ketmakka chun azm ayladi,
Yona tirguzdi meni, Alhamdulillah, o‘lturub.
Topshurub erdim ko‘ngulni yorg‘a, chun bordi yor,
Hamdam ettim xasta ko‘nglumni Xudog‘a topshurub.
Ko‘zlari sayd aylar uchun telba ko‘nglumni mening –
Qoshi yosini qurub, kirpik o‘qini to‘ldurub.
To sabo zulfini ul gulning parishon ayladi,
Jon bila aqlu ko‘ngulni yelga berdim sovurub.
Bo‘ynuma zanjiri g‘am, yo bo‘g‘zuma tig‘i sitam,
Har ne kelsa ishq yo‘lida turubmen telmurub.
Men bilurmen ko‘zi qotil, la’li jonbaxsh erkanin,
Chunki, Bobur, hajrida ko‘p yig‘ladim og‘zim qurub.`,
    type: "gazal",
  },
  {
    title: `G‘ofil o‘lma, ey soqiy, gul chog‘in g‘animat tut,`,
    content: `
  Vaqti aysh emas boqiy, ol chog‘ir, ketur, bat tut!
Bu nasihatim tingla: ne bo‘lur kishi yongla,
Ne bo‘lur ekin tongla, sen bu kun g‘animat tut!
G‘ofil o‘lma davlatta, o‘zni solma mehnatta,
Tangri berur albatta, davlat ista, himmat tut!
Xushturur visoli yor, anda bo‘lmasa dayyor,
Bo‘lsa vasl beag‘yor davlatu saodat tut!
G‘am cheriki behaddur, chorasi budur, Bobur,
Bodani ko‘mak keltur, jomni himoyat tut!`,
    type: "gazal",
  },
  {
    title: `Ey yuzi nasrin, qomati shamshod,`,
    content: `
  Necha qilursen jonima bedod?
Sen kibi purkor, shevasi bisyor,
Bilmadi, ey yor, hech kishi yod.
Javrda nodir, zulmda mohir,
Ishvada qodir, g‘amzada ustod.
Yor g‘amidin, hajr alamidin,
Sabr kamidin nolayu faryod.
Boburi bedil, ey buti qotil,
Javrunga moyil, zulmunga mo‘tod.`,
    type: "gazal",
  },
  {
    title: `Shoh Sulton Uvays binni Mahmud,`,
    content: `
 Moh Sulton Uvays binni Mahmud.
Qaddu og‘zingdin ayru tortarmen –
Oh, Sulton Uvays binni Mahmud.
Meni yod ayla bazmi ishqingda
Goh, Sulton Uvays binni Mahmud.
Xushturur hamrahim agar sensen –
Roh, Sulton Uvays binni Mahmud.
Podshahdur agarchi Bobur lek,
Shoh Sulton Uvays binni Mahmud`,
    type: "gazal",
  },
  {
    title: `Baloyi ishqki, har dam manga jafoyedur,`,
    content: `
 Bu ishqdin kecha olmon ajab baloyedur.
Xati labig‘a tutash bo‘lsa, ey ko‘ngul, ne ajab,
Ki, Xizr chashmayi hayvong‘a rahnamoyedur.
Yarar bu xasta ko‘ngul dardig‘a o‘qin yarasi,
Magarki har yarasi yorning davoyedur.
Bahor fasliduru may havosi boshimda,
Ayoqtut manga, soqiyki, xush havoyedur.
Ul oy raqibg‘a bo‘ldi rafiqu Boburning
Rafiqu hamdami hajrida ohu voyedu.`,
    type: "gazal",
  },
  {
    title: `Yangi oy yor yuzi birla ko’rub el shod bayramlar,`,
    content: `
Manga yuzu qoshingdin ayru bayram oyida g’amlar.
Mening bu tori mo’ yanglig’ tanimg’a toblar soldi
Ul oyning yuzida sunbul kibi zulfidag’i xamlar.
Havog’a dudi ohin tutratur ishq ahli g’ayratdin,
Sabo tahrikidin har gah parishon bo’lsa parchamlar.
Ochildi zulfiyu xaylar namudor o’ldi yuzinda,
Gul uzra chun bo’lur paydo kecha ochilsa shabnamlar.
Menu g’am kunjiyu ohu fig’oni ashku xunolud,
Ne xushdur go’shayi xoliy, mayi sofiyu hamdamlar.
Ko’ngulni ishq buzdi, ne osig’ pandu nasihatdin,
Mening majruh ko’nglumga yarashmas ushbu marhamlar.
Yuzi navro’zi, asli iydni Bobur g’animat tut
Ki, mundin yaxshi bo’lmas bo’lsa yuz navro’zu bayramlar.`,
    type: "gazal",
  },
  {
    title: `O‘zni, ko‘ngul, aysh bilan tutmoq kerak,`,
    content: `
Bizni unutqonni unutmoq kerak.
Aysh-u tarab gulbunig’a suv berib,
G’ussa niholini qurutmoq kerak.
Tiyra turur zuhd damidin ko‘ngul,
Ishq o‘ti birla yorutmoq kerak.
Har nimag’a g’am yema, g’am ko‘p turur,
Aysh bila o‘zni ovutmoq kerak.
Qo‘yma mashaqqat aro, Bobur, ko‘ngul,
O‘zni farog’at bila tutmoq kerak.`,
    type: "gazal",
  },
  {
    title: `Xazon yafrog’i yanglig’ gul yuzung hajrida sarg’ardim`,
    content: `
Kо’rub rahm aylagil, ey lola rux, bu chehrayi zardim.
Sen, ey gul, qo‘ymading sarkashligingni sarvdek hargiz,
Ayog’ingg’a tushib, bargi xazondek muncha yolbordim.
Latofat gulshanida gul kabi sen sabz-u xurram qol,
Men archi dahr bog’idin xazon yaprog’idek bordim.
Xazondek qon yoshim sorig’ yuzumdin el tanaffurda,
Bahar range, bihamdilloh, ulusdin o‘zni qutqordim.
Ne toledur mangakim, axtari baxtim topilmaydur,
Falak avroqini har nechakim daftardin axtardim.
Ulusning ta’n-u ta’rifi manga, Bobur, barobardur,
Bu olamda o‘zumni chun yamon-yaxshidin o‘tkardim.`,
    type: "gazal",
  },
  {
    title: `O‘lum uyqusig’a borib jahondin bo‘ldum osuda,`,
    content: `
Meni istasangiz, ey do‘stlar, ko‘rgaysiz uyquda.
Nekim taqdir bo‘lsa, ul bo‘lur tahqiq bilgaysiz,
Erur jang-u jadal, ranj-u riyozat barcha behuda.
O‘zungni shod tutqil, g’am yema dunyo uchun zinhor,
Ki, bir dam g’am yemakka arzimas dunyoyi farsuda.
Zamona ahli ichra, ey ko‘ngul, oyo topilg’aymu,
Seningdek dard paymo-vu meningdek dard paymuda.
Ulusdin tinmadim umrimda hargiz lahzaye, Bobur,
Magar o‘lsam bu olam ahlidin bo‘lg’aymen osuda.`,
    type: "gazal",
  },
  {
    title: `Charxning men ko‘rmagan jabr-u jafosi qoldimu?!`,
    content: `
Xasta ko‘nglum chekmagan dard-u balosi qoldimu?!
Meni xor etti-yu qildi muddaiyni parvarish,
Dahri dunparvarning o‘zga muddaosi qoldimu?!
Meni o‘lturdi jafo-yu javr birla ul quyosh,
Emdi turguzmak uchun mehr-u vafosi qoldimu?!
Oshiq o‘lg’och ko‘rdum o‘lumni o‘zumga, ey rafiq,
O‘zga ko‘nglumning bu olamda harosi qoldimu?!
Ey ko‘ngul, gar Bobur ul olamni istar, qilma ayb,
Tengri uchun de bu olamning safosi qoldimu?!`,
    type: "gazal",
  },
  {
    title: `Kim ko‘rubdur, ey ko‘ngul, ahli jahondin yaxshilig‘,`,
    content: `
Kimki, ondin yaxshi yo‘q, ko‘z tutma ondin yaxshilig‘.
Gar zamonni nayf qilsam ayb qilma, ey rafiq,
Ko‘rmadim hargiz, netoyin, bu zamondin yaxshilig‘!
Dilrabolardin yomonliq keldi mahzun ko‘ngluma,
Kelmadi jonimg’a hech oromi jondin yaxshilig’.
Ey ko‘ngul, chun yaxshidin ko‘rdung yamonliq asru ko‘p,
Emdi ko‘z tutmoq ne ma’ni har yamondin yaxshilig’?
Bori elga yaxshilig’ qilg’ilki, mundin yaxshi yo‘q,
Kim, degaylar dahr aro qoldi falondin yaxshilig!
Yaxshilig’ ahli jahonda istama Bobur kibi,
Kim ko‘rubdur, ey ko‘ngul, ahli jahondin yaxshilig’?`,
    type: "gazal",
  },
  {
    title: `Ne xush bo‘lg’ayki, bir kun uyquluq baxtimni uyg’otsam,`,
    content: `
Kechalar tori mo‘yidek belig’a chirmashib yotsam.
Gahi guldek yuzini ul shakar so‘zlukni islasam,
Gahi shakkar kibi ul yuzi gulning la’lidin totsam.
Qani Shirin bila Layliki sendin noz o‘rgansa,
Qani Farhod-u Majnunkim, alarg’a ishq o‘rgatsam.
Yoruq kunduz, qorong’u kechada anjum kibi bo‘lgay,
Chekib gar oh dudini ko‘ngul o‘tini titratsam.
Ko‘zum ravshanlig’ida bo‘lg’ay, Bobur, base kamliq,
Agar qoshi bila yuzun hilol-u kunga o‘xshatsam.

`,
    type: "gazal",
  },
  {
    title: `Sochining savdosi tushti boshima boshdin yana,`,
    content: `
Tiyra bo‘ldi ro‘zg’orim ul qaro qoshdin yana.
Men xud ul tifli parivashg’a ko‘ngul berdim, vale,
Xonumonim nogahon buzulmag’ay boshdin yana.
Yuz yomonliq ko‘rub ondin telba bo‘ldung, ey ko‘ngul,
Yaxshilig’ni ko‘z turarsen ul parivashdin yana.
Tosh urar atfol mani, uyida forig‘ ul pari,
Telbalardek qichqirurmen har zamon toshdin yana.
Oyog’im yetgancha Boburdek ketar erdim, netay,
Sochining savdosi tushti boshima boshdin yana

`,
    type: "gazal",
  },
  {
    title: `Ko‘ngulga bo‘ldi ajoyib balo qaro soching,`,
    content: `
Shikasta ko‘ngluma ermish qaro balo soching.
Muyassar o‘ldi junun mulki, ey junun ahli,
Nisori ashkni emdi bu kun mango soching.
Soching shikastida bordur shikasta ko‘ngullar,
Ko‘ngullar ochilur, ochilsa ul qaro soching.
Ochildi ko‘ngli, chu ochting sochingni, Boburning,
Ne ayb, agar desa dilband-u dilkusho soching.

`,
    type: "gazal",
  },
  {
    title: `Baloyi ishqki, har dam manga jafoyedur,`,
    content: `
Bu ishqdin kecha olmon ajab baloyedur.
Xali labig’a tutash bo‘lsa, ey ko‘ngul, ne ajab,
Ki Xizr chashmayi hayvong’a rahnamoyedur.
Yarar bu xasta ko‘ngul dardig’a o‘qin yarasi,
Magarki har yarasi yorning davoyedur.
Bahor faslidur-u may havosi boshimda,
Ayoq tut menga, soqiyki, xush havoyedur.
Ul oy raqibg’a bo‘ldi rafiq-u Boburning,
Rafiq-u hamdami hajrinda oh-u voyedur.

`,
    type: "gazal",
  },
];

const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");

function updateList(search) {
  list.innerHTML = "";

  sher
    .filter((fill) => fill.title.toLowerCase().includes(search.toLowerCase()))
    .forEach((item) => {
      list.innerHTML += `
      <div class="bg-gray-100 p-5 py-6 rounded-md cursor-pointer ">
          <h1 class="text-xl">
              ${item?.title}
          </h1>
          <div class="mt-4 text-gray-700">
             ${item?.content}
          </div>
          <div class="flex justify-end mt-2">
              <h1 class="bg-teal-400 p-1 px-4 rounded-md text-white">${
                item?.type == "gazal" ? "G'azal" : "She'r"
              } </h1>
          </div>
      </div>
      `;
    });
}
inp.addEventListener("input", (e) => {
  const search = e.target.value;
  updateList(search);
});

updateList("");
