function handleInput(e) {
   var ss = e.target.selectionStart;
   var se = e.target.selectionEnd;
   e.target.value = e.target.value.toUpperCase();
   e.target.selectionStart = ss;
   e.target.selectionEnd = se;
}
  
		new Vue({
      el: "#main",
      data: {
        heading: "PF Gun List (WIP)",
        lists: [
                 {
            "name": "M9",
            "cal": "9×19mm",
            "dmg": "35-10",
            "cap": "15+1 / 105",
			"rpm": "780",
                   "multi":"1.50/1.10",
            "desc": "A 9mm Italian pistol. One of the first 'wonder nines'. High capacity with deep reserves, light recoil, and high velocity. ",
             "rank": "0"
          },
		  {
            "name": "GLOCK 17 (G17)",
            "cal": "9×19mm",
            "dmg": "34-10",
            "cap": "17+1/102",
			"rpm": "780",
            "multi":"1.50/1.10",
            "desc": "A 9mm Austrian pistol renowned for its simplicity and ruggedness. Compared to the M9, it has a higher capacity, but less muzzle velocity.",
        "rank": "0"
          },
		  {
            "name": "M1911",
            "cal": ".45 ACP",
            "dmg": "48-29",
            "cap": "8+1/56",
			"rpm": "720",
        "multi":"1.40/1.15",
            "desc": "A classic American pistol brought into the modern age. Very high damage up close, with poor velocity and small magazine size.",
        "rank": "8"
          },
          {
            "name": "DESERT EAGLE (DEAGLE) L5",
            "cal": ".44 MAGNUM",
            "dmg": "56-32",
            "cap": "8+1/40",
			"rpm": "400",
            "multi":"2.00/  1.30",
            "desc": "A modern version of the iconic Israeli-American pistol. This specific model has been lightened as well as upgraded with dual Picatinny rails and a much-needed muzzle brake. Very high damage with the capacity to instantly kill to the head up close, with rough recoil.",
            "rank": "18"
          },
           {
            "name": "M45A1",
            "cal": ".45 ACP",
            "dmg": "45-28",
            "cap": "10+1/60",
			"rpm": "670",
             "multi":"1.40/1.15",
            "desc": "A modern American pistol with many custom parts. High damage, medium capacity, strong recoil.",
             "rank": "34"
          },
          
            {
            "name": "FIVE SEVEN",
            "cal": "5.7×28mm",
            "dmg": "29-22",
            "cap": "20+1/100",
			"rpm": "800",
              "multi":"1.40/1.20",
            "desc": "A modern Belgian pistol firing a unique caliber. Poor close-in performance, with great ranged performance, high velocity, large magazine, wall penetration and deep reserves.",
              "rank": "57"
          },
           {
            "name": "ZIP 22",
            "cal": ".22 LONG RIFLE",
            "dmg": "15-12",
            "cap": "10+1/180",
			"rpm": "1000 SEMI",
             "multi":"2.80/1.00",
            "desc": "A modern American 'pistol' with questionable quality. Abysmal damage, but with deep reserves and a high headshot multiplier. A weapon so bad it killed a million dollar company. 3 shots to the head at all ranges.",
             "rank": "61"
          },
            {
            "name": "DESERT EAGLE (DEAGLE) XIX",
            "cal": ".50 ACTION EXPRESS",
            "dmg": "72-37",
            "cap": "7+1/21",
			"rpm": "400",
              "multi":"2.50/1.40",
            "desc": "Finally, a gun that lets you make a statement. This semi-automatic hand cannon is chambered in .50 Action Express. It'll probably pulverize your wrists with its recoil, but hey, you can't argue with the stopping power. And you've got the king of mayhem...",
              "rank": "102"
          },
          {
            "name": "GLOCK 18 (G18)",
            "cal": "9×19mm",
            "dmg": "30-20",
            "cap": "19+1/57",
			"rpm": "1100 AUTO",
            "multi":"1.40/1.00",
            
            "desc": "A 9mm Austrian machine pistol. Fast fire rate with relatively stable handling characteristics.",
            "rank": "17"
          },
             {
            "name": "M93R",
            "cal": "9×19mm",
            "dmg": "34-20",
            "cap": "20+1/80",
			"rpm": "1100 3×BURST",
               "multi":"1.40/1.00",
               
            "desc": "An Italian machine pistol that fires rapid 3-round bursts. Strong vertical recoil with high close-in damage.",
               "rank": "26"
          },
             {
            "name": "TEC-9",
            "cal": "9×19mm",
            "dmg": "28-20",
            "cap": "20/60",
			"rpm": "1500 AUTO",
               "multi":"1.40/1.00",
            "desc": "A Swedish machine pistol with an incredibly high rate of fire, but lacks stopping power and has highly unstable handling.",
               "rank": "50"
          },
             {
            "name": "MICRO UZI",
            "cal": "9×19mm",
            "dmg": "34-19",
            "cap": "20/60",
			"rpm": "1200 AUTO",
               "multi":"1.30/1.00",
            "desc": "A compact version of the Uzi, favored by criminals of all walks. Fires at an incredibly high rate of fire, but mind the ammo.",
               "rank": "68"
          },
          {
            "name": "ŠKORPION VZ. 61 (CZ-3A1) **",
            "cal": ".32 ACP",
            "dmg": "34-19",
            "cap": "20+1/60",
			"rpm": "850 AUTO",
            "multi":"1.40/1.00",
            "desc": "Czechoslovakia machine pistol of iconic design made in 1959 by Miroslav Rybář. It does have faults but at the same it is reliable with low recoil and good damage in close ranges.",
            "rank": "87"
          },
          {
            "name": "MP1911",
            "cal": ".45 ACP, .380 ACP",
            "dmg": "36-20",
            "cap": "15+1/45",
			"rpm": "1000 AUTO",
            "multi":"1.40/1.00",
            "desc": "A custom 1911 prototype from the Philippines. Features a custom foregrip and muzzle device for very stable firing characteristics, but has a bulky magazine resulting in slow reloads.",
            "rank": "106"
          },
		      {
            "name": "ARM PISTOL **",
            "cal": "5.56 NATO",
            "dmg": "34-20",
            "cap": "20+1.80",
			"rpm": "800 AUTO",
            "multi":"1.40/1.00",
            "desc": "Bushmaster ARM firearm legally categorized as a pistol. Despite the appearance it actually bears more mechanical similarity to the AK47. Good for damage and reload speed.",
            "rank": "87"
          },
		      {
            "name": "MP412 REX",
            "cal": ".357 MAGNUM",
            "dmg": "56-28",
            "cap": "6/42",
			"rpm": "600 SEMI",
            "multi":"3.00/1.40",
            "desc": "A break-open revolver prototype from Russia intended for export. High close-in damage and headshot multiplier with low ranged damage and a fast rate of fire.",
            "rank": "4"
          },
		      {
            "name": "MATEBA 6",
            "cal": ".44 MAGNUM",
            "dmg": "56-30",
            "cap": "6/42",
			"rpm": "600 SEMI",
            "multi":"2.50/1.40",
            "desc": "An Italian semi-automatic revolver. High close-in damage with better ranged performance, fast drop-off, fast rate of fire and unusual recoil.",
            "rank": "29"
          },
		      {
            "name": "1858 NEW ARMY",
            "cal": ".357 MAGNUM",
            "dmg": "60-35",
            "cap": "6/42",
			"rpm": "140 SEMI, 350 FAN FIRE",
            "multi":"2.50/1.40",
            "desc": "A modern reproduction of a vintage American ball-and-cap revolver. Single-action revolver with a slow rate of fire, excellent ranged performance, and the ability to fan-fire at high speed.",
            "rank": "58"
          },
		      {
            "name": "REDHAWK 44",
            "cal": ".44 MAGNUM",
            "dmg": "59-35",
            "cap": "6/42",
			"rpm": "400 SEMI",
            "multi":"2.50/1.25",
            "desc": "A traditional American revolver. Very high damage overall with a slow rate of fire and strong muzzle flip.",
            "rank": "83"
          },
		      {
            "name": "EXCECUTIONER",
            "cal": ".454 CASULL",
            "dmg": "80-38",
            "cap": "6/30",
			"rpm": "300 SEMI",
            "multi":"2.50/1.30",
            "desc": "A full-size Brazilian revolver, loaded with .454 Casull for incredible stopping power. Massive damage up close with a high headshot multiplier, with harsh recoil and slow recovery.",
            "rank": "137"
          },
		      {
            "name": "JUDGE",
            "cal": ".410 BORE",
            "dmg": "4×40-4×20",
            "cap": "5/25",
			"rpm": "300 SEMI",
            "multi":"1.14/1.00",
            "desc": "A compact Brazilian revolver firing .410 shotshells. High per-pellet damage with moderate spread and fast rate of fire.",
            "rank": "113"
          },
		      {
            "name": "SERBU SHOTGUN",
            "cal": "12 GAUGE (BUCKSHOT)",
            "dmg": "8×29-8×16",
            "cap": "2+1/20",
			      "rpm": "100 PUMP",
            "multi":"1.10/1.00",
            "desc": "An ultra-short pump action shotgun based on the Remington 870. Small capacity with wide spread.",
            "rank": "36"
          },
		      {
            "name": "SFG 50",
            "cal": ".50 BMG",
            "dmg": "100-85",
            "cap": "1/20",
			      "rpm": "30 SINGLE SHOT",
            "multi":"3.00/1.14",
            "desc": "A BFG 50 with the barrel hacked off. As should be expected from this 'modification', it hits hard, but is highly inaccurate at range.",
            "rank": "75"
          },
          {
            "name": "M79 THUMPER",
            "cal": ".22 LONG RIFLE",
            "dmg": "10×34-10×16",
            "cap": "1/20",
			      "rpm": "90 SINGLE SHOT",
            "multi":"1.50/1.00",
            "desc": "A single-action break-action grenade launcher that is loaded with 10-round hornet's nest of .22 Long Rifle and tons of other ammo using proper shells or adapters. First appeared during the Vietnam War, it earned many nicknames by the soldiers.",
            "rank": "79"
          },
          {
            "name": "SAWED OFF",
            "cal": "12 GAUGE",
            "dmg": "8×29-8×16",
            "cap": "2/20",
			      "rpm": "200 SEMI/INSTANT BURST (FIRES BOTH BARRELS AT ONCE)",
            "multi":"1.10/1.00",
            "desc": "An ultra-short double-barreled shotgun. Capable of firing both barrels at once. Very wide spread.",
            "rank": "90"
          },
          {
            "name": "SAIGA-12U",
            "cal": "12 GAUGE",
            "dmg": "8×29-8×16",
            "cap": "2+3/20",
			      "rpm": "350 SEMI",
            "multi":"1.10/1.00",
            "desc": "A Saiga 12 without a stock and a very short barrel. Has a high rate of fire with a very wide spread and a small magazine.",
            "rank": "95"
          },
		      {
            "name": "OBREZ",
            "cal": "7.62×54mmR",
            "dmg": "50-40",
            "cap": "5/30",
			      "rpm": "80 BOLT",
            "multi":"3.00/1.50",
            "desc": "A shortened Mosin Nagant intended for use by revolutionaries and insurgents. Inaccurate, but instantly kills with headshots.",
            "rank": "117"
          },
          {
            "name": "KSG-12",
            "cal": "12 GAUGE",
            "dmg": "8×32-8×17",
            "cap": "14+1/50",
			      "rpm": "130",
            "multi":"1.10/1.00",
            "desc": "A high-capacity pump-action, bullpup American shotgun, with dual 7-round tubes. Wide spread.",
            "rank": "1"
          },
          {
            "name": "REMINGTON 870",
            "cal": "12 GAUGE",
            "dmg": "8×33-8×18",
            "cap": "6+1/50",
			      "rpm": "100",
            "multi":"1.14/1.00",
            "desc": "A traditional pump action shotgun with a 7-round tube and polymer furniture. Tight spread.",
            "rank": "11"
          },
          {
            "name": "DBV12",
            "cal": "12 GAUGE",
            "dmg": "8×29-8×17",
            "cap": "10+1/50",
			      "rpm": "250 SEMI",
            "multi":"1.10/1.00",
            "desc": "A conceptualized prototype weapon based on the AK12 platform. Semi automatic, feeding from a 10 round box magazines. Middling spread, low damage.",
            "rank": "24"
          },
          {
            "name": "KS-23M",
            "cal": "23×75mmR",
            "dmg": "8×37-8×21 (19**)",
            "cap": "3+1",
			      "rpm": "65 PUMP",
            "multi":"1.14/1.00",
            "desc": "A Russian shotgun built using 23mm aircraft gun barrels. This makes it the largest-bore shotgun in use, but it only fits 3 rounds in the tube. High damage, slow firerate, extremely tight spread.",
            "rank": "56"
          },
          {
            "name": "SAIGA 12",
            "cal": "12 GAUGE",
            "dmg": "8×27-8×17 ",
            "cap": "8+1/50",
			      "rpm": "350 SEMI",
            "multi":"1.14/1.00",
            "desc": "A Russian shotgun based on the AK platform. It feeds from an 8-round box magazine and has a blisteringly fast fire rate, but a slow reload and wide spread.",
            "rank": "63"
          },
          {
            "name": "STEVENS DB",
            "cal": "12 GAUGE",
            "dmg": "8×36-8×19",
            "cap": "2/50",
			      "rpm": "200 SEMI/INSTANT BURST",
            "multi":"1.14/1.14",
            "desc": "A classic double-barrel shotgun with plenty of punch and an instantaneous burst. It spells doom for whatever's in front of it.",
            "rank": "81"
          },
          {
            "name": "AA-12",
            "cal": "12 GAUGE",
            "dmg": "8×28-8×19",
            "cap": "8/56 (20/40 with 20rd DRUM)",
			      "rpm": "300 AUTO",
            "multi":"1.14/1.00",
            "desc": "An iconic American shotgun produced exclusively in fully automatic. It has one of the fastest fire rates, and can accept a 20 round drum magazine. Very low damage with very wide spread.",
            "rank": "112"
          },
          {
            "name": "SPAS-12",
            "cal": "12 GAUGE",
            "dmg": "8×30-8×18",
            "cap": "8+1/50",
			      "rpm": "200 SEMI",
            "multi":"1.14/1.00",
            "desc": "An iconic Italian gas-actuated combat shotgun, with a 7 round tube magazine. Features a fast fire rate and tight spread with high damage.",
            "rank": "120"
          },
          {
            "name": "AK12",
            "cal": "5.45×39mmR",
            "dmg": "33-20",
            "cap": "30+1/120",
			      "rpm": "1000 3×BURST, 700 AUTO",
            "multi":"1.40/1.00",
            "desc": "A prototype assault rifle from the Kalashnikov Concern based off the AK400. Intended to replace the AK74 in service with the Russian military. A jack of all trades, but a master of none.",
            "rank": "0"
          },
          {
            "name": "AN-94",
            "cal": "5.45×39mmR",
            "dmg": "32-24",
            "cap": "30+1/120",
			      "rpm": "1800 2×BURST, 600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A complex Russian assault rifle featuring a unique pulley-driven burst system. Fires two shots in the exact same place before recoil is felt.",
            "rank": "10"
          },
          {
            "name": "AS VAL",
            "cal": "9×39mm",
            "dmg": "34-20",
            "cap": "20+1/120",
			      "rpm": "900 AUTO",
            "multi":"1.40/1.00",
            "desc": "A tactical upgrade to the SR-3M, with a large suppressor for the purpose of being used by Russian special-ops troops. High damage up close, but lacking damage at range.",
            "rank": "15"
          },
          {
            "name": "SCAR-L",
            "cal": "5.56 NATO",
            "dmg": "33-25",
            "cap": "30+1/120",
			      "rpm": "625 AUTO",
            "multi":"1.40/1.00",
            "desc": "A modular Belgian assault rifle, built specially to satisfy the needs of SOCOM. Steady fire rate with low recoil and high minimum damage.",
            "rank": "16"
          },
          {
            "name": "AUG A1",
            "cal": "5.56 NATO",
            "dmg": "30-23",
            "cap": "30+1/120",
			      "rpm": "680 AUTO",
            "multi":"1.40/1.00",
            "desc": "An Austrian bullpup assault rifle with a built-in telescopic optic. Decently accurate with a long range and above-average fire rate. Press T and aim to use the scope.",
            "rank": "20"
          },
          {
            "name": "M16A4",
            "cal": "5.56 NATO",
            "dmg": "35-22",
            "cap": "30+1/120",
			      "rpm": "900 3×BURST",
            "multi":"1.50/1.00",
            "desc": "A traditional AR-15 platform assault rifle as used by the US military. This version features a burst-fire trigger group. Very accurate with low recoil and a long range. High vertical ADS recoil tho.",
            "rank": "22"
          },
          {
            "name": "G36",
            "cal": "5.56 NATO",
            "dmg": "31-25",
            "cap": "30+1/120",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "A modern modular German assault rifle, designed to replace the G3 that was in service at the time. Originally issued with a special optics package. Middle-of-the-road rifle with a preference for ranged performance.",
            "rank": "25"
          },
          {
            "name": "M16A3",
            "cal": "5.56 NATO",
            "dmg": "32-22",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.40/1.00",
            "desc": "A traditional AR-15 platform assault rifle as used by the US military. This version features a fully automatic trigger group. Accurate with low recoil and a fast reload.",
            "rank": "31"
          },
          {
            "name": "AUG A2",
            "cal": "5.56 NATO",
            "dmg": "34-20",
            "cap": "30+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.00",
            "desc": "An intermediate upgrade to the AUG A1, foregoing the telescopic optic for a standard Picatinny rail. Trades ranged performance for close-in punch. Slow reload.",
            "rank": "39"
          },
          {
            "name": "FAMAS F1",
            "cal": "5.56 NATO",
            "dmg": "34-20",
            "cap": "25+1/125",
			      "rpm": "900 AUTO, 900 3×BURST",
            "multi":"1.40/1.00",
            "desc": "A French bullpup assault rifle. Higher fire rate than average, but with lacking damage and a slow reload.",
            "rank": "45"
          },
          {
            "name": "AK47",
            "cal": "7.62×39mmR",
            "dmg": "42-30",
            "cap": "30+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A Russian assault rifle. The most common rifle in the world, firing a heavy intermediate cartridge. High damage, high recoil.",
            "rank": "47"
          },
          {
            "name": "AUG A3",
            "cal": "5.56 NATO",
            "dmg": "32-21",
            "cap": "30+1/120",
			      "rpm": "720 AUTO",
            "multi":"1.40/1.00",
            "desc": "A further revision of the AUG platform with additional minor revisions. Jack of all trades of the AUG family, but has noticeable horizontal recoil.",
            "rank": "52"
          },
          {
            "name": "L85A2",
            "cal": "5.56 NATO",
            "dmg": "28-25",
            "cap": "30+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.00",
            "desc": "A British bullpup rifle, much maligned for its reliability until it was remodeled. High minimum damage, moderate recoil.",
            "rank": "55"
          },
          {
            "name": "HK416",
            "cal": "5.56 NATO",
            "dmg": "31-24",
            "cap": "30+1/120",
			      "rpm": "850 AUTO",
            "multi":"1.40/1.00",
            "desc": "A German assault rifle, deriving its design from the AR-15 platform. Made famous for its use by SEAL Team Six. Fast fire rate with high damage, but a slow reload.",
            "rank": "64"
          },
          {
            "name": "AK74",
            "cal": "5.45×39mmR",
            "dmg": "34-23",
            "cap": "30+1/120",
			      "rpm": "650 AUTO",
            "multi":"1.40/1.00",
            "desc": "A revision of the Kalashnikov system to accept the less powerful 5.45x39mm cartrige, improving weapon handling and accuracy.",
            "rank": "74"
          },
          {
            "name": "AKM",
            "cal": "7.62×39mmR",
            "dmg": "40-32",
            "cap": "30+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "Modernized version of the AK47 rifle with various improvements to handling and functionality. Slightly reduced damage compared to the AK47 with a preference for recoil control.",
            "rank": "94"
          },
          {
            "name": "AK103",
            "cal": "7.62×39mmR",
            "dmg": "38-29",
            "cap": "30+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A further modernized version of the AK platform, brought into the modern day with a polymer handguard and stock. Trades a small amount of close-range performance for a range preference.",
            "rank": "103"
          },
          {
            "name": "TAR-21",
            "cal": "5.56 NATO",
            "dmg": "29-22",
            "cap": "30+1/120",
			      "rpm": "850 AUTO",
            "multi":"1.50/1.10",
            "desc": "sraeli bullpup assault rifle chambered in standard 5.56x45 NATO. Features a long barrel for great ballistics over range.",
            "rank": "111"
          },
          {
            "name": "TYPE 88-2",
            "cal": "5.45×39mmR",
            "dmg": "34-20",
            "cap": "75/150",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "An AK74 knock off for North Korean forces. Comes with a specialty overfolder stock, and absurdly large helical magazine. Extremely poor ergonomics plague this firearm.",
            "rank": "122"
          },
          {
            "name": "M231",
            "cal": "5.56 NATO",
            "dmg": "35-25",
            "cap": "30/150",
			      "rpm": "1225 AUTO",
            "multi":"1.40/1.00",
            "desc": "The M231 Firing Port Weapon is only intended to be used inside the Bradley AFV in a special mount. Hits hard, but good luck hitting anything... You're going to use it anyways, Boss?",
            "rank": "123"
          },
          {
            "name": "C7A2",
            "cal": "5.56 NATO",
            "dmg": "29-19",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.50/1.00",
            "desc": "A Canadian iteration upon the US military's M16A2. Features a full auto trigger group, speedy reload and an integrated optic. This gun reminds you of a simpler time.",
            "rank": "128"
          },
          {
            "name": "G11K2",
            "cal": "4.73x33mm CASELESS",
            "dmg": "28-21",
            "cap": "45/180",
			      "rpm": "2100 3×BURST, 460 AUTO",
            "multi":"1.70/1.00",
            "desc": "A prototype German assault rifle that fires caseless rounds, allowing for more bullets in the same space. It features an incredibly fast 3-round burst mode, but otherwise fires very slowly. It is mechanically complex, making it unwieldy and bulky. Wait a minute, this is the future. Where are all the phaser guns?",
            "rank": "211"
          },
          {
            "name": "K2",
            "cal": "5.56 NATO",
            "dmg": "34-24",
            "cap": "30+1/120",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "A modernized south korean Assault Rifle stemming from the K1A rifle. It is quite a balanced rifle in most every field.",
            "rank": "42"
          },
          {
            "name": "MK11",
            "cal": "7.62 NATO",
            "dmg": "45-38",
            "cap": "20+1/80",
			      "rpm": "330 SEMI",
            "multi":"1.50/1.20",
            "desc": "An American AR-10 platform rifle firing the 7.62 NATO round. Snappy, fast recoil and deep magazine with middling fire rate.",
            "rank": "3"
          },
          {
            "name": "SKS",
            "cal": "7.62×39mmR",
            "dmg": "40-32",
            "cap": "20+1/80",
			      "rpm": "433 SEMI",
            "multi":"1.50/1.20",
            "desc": "A modernized Tapco version of the traditional SKS carbine that saw use in WWII. Light recoil with moderate reserves and faster fire rate, but lower damage.",
            "rank": "13"
          },
          {
            "name": "SL-8",
            "cal": "5.56 NATO",
            "dmg": "38-28",
            "cap": "30+1/120",
			      "rpm": "625 SEMI",
            "multi":"1.40/1.08",
            "desc": "A semi-automatic target rifle with a heavy barrel, sold as the civilian version of the famed G36. Very fast fire rate... if your trigger finger can keep up.",
            "rank": "38"
          },
          {
            "name": "VSS VINTOREZ",
            "cal": "9×39mm SP",
            "dmg": "55-38",
            "cap": "10+1/100",
			      "rpm": "700 AUTO",
            "multi":"1.80/1.40  ",
            "desc": "A DMR variant of the AS VAL intended for special operations where normal sniper rifles aren't viable. Fully automatic capable. Fast fire rate and high damage, with high recoil and low velocity.",
            "rank": "46"
          },
          {
            "name": "MSG90",
            "cal": "7.62 NATO",
            "dmg": "50-40",
            "cap": "10+1/120",
			      "rpm": "355 SEMI",
            "multi":"2.00/1.20",
            "desc": "A ruggedized PSG-1 intended for use in rapid-response operations such as hostage situations. Has a 10 round magazine, deep reserves, and a slightly faster fire rate, countered by strong recoil.",
            "rank": "59 "
          },
          {
            "name": "BEOWULF TCR",
            "cal": ".50 BEOWULF",
            "dmg": "60-40",
            "cap": "10+1/70",
			      "rpm": "400 SEMI",
            "multi":"1.70/1.23",
            "desc": "A custom AR-15 platform rifle produced by Alexander Arms firing the heavy .50 Beowulf cartridge. Fast fire rate and high damage with poor velocity.",
            "rank": "70"
          },
          {
            "name": "SA58 SPR",
            "cal": "7.62 NATO",
            "dmg": "48-30",
            "cap": "20+1/120",
			      "rpm": "500 SEMI",
            "multi":"2.10/1.10",
            "desc": "A semi-automatic FAL submitted for US military trials. Features a high fire rate and deep reserves, but becomes unstable under rapid fire and reloads slowly.",
            "rank": "78"
          },
          {
            "name": "SCAR SSR",
            "cal": "7.62 NATO",
            "dmg": "57-48",
            "cap": "10+1/60",
			      "rpm": "220 SEMI",
            "multi":"2.00/1.70",
            "desc": "A heavy precision variant of the Belgian SCAR-H. Slowest fire rate in class with strong vertical recoil, but with fast recovery.",
            "rank": "85"
          },
          {
            "name": "BEOWULF ECR",
            "cal": ".50 BEOWULF",
            "dmg": "52-30",
            "cap": "10+1/100",
			      "rpm": "780 AUTO, 780 3×BURST",
            "multi":"1.40/1.10",
            "desc": "A custom AR-15 platform rifle produced by Alexander Arms firing the .50 Beowulf round. Packs quite a punch, but exhausts its ammo quickly.",
            "rank": "21"
          },
          {
            "name": "SCAR-H",
            "cal": "7.62 NATO",
            "dmg": "42-29",
            "cap": "20+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.10",
            "desc": "A Belgian rifle, favored by SOCOM. Stable, jack of all trades battle rifle.",
            "rank": "30"
          },
          {
            "name": "AK12BR",
            "cal": "",
            "dmg": "39-25",
            "cap": "20+1/120",
			      "rpm": "700 AUTO, 1000 2×BURST",
            "multi":"1.40/1.10",
            "desc": "A conceptualized Russian rifle using the AK12 platform. Features a 'balanced recoil' system, giving it very low recoil. High damage.",
            "rank": "44"
          },
          {
            "name": "G3",
            "cal": "7.62 NATO",
            "dmg": "35-25",
            "cap": "20+1/120",
			      "rpm": "580 AUTO",
            "multi":"2.00/1.00",
            "desc": "A German battle rifle featuring a roller-delayed blowback system. High fire rate, high recoil, middling reload speed.",
            "rank": "59"
          },
          {
            "name": "AG-3",
            "cal": "7.62 NATO",
            "dmg": "45-35",
            "cap": "20+1/120",
			      "rpm": "525 AUTO",
            "multi":"1.40/1.00",
            "desc": "A Norwegian take on the G3, featuring more modularity and special modifications made by the Norwegians. Slow fire rate with controllable recoil.",
            "rank": "76"
          },
		  
		  
        ],
        sortBy: "rank",
        filterByName: "",
        filterByCal: "",
        counter: 0
      },
      
      computed: {
        sortedlists() {
          return this.lists.filter(
            list => list.name.includes(this.filterByName)
          ).sort(
            (a, b) => a[this.sortBy].localeCompare(b[this.sortBy])
          );
        }
      }
    });
