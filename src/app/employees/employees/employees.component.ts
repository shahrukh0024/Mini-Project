import { Component, OnInit } from '@angular/core';
import { TEmp } from '../types/types_emp';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  emps:TEmp[] = [
        {
          "id": 1,
          "username": "ebahringer",
          "name": "Braulio Luettgen",
          "email": "kaela.turner@example.net",
          "gender": "Female",
          "designation": "Mean Stack Developer",
          "phone_number": "781.322.7616",
          "complete_address": "298 Edythe Harbors Suite 697\nLake Mathiasburgh, MN 28564-6386"
        },
        {
          "id": 2,
          "username": "moore.samanta",
          "name": "Christian Kessler",
          "email": "summer.koepp@example.com",
          "gender": "Male",
          "designation": "Freelancer",
          "phone_number": "509-549-9565",
          "complete_address": "8947 Howell Mountains\nSouth Kavon, VT 89670-8443"
        },
        {
          "id": 3,
          "username": "ewell.moen",
          "name": "Prof. Jacey Volkman DVM",
          "email": "kreiger.merlin@example.net",
          "gender": "Male",
          "designation": "SEO",
          "phone_number": "605-753-9834",
          "complete_address": "9034 Gulgowski Track\nKozeyfort, KS 56273"
        },
        {
          "id": 4,
          "username": "alayna.dooley",
          "name": "Jane Tremblay DVM",
          "email": "alta.white@example.org",
          "gender": "Male",
          "designation": "SEO",
          "phone_number": "+1-267-764-7713",
          "complete_address": "7397 Ibrahim Vista Suite 669\nDibbertstad, CT 97473"
        },
        {
          "id": 5,
          "username": "enader",
          "name": "Dr. Noah O'Conner DVM",
          "email": "vmorissette@example.org",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "+14588521197",
          "complete_address": "306 Borer Isle Apt. 009\nKrisview, MA 89790-8565"
        },
        {
          "id": 6,
          "username": "qrippin",
          "name": "Dr. Giovanna Jerde",
          "email": "zoie68@example.org",
          "gender": "Female",
          "designation": "CTO",
          "phone_number": "1-469-515-7308",
          "complete_address": "8102 Helen Meadow Apt. 802\nSouth Henry, AK 11483-6250"
        },
        {
          "id": 7,
          "username": "ebradtke",
          "name": "Cecil Kris",
          "email": "collier.samanta@example.net",
          "gender": "Male",
          "designation": "CEO",
          "phone_number": "1-440-857-4702",
          "complete_address": "8151 Shannon Stream\nEast Harmonchester, WI 79044"
        },
        {
          "id": 8,
          "username": "rhyatt",
          "name": "Jacques Flatley",
          "email": "brooks.corwin@example.net",
          "gender": "Female",
          "designation": "Freelancer",
          "phone_number": "+1 (863) 946-2072",
          "complete_address": "22227 Murazik Fort Suite 293\nRosariobury, MS 82445-9292"
        },
        {
          "id": 9,
          "username": "dewitt.walker",
          "name": "Prof. Mikel Marvin",
          "email": "amie.hettinger@example.com",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "251.728.3907",
          "complete_address": "7416 Solon Center\nWhitetown, GA 26640-5188"
        },
        {
          "id": 10,
          "username": "hayes.anahi",
          "name": "Dr. Pattie Denesik",
          "email": "hokuneva@example.com",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "1-650-931-7426",
          "complete_address": "84480 Wiley Harbor\nZoeberg, ID 95980-1064"
        },
        {
          "id": 11,
          "username": "tatum.ziemann",
          "name": "Guido Koss",
          "email": "loyce84@example.org",
          "gender": "Male",
          "designation": "Freelancer",
          "phone_number": "1-754-741-0854",
          "complete_address": "42642 Meda Tunnel Apt. 056\nLorenzburgh, MO 97000-9779"
        },
        {
          "id": 12,
          "username": "jakob86",
          "name": "Ms. Ava Crona",
          "email": "kunde.daisy@example.net",
          "gender": "Female",
          "designation": "Freelancer",
          "phone_number": "(504) 802-2840",
          "complete_address": "36255 Nicolette Orchard Suite 072\nAveryburgh, CA 76011-5660"
        },
        {
          "id": 13,
          "username": "witting.duncan",
          "name": "Mr. Dewayne Stark",
          "email": "cristopher.swaniawski@example.net",
          "gender": "Male",
          "designation": "Node Js Developer",
          "phone_number": "(810) 294-1757",
          "complete_address": "63774 Botsford Cove\nEast Christatown, SD 64848"
        },
        {
          "id": 14,
          "username": "nelson.bauch",
          "name": "Rod Rutherford",
          "email": "gschoen@example.org",
          "gender": "Female",
          "designation": "CTO",
          "phone_number": "908.775.7346",
          "complete_address": "385 Kenna Heights Apt. 215\nRolfsonhaven, NC 33106-6412"
        },
        {
          "id": 15,
          "username": "aiyana09",
          "name": "Carolina Kassulke",
          "email": "cortney.roberts@example.org",
          "gender": "Female",
          "designation": "Wordpress Developer",
          "phone_number": "651-239-4795",
          "complete_address": "773 Elenor Valley Suite 437\nWintheiserfort, IA 46408-6252"
        },
        {
          "id": 16,
          "username": "xkilback",
          "name": "Ardith Morar",
          "email": "loyal.pouros@example.org",
          "gender": "Female",
          "designation": "Designer",
          "phone_number": "406.979.8242",
          "complete_address": "51731 Terrell Falls Suite 582\nEast Madison, WV 91470"
        },
        {
          "id": 17,
          "username": "adell12",
          "name": "Janice Runte",
          "email": "qwatsica@example.net",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "1-352-268-1071",
          "complete_address": "77688 Watsica Common\nLake Rod, OK 29949"
        },
        {
          "id": 18,
          "username": "estel46",
          "name": "Chesley Walker",
          "email": "katelynn27@example.com",
          "gender": "Male",
          "designation": "PHP Developer",
          "phone_number": "+1 (630) 796-4391",
          "complete_address": "26011 Denis Via Suite 225\nMacejkovicmouth, ND 79760-3618"
        },
        {
          "id": 19,
          "username": "colin.schumm",
          "name": "Brock Hoeger",
          "email": "tromp.heidi@example.org",
          "gender": "Male",
          "designation": "Freelancer",
          "phone_number": "+19405628680",
          "complete_address": "6572 Abelardo Path Suite 907\nPacochamouth, TX 37181-5783"
        },
        {
          "id": 20,
          "username": "abernathy.urban",
          "name": "Tyrel Windler",
          "email": "modesta.boyer@example.org",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "667-383-7740",
          "complete_address": "5597 Dalton Streets Suite 783\nBeierhaven, CA 98469"
        },
        {
          "id": 21,
          "username": "casandra.franecki",
          "name": "Nichole Ward MD",
          "email": "xkerluke@example.com",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "+15599704325",
          "complete_address": "28327 Grant Tunnel\nCaroltown, NJ 80754"
        },
        {
          "id": 22,
          "username": "melba73",
          "name": "Reynold Koch",
          "email": "mskiles@example.net",
          "gender": "Female",
          "designation": "Node Js Developer",
          "phone_number": "501-601-4518",
          "complete_address": "240 Harvey Overpass Apt. 609\nNorth Alannaberg, OK 26165"
        },
        {
          "id": 23,
          "username": "forest.batz",
          "name": "Jean Ratke",
          "email": "cornell53@example.com",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "445.849.9337",
          "complete_address": "4869 Mollie Union\nPort Clarissatown, CO 39019"
        },
        {
          "id": 24,
          "username": "philip.gutmann",
          "name": "Mr. Joseph Haag V",
          "email": "therman@example.org",
          "gender": "Female",
          "designation": "Designer",
          "phone_number": "+18174960739",
          "complete_address": "7768 Nikolaus Ville\nBlockfort, WI 10431-8383"
        },
        {
          "id": 25,
          "username": "gillian11",
          "name": "Ahmed Moore",
          "email": "friesen.sylvan@example.net",
          "gender": "Female",
          "designation": "Mean Stack Developer",
          "phone_number": "1-838-307-6892",
          "complete_address": "715 Wyman Island Apt. 750\nHerzogville, WA 99334"
        },
        {
          "id": 26,
          "username": "olson.kristy",
          "name": "Alison Quitzon II",
          "email": "godfrey.ortiz@example.net",
          "gender": "Male",
          "designation": "Freelancer",
          "phone_number": "1-936-648-1777",
          "complete_address": "7361 Imogene Turnpike Suite 482\nMarjoryfort, MA 38638-3224"
        },
        {
          "id": 27,
          "username": "rwilkinson",
          "name": "Vanessa Heidenreich",
          "email": "onie.schinner@example.com",
          "gender": "Female",
          "designation": "Wordpress Developer",
          "phone_number": "(763) 748-3308",
          "complete_address": "964 Elvera Turnpike Apt. 693\nSouth Rodrickborough, MS 02008-4746"
        },
        {
          "id": 28,
          "username": "bertha.okuneva",
          "name": "Keshaun Russel",
          "email": "emilie.collier@example.com",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "+1 (551) 470-5106",
          "complete_address": "8509 Hermiston Lock Suite 154\nEast Kipstad, NV 08357-1365"
        },
        {
          "id": 29,
          "username": "alexys.leuschke",
          "name": "Cheyanne Langosh",
          "email": "thomas.wehner@example.org",
          "gender": "Female",
          "designation": "CEO",
          "phone_number": "+1.847.603.0265",
          "complete_address": "7230 Roob Plains Suite 585\nBlockton, OR 20150-8072"
        },
        {
          "id": 30,
          "username": "hallie10",
          "name": "Ms. Herminia Sporer",
          "email": "bert12@example.org",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "425.612.5936",
          "complete_address": "36238 Bechtelar Isle\nRosenbaumton, OR 18750"
        },
        {
          "id": 31,
          "username": "iheidenreich",
          "name": "Ernie Konopelski",
          "email": "qgibson@example.com",
          "gender": "Male",
          "designation": "Python Developer",
          "phone_number": "1-304-976-4191",
          "complete_address": "63988 Marge Gardens Suite 660\nHalliefurt, FL 35602-1522"
        },
        {
          "id": 32,
          "username": "fsauer",
          "name": "Kaya Bashirian",
          "email": "creola95@example.net",
          "gender": "Male",
          "designation": "CEO",
          "phone_number": "1-567-305-6025",
          "complete_address": "494 Parker Green\nNew Lenora, WA 84410-8940"
        },
        {
          "id": 33,
          "username": "lynch.briana",
          "name": "Dr. Wilhelm Olson",
          "email": "slittle@example.net",
          "gender": "Male",
          "designation": "Python Developer",
          "phone_number": "607.443.4091",
          "complete_address": "27250 Aaron Haven Apt. 003\nPort Murray, SD 20738"
        },
        {
          "id": 34,
          "username": "upton.kim",
          "name": "Hilton Turner",
          "email": "abshire.hortense@example.net",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "(920) 501-1925",
          "complete_address": "812 Harmony River\nSouth Emmanuelburgh, OR 92852"
        },
        {
          "id": 35,
          "username": "awilliamson",
          "name": "Marco Ankunding",
          "email": "gbogisich@example.org",
          "gender": "Female",
          "designation": "CEO",
          "phone_number": "(561) 851-8562",
          "complete_address": "1204 Schulist Square\nLake Rylanshire, NC 81639-0966"
        },
        {
          "id": 36,
          "username": "lily.rippin",
          "name": "Ervin Heaney",
          "email": "trantow.aglae@example.org",
          "gender": "Male",
          "designation": "Python Developer",
          "phone_number": "1-918-762-9528",
          "complete_address": "9359 Holly Drive\nNorth Hilbertview, MO 78483-8694"
        },
        {
          "id": 37,
          "username": "horeilly",
          "name": "Ada Goyette",
          "email": "winifred13@example.com",
          "gender": "Male",
          "designation": "Wordpress Developer",
          "phone_number": "906.462.0739",
          "complete_address": "637 Kunde Loop\nEast Nels, MA 80017-5821"
        },
        {
          "id": 38,
          "username": "hill.herbert",
          "name": "Anastasia Hagenes",
          "email": "beth.mckenzie@example.com",
          "gender": "Male",
          "designation": "Node Js Developer",
          "phone_number": "+1 (682) 665-9313",
          "complete_address": "9470 Irma Viaduct\nWest Helgafort, DC 08607-4982"
        },
        {
          "id": 39,
          "username": "thomas20",
          "name": "Dr. Boyd Davis",
          "email": "koss.nikko@example.org",
          "gender": "Female",
          "designation": "CTO",
          "phone_number": "+1-623-552-8795",
          "complete_address": "165 Lucy Prairie\nWest Cruzport, HI 69128-4537"
        },
        {
          "id": 40,
          "username": "brent32",
          "name": "Mr. Garnett Paucek I",
          "email": "hirthe.alexys@example.org",
          "gender": "Female",
          "designation": "Mean Stack Developer",
          "phone_number": "(661) 944-7115",
          "complete_address": "9765 Mariano Union\nLake Friedrich, NV 66421"
        },
        {
          "id": 41,
          "username": "angelina50",
          "name": "Jesus Bergnaum",
          "email": "feeney.wayne@example.org",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "+16578560909",
          "complete_address": "19170 Daija Glens\nRebecaberg, NM 06841-9309"
        },
        {
          "id": 42,
          "username": "barbara.sawayn",
          "name": "Nicole Lockman",
          "email": "ansel.larkin@example.net",
          "gender": "Female",
          "designation": "CTO",
          "phone_number": "1-772-720-2230",
          "complete_address": "51171 Terry Squares\nEast Marlen, CT 82627-2390"
        },
        {
          "id": 43,
          "username": "borer.helene",
          "name": "Olga Jerde I",
          "email": "ebert.emely@example.com",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "1-442-664-3064",
          "complete_address": "14252 Thiel Squares Apt. 876\nLeannonmouth, KS 66720"
        },
        {
          "id": 44,
          "username": "kling.annetta",
          "name": "Devan Wilkinson Jr.",
          "email": "prunolfsson@example.org",
          "gender": "Male",
          "designation": "Mean Stack Developer",
          "phone_number": "580.998.7003",
          "complete_address": "741 Ettie Inlet Suite 023\nNorth Hershelbury, AL 17995"
        },
        {
          "id": 45,
          "username": "qdare",
          "name": "Kadin Schimmel",
          "email": "destini67@example.com",
          "gender": "Male",
          "designation": "Designer",
          "phone_number": "+1-714-386-3997",
          "complete_address": "2454 Kihn Mountain Suite 555\nWindlermouth, MT 15402"
        },
        {
          "id": 46,
          "username": "dorris.feil",
          "name": "Prof. Columbus Hill",
          "email": "heather11@example.org",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "940-263-4344",
          "complete_address": "1819 Maximus Village\nNew Borisfurt, VT 97646"
        },
        {
          "id": 47,
          "username": "mertz.larue",
          "name": "Ms. Cynthia Walter",
          "email": "ajast@example.com",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "1-541-983-4970",
          "complete_address": "8415 Ava Coves\nLake Percival, MO 21722-3521"
        },
        {
          "id": 48,
          "username": "rmurray",
          "name": "Mr. Noah Runolfsson",
          "email": "fadel.beau@example.org",
          "gender": "Male",
          "designation": "Designer",
          "phone_number": "1-239-330-7788",
          "complete_address": "472 Liana Junction\nWest Magnolia, OH 17873-1513"
        },
        {
          "id": 49,
          "username": "deborah.mayer",
          "name": "Calista Koelpin",
          "email": "mhirthe@example.com",
          "gender": "Male",
          "designation": "Node Js Developer",
          "phone_number": "+1.925.889.1042",
          "complete_address": "13800 Nader Vista\nArmstrongland, OH 97534"
        },
        {
          "id": 50,
          "username": "karli.goldner",
          "name": "Marcelina Quigley",
          "email": "patricia23@example.com",
          "gender": "Female",
          "designation": "CTO",
          "phone_number": "+1-458-598-4215",
          "complete_address": "5296 Kub Lane Suite 493\nMannmouth, OR 27661-2053"
        },
        {
          "id": 51,
          "username": "buck10",
          "name": "Jerel Prosacco PhD",
          "email": "stefanie09@example.org",
          "gender": "Male",
          "designation": "CEO",
          "phone_number": "+1-334-296-4251",
          "complete_address": "4351 Ullrich Corners\nLeschview, WV 87197-9024"
        },
        {
          "id": 52,
          "username": "ashly.ward",
          "name": "Sid Murazik",
          "email": "cordia.bartoletti@example.com",
          "gender": "Female",
          "designation": "Mean Stack Developer",
          "phone_number": "240-274-0207",
          "complete_address": "6585 Yasmin Mountains\nChristinabury, RI 11325"
        },
        {
          "id": 53,
          "username": "wiley.feeney",
          "name": "Otho Ledner",
          "email": "buster.grant@example.net",
          "gender": "Female",
          "designation": "Full Stack Developer",
          "phone_number": "539-677-7507",
          "complete_address": "7514 Conroy Row\nNickstad, CO 70220-4265"
        },
        {
          "id": 54,
          "username": "pagac.assunta",
          "name": "Dave Stokes",
          "email": "hirthe.schuyler@example.com",
          "gender": "Male",
          "designation": "Mean Stack Developer",
          "phone_number": "+12233894651",
          "complete_address": "6619 Parisian Harbor Apt. 096\nPort Kianna, OR 94304-1923"
        },
        {
          "id": 55,
          "username": "hermiston.jamar",
          "name": "Paula Lynch",
          "email": "stephanie.ledner@example.com",
          "gender": "Female",
          "designation": "Full Stack Developer",
          "phone_number": "513.407.0835",
          "complete_address": "497 Dedrick Fords\nLake Alicia, SC 85597-2609"
        },
        {
          "id": 56,
          "username": "maximilian62",
          "name": "Rose Schmidt",
          "email": "isteuber@example.net",
          "gender": "Female",
          "designation": "CEO",
          "phone_number": "+1-980-284-7470",
          "complete_address": "92938 Gilda Turnpike\nWest Jarretburgh, RI 54782-9509"
        },
        {
          "id": 57,
          "username": "crystal.okon",
          "name": "Mya Towne DDS",
          "email": "brianne.ernser@example.com",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "678-953-3697",
          "complete_address": "52697 Krajcik Plaza\nMalvinatown, VT 39016"
        },
        {
          "id": 58,
          "username": "rahul.legros",
          "name": "Princess Ritchie",
          "email": "raltenwerth@example.net",
          "gender": "Male",
          "designation": "Mean Stack Developer",
          "phone_number": "+1.870.542.1689",
          "complete_address": "548 Koepp Estates\nEast Joeybury, TN 10218"
        },
        {
          "id": 59,
          "username": "lora.dooley",
          "name": "Aliya Kuphal",
          "email": "antonia02@example.net",
          "gender": "Female",
          "designation": "CEO",
          "phone_number": "+14699317639",
          "complete_address": "25584 Mauricio Shoals Suite 491\nOrionton, CT 49373-2218"
        },
        {
          "id": 60,
          "username": "rosalyn.macejkovic",
          "name": "Santa Rippin",
          "email": "ischimmel@example.org",
          "gender": "Male",
          "designation": "Python Developer",
          "phone_number": "+14306163088",
          "complete_address": "83135 Hanna Skyway\nAniyahaven, HI 82567"
        },
        {
          "id": 61,
          "username": "hdeckow",
          "name": "Jackie Kuhn",
          "email": "delia.okuneva@example.org",
          "gender": "Male",
          "designation": "Wordpress Developer",
          "phone_number": "830-579-4565",
          "complete_address": "530 Graham Junction\nLake Serena, WV 60806-8289"
        },
        {
          "id": 62,
          "username": "walton.treutel",
          "name": "Bobby Kuhic",
          "email": "sandy97@example.net",
          "gender": "Female",
          "designation": "Wordpress Developer",
          "phone_number": "865.934.5099",
          "complete_address": "313 Schuppe Lake\nNorth Melvinside, MA 66762"
        },
        {
          "id": 63,
          "username": "mcclure.ted",
          "name": "Prof. Frederique Wintheiser",
          "email": "dickens.eduardo@example.com",
          "gender": "Male",
          "designation": "Wordpress Developer",
          "phone_number": "+1 (651) 992-0549",
          "complete_address": "1983 Evie Drive Apt. 692\nNew Mozelletown, CT 36423-7167"
        },
        {
          "id": 64,
          "username": "hulda58",
          "name": "Cassidy Bednar",
          "email": "mweber@example.com",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "+1 (325) 318-8359",
          "complete_address": "2209 Cassandre Springs Apt. 238\nVicentehaven, KS 34303"
        },
        {
          "id": 65,
          "username": "sibyl.howell",
          "name": "Mr. Rex Johns",
          "email": "tyshawn.zieme@example.com",
          "gender": "Male",
          "designation": "CTO",
          "phone_number": "+1-941-376-3476",
          "complete_address": "14220 Lakin Radial\nTheodorefurt, WI 28117"
        },
        {
          "id": 66,
          "username": "norene.harvey",
          "name": "Helene Bauch MD",
          "email": "zaria.ritchie@example.com",
          "gender": "Male",
          "designation": "SEO",
          "phone_number": "+1 (931) 232-6219",
          "complete_address": "7894 Treutel Estates\nKozeyberg, KY 73441"
        },
        {
          "id": 67,
          "username": "vsmith",
          "name": "Dr. Mara Miller",
          "email": "annabelle.emmerich@example.net",
          "gender": "Male",
          "designation": "SEO",
          "phone_number": "1-980-281-8458",
          "complete_address": "80433 Parker Centers Suite 204\nPort Kaleyfort, ND 46302"
        },
        {
          "id": 68,
          "username": "awitting",
          "name": "Eleonore Turcotte Jr.",
          "email": "zrowe@example.org",
          "gender": "Male",
          "designation": "Wordpress Developer",
          "phone_number": "+1 (337) 474-1315",
          "complete_address": "29907 Teresa Ville Apt. 880\nKlockobury, KY 58908"
        },
        {
          "id": 69,
          "username": "keebler.tianna",
          "name": "Colton Kiehn",
          "email": "roob.rozella@example.org",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "+1.640.666.3821",
          "complete_address": "2141 Mante Ramp\nQuigleyside, MD 46932-4155"
        },
        {
          "id": 70,
          "username": "lazaro.von",
          "name": "Ms. Hulda Greenholt I",
          "email": "elbert90@example.net",
          "gender": "Female",
          "designation": "CTO",
          "phone_number": "(908) 800-8292",
          "complete_address": "10654 Brekke Valleys\nSouth Buddy, WY 15225-7095"
        },
        {
          "id": 71,
          "username": "zlittle",
          "name": "Mr. Olen Schultz DDS",
          "email": "davis.gillian@example.org",
          "gender": "Female",
          "designation": "Freelancer",
          "phone_number": "838.699.6507",
          "complete_address": "26708 Orion Crescent Suite 252\nWest Bobbyfort, NY 88167"
        },
        {
          "id": 72,
          "username": "chyna.gottlieb",
          "name": "Tianna Wiza",
          "email": "lucienne03@example.net",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "1-346-224-8707",
          "complete_address": "26276 Shyanne Alley Suite 684\nLeonehaven, MD 46181-5847"
        },
        {
          "id": 73,
          "username": "nosinski",
          "name": "Seamus Schneider",
          "email": "kyler06@example.com",
          "gender": "Female",
          "designation": "Mean Stack Developer",
          "phone_number": "+1.864.558.8110",
          "complete_address": "2176 Frederique Street\nWest Catalinaside, MN 48647-6797"
        },
        {
          "id": 74,
          "username": "lleannon",
          "name": "Pink Turcotte",
          "email": "emmerich.antonetta@example.org",
          "gender": "Male",
          "designation": "PHP Developer",
          "phone_number": "260.460.5475",
          "complete_address": "26794 Constantin Dam\nSouth Juliana, DC 44536-0135"
        },
        {
          "id": 75,
          "username": "sanford.alfred",
          "name": "Mr. Laurel Orn",
          "email": "heller.heber@example.org",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "(361) 958-0851",
          "complete_address": "6922 Mills Shoal\nNorth Loyceton, CO 24343"
        },
        {
          "id": 76,
          "username": "ccorkery",
          "name": "Orland Casper",
          "email": "schamberger.buddy@example.com",
          "gender": "Male",
          "designation": "SEO",
          "phone_number": "+1 (757) 874-5623",
          "complete_address": "32899 Nicklaus Coves\nStiedemannhaven, MS 14959"
        },
        {
          "id": 77,
          "username": "oma.oberbrunner",
          "name": "Bradford Ryan Jr.",
          "email": "halvorson.monty@example.org",
          "gender": "Male",
          "designation": "Wordpress Developer",
          "phone_number": "+1-845-241-8099",
          "complete_address": "537 Lulu Villages Apt. 084\nNitzscheton, NY 27811"
        },
        {
          "id": 78,
          "username": "marvin.crooks",
          "name": "Magdalen Fay",
          "email": "walter.buck@example.net",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "270.894.2371",
          "complete_address": "21684 Torp Cape\nNew Britney, MN 94661-9823"
        },
        {
          "id": 79,
          "username": "dgoodwin",
          "name": "Dr. Rupert Reichel",
          "email": "geraldine.heaney@example.com",
          "gender": "Female",
          "designation": "Wordpress Developer",
          "phone_number": "+17573850667",
          "complete_address": "999 Lilyan Court Apt. 267\nSchummside, MN 00707"
        },
        {
          "id": 80,
          "username": "maybell.gleichner",
          "name": "Lillie Tromp",
          "email": "mbruen@example.org",
          "gender": "Male",
          "designation": "CTO",
          "phone_number": "850.327.0244",
          "complete_address": "19701 Kuhn Crest Suite 671\nJakubowskimouth, KY 20327-8045"
        },
        {
          "id": 81,
          "username": "hamill.matt",
          "name": "Quincy Grimes IV",
          "email": "addison83@example.net",
          "gender": "Female",
          "designation": "Node Js Developer",
          "phone_number": "+1 (520) 353-3900",
          "complete_address": "57359 Ullrich Plains Suite 287\nTracetown, RI 87579-0186"
        },
        {
          "id": 82,
          "username": "qkuvalis",
          "name": "Angel Carroll",
          "email": "jacynthe.heidenreich@example.net",
          "gender": "Female",
          "designation": "Node Js Developer",
          "phone_number": "+1-650-475-0844",
          "complete_address": "52653 Elvie Glens Suite 816\nWest Sabinahaven, NJ 34271-7665"
        },
        {
          "id": 83,
          "username": "garland.wisoky",
          "name": "Maximillia Wintheiser",
          "email": "kwiza@example.com",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "1-680-636-4516",
          "complete_address": "107 Harvey Crossroad\nOrtiztown, ND 01150-0226"
        },
        {
          "id": 84,
          "username": "wisozk.judy",
          "name": "Edwina Swaniawski",
          "email": "joesph.kohler@example.net",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "(626) 436-8093",
          "complete_address": "9115 Cole Loop\nRennerhaven, NJ 08037-2722"
        },
        {
          "id": 85,
          "username": "crona.hillary",
          "name": "Prof. Drew Feeney Sr.",
          "email": "korey.ratke@example.com",
          "gender": "Male",
          "designation": "Python Developer",
          "phone_number": "(626) 788-1189",
          "complete_address": "129 Maryjane Walk Suite 706\nNorth Rebeka, VT 45979"
        },
        {
          "id": 86,
          "username": "larson.lisa",
          "name": "Prof. Neha Goldner",
          "email": "kari.gottlieb@example.net",
          "gender": "Male",
          "designation": "CTO",
          "phone_number": "(724) 212-7430",
          "complete_address": "597 White Trail\nLake Ethan, HI 02038-2593"
        },
        {
          "id": 87,
          "username": "mckenzie.diego",
          "name": "Mr. Darrick Lakin PhD",
          "email": "lester.cummings@example.com",
          "gender": "Female",
          "designation": "Designer",
          "phone_number": "+1 (737) 778-0677",
          "complete_address": "602 Edward Overpass\nCollinston, NV 37878-5076"
        },
        {
          "id": 88,
          "username": "melvin.mosciski",
          "name": "Alexandra Satterfield",
          "email": "laury09@example.org",
          "gender": "Female",
          "designation": "Wordpress Developer",
          "phone_number": "+1-619-531-5981",
          "complete_address": "2445 Ena Skyway\nEast Abigailberg, WI 49636-6871"
        },
        {
          "id": 89,
          "username": "micheal.mohr",
          "name": "Ms. Mafalda Harber III",
          "email": "flossie67@example.net",
          "gender": "Female",
          "designation": "Full Stack Developer",
          "phone_number": "+1-445-966-3820",
          "complete_address": "234 Marquardt Mount\nPort Maudie, MA 02343"
        },
        {
          "id": 90,
          "username": "vivian25",
          "name": "Alice Beier",
          "email": "heller.damon@example.org",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "618-481-4960",
          "complete_address": "210 Hershel Cove\nEast Theresia, CA 52034"
        },
        {
          "id": 91,
          "username": "gaetano.fisher",
          "name": "Jeramy McGlynn",
          "email": "valentin.streich@example.com",
          "gender": "Female",
          "designation": "Mean Stack Developer",
          "phone_number": "(847) 295-3339",
          "complete_address": "7360 Carmen Row\nSouth Modesto, DE 61806"
        },
        {
          "id": 92,
          "username": "kaufderhar",
          "name": "Kirsten Bernhard Jr.",
          "email": "jermaine.crooks@example.net",
          "gender": "Male",
          "designation": "Python Developer",
          "phone_number": "+14582819426",
          "complete_address": "28804 Hintz Point\nBrookeburgh, ME 81721"
        },
        {
          "id": 93,
          "username": "wlittle",
          "name": "Winona Tromp V",
          "email": "pmoen@example.com",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "+1.862.592.7663",
          "complete_address": "92574 Florine Springs Apt. 411\nNew June, NC 26474-9255"
        },
        {
          "id": 94,
          "username": "smitham.justen",
          "name": "Lola Marvin",
          "email": "eladio.nolan@example.org",
          "gender": "Female",
          "designation": "PHP Developer",
          "phone_number": "959.799.6305",
          "complete_address": "80351 Langworth Skyway\nLake Sabrynaville, TX 87790"
        },
        {
          "id": 95,
          "username": "hortense.hettinger",
          "name": "Jailyn Cremin",
          "email": "auer.mallory@example.net",
          "gender": "Male",
          "designation": "Designer",
          "phone_number": "(832) 669-2668",
          "complete_address": "231 Wilfred Shore Suite 175\nEast Lizzie, AR 93797-5868"
        },
        {
          "id": 96,
          "username": "myrtice24",
          "name": "Kim Jast",
          "email": "theresa.cormier@example.com",
          "gender": "Female",
          "designation": "CTO",
          "phone_number": "1-878-886-0469",
          "complete_address": "167 Conor Causeway Apt. 550\nBoyleberg, AR 20932-4742"
        },
        {
          "id": 97,
          "username": "quentin77",
          "name": "Leora Champlin",
          "email": "jay.funk@example.org",
          "gender": "Female",
          "designation": "CEO",
          "phone_number": "630.214.1973",
          "complete_address": "223 Brekke Field\nNorth Dedric, AK 19542"
        },
        {
          "id": 98,
          "username": "tmosciski",
          "name": "Garry Lindgren",
          "email": "minnie38@example.net",
          "gender": "Female",
          "designation": "SEO",
          "phone_number": "1-872-587-8480",
          "complete_address": "24393 Buckridge Dam Suite 267\nLake Cora, ND 22468-8397"
        },
        {
          "id": 99,
          "username": "cali13",
          "name": "Adaline Ankunding",
          "email": "judy68@example.org",
          "gender": "Male",
          "designation": "Full Stack Developer",
          "phone_number": "(240) 582-8695",
          "complete_address": "6800 Merl Plains Apt. 110\nHalvorsonville, OR 91232"
        },
        {
          "id": 100,
          "username": "jackie49",
          "name": "Adaline Casper",
          "email": "nikki.krajcik@example.net",
          "gender": "Female",
          "designation": "CEO",
          "phone_number": "+1 (984) 683-7218",
          "complete_address": "10468 Nels Shoals Suite 071\nAylinfurt, IN 03776"
        }
    ];
  constructor() { }

  ngOnInit(): void {}

}
