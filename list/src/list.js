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
            "desc": "CURRENTLY UNAVAILABLE",
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
            "desc": "CURRENTLY UNAVAILABLE",
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
            "desc": "56",
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
    
    