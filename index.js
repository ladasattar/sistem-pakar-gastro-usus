const questions = [
  {
    question:
      "1. Apakah anda sering mengalami buang air besar (lebih dari 2 kali)?",
  },
  { question: "2. Apakah anda mengalami berak encer?" },
  { question: "3. Apakah anda mengalami berak berdarah?" },
  { question: "4. Apakah anda merasa lesu dan tidak bergairah?" },
  { question: "5. Apakah anda tidak selera makan?" },
  {
    question:
      "6. Apakah anda merasa mual dan sering muntah (lebih dari 1 kali)?",
  },
  { question: "7. Apakah anda merasa sakit di bagian perut?" },
  { question: "8. Apakah tekanan darah anda rendah?" },
  { question: "9. Apakah anda merasa pusing?" },
  { question: "10. Apakah anda mengalami pingsan?" },
  { question: "11. Apakah suhu badan anda tinggi?" },
  { question: "12. Apakah anda mengalami luka di bagian tertentu?" },
  {
    question:
      "13. Apakah anda tidak dapat menggerakkan anggota badan tertentu?",
  },
  { question: "14. Apakah anda pernah memakan sesuatu?" },
  { question: "15. Apakah anda memakan daging?" },
  { question: "16. Apakah anda memakan jamur?" },
  { question: "17. Apakah anda memakan makanan kaleng?" },
  { question: "18. Apakah anda membeli susu?" },
  { question: "19. Apakah anda meminum susu?" },
];

const infections = [
  {
    infection: "Staphylococcus aureus:",
  },
  { infection: "Jamur beracun:" },
  { infection: "Salmonellae:" },
  { infection: "Clostridium botulinum:" },
  { infection: "Campylobacter:" },
];

let mencret = 0;
let muntah = 0;
let sakit_perut = 0;
let darah_rendah = 0;
let koma = 0;
let demam = 0;
let septicaemia = 0;
let lumpuh = 0;
let mencret_berdarah = 0;
let makan_daging = 0;
let makan_jamur = 0;
let makan_makanan_kaleng = 0;
let minum_susu = 0;

let staphylococcus_aureus = 0;
let jamur_beracun = 0;
let salmonellae = 0;
let clostridium_botulinum = 0;
let campylobacter = 0;

let threshold = 0;
let biggest = -1;
let idx = 1;
let count = 0;
let infected = "";

questions.forEach((item) => {
  $("#questions-container").append(`
  <div class="form-check">
    <input
      class="form-check-input question-check"
      type="checkbox"
      value="${item.question}"
      id="${idx}"
    />
    <label class="form-check-label" for="${idx}">
    ${item.question}
    </label>
  </div>`);

  idx++;
});

infections.forEach((item) => {
  $("#infections-container").append(
    `<div>
      ${item.infection} <span id="${item.infection
      .replace(/ /g, "-")
      .replace(":", "")
      .toLowerCase()}">
      </span>
    </div>`
  );
});

$("button").click(function () {
  var checked = [];
  $.each($("input.question-check:checked"), function () {
    checked.push($(this).val());
  });

  if ($("input#1").is(":checked")) {
    mencret += (1 / 4) * 100;
    mencret_berdarah += (1 / 5) * 100;
  }

  if ($("input#2").is(":checked")) {
    mencret += (1 / 4) * 100;
    mencret_berdarah += (1 / 5) * 100;
  }

  if ($("input#3").is(":checked")) {
    mencret_berdarah += (1 / 5) * 100;
  }

  if ($("input#4").is(":checked")) {
    mencret += (1 / 4) * 100;
    muntah += (1 / 3) * 100;
    sakit_perut += (1 / 2) * 100;
    darah_rendah += (1 / 3) * 100;
    demam += (1 / 4) * 100;
    septicaemia += (1 / 4) * 100;
    lumpuh += (1 / 2) * 100;
    mencret_berdarah += (1 / 5) * 100;
  }

  if ($("input#5").is(":checked")) {
    mencret += (1 / 4) * 100;
    muntah += (1 / 3) * 100;
    demam += (1 / 4) * 100;
    mencret_berdarah += (1 / 5) * 100;
  }

  if ($("input#6").is(":checked")) {
    muntah += (1 / 3) * 100;
  }

  if ($("input#7").is(":checked")) {
    sakit_perut += (1 / 2) * 100;
  }

  if ($("input#8").is(":checked")) {
    darah_rendah += (1 / 3) * 100;
    koma += (1 / 2) * 100;
    septicaemia += (1 / 4) * 100;
  }

  if ($("input#9").is(":checked")) {
    darah_rendah += (1 / 3) * 100;
    demam += (1 / 4) * 100;
  }

  if ($("input#10").is(":checked")) {
    koma += (1 / 2) * 100;
  }

  if ($("input#11").is(":checked")) {
    demam += (1 / 4) * 100;
    septicaemia += (1 / 4) * 100;
  }

  if ($("input#12").is(":checked")) {
    septicaemia += (1 / 4) * 100;
  }

  if ($("input#13").is(":checked")) {
    lumpuh += (1 / 2) * 100;
  }

  if ($("input#14").is(":checked")) {
    makan_daging += (1 / 2) * 100;
    makan_jamur += (1 / 2) * 100;
    makan_makanan_kaleng += (1 / 2) * 100;
  }

  if ($("input#15").is(":checked")) {
    makan_daging += (1 / 2) * 100;
  }

  if ($("input#16").is(":checked")) {
    makan_jamur += (1 / 2) * 100;
  }

  if ($("input#17").is(":checked")) {
    makan_makanan_kaleng += (1 / 2) * 100;
  }

  if ($("input#18").is(":checked")) {
    minum_susu += (1 / 2) * 100;
  }

  if ($("input#19").is(":checked")) {
    minum_susu += (1 / 2) * 100;
  }

  staphylococcus_aureus =
    (mencret * (100 / 5)) / 100 +
    (muntah * (100 / 5)) / 100 +
    (sakit_perut * (100 / 5)) / 100 +
    (darah_rendah * (100 / 5)) / 100 +
    (makan_daging * (100 / 5)) / 100;

  jamur_beracun =
    (mencret * (100 / 5)) / 100 +
    (muntah * (100 / 5)) / 100 +
    (sakit_perut * (100 / 5)) / 100 +
    (koma * (100 / 5)) / 100 +
    (makan_jamur * (100 / 5)) / 100;

  salmonellae =
    (mencret * (100 / 6)) / 100 +
    (muntah * (100 / 6)) / 100 +
    (sakit_perut * (100 / 6)) / 100 +
    (demam * (100 / 6)) / 100 +
    (septicaemia * (100 / 6)) / 100 +
    (makan_daging * (100 / 6)) / 100;

  clostridium_botulinum =
    (muntah * (100 / 3)) / 100 +
    (lumpuh * (100 / 3)) / 100 +
    (makan_makanan_kaleng * (100 / 3)) / 100;

  campylobacter =
    (mencret_berdarah * (100 / 4)) / 100 +
    (sakit_perut * (100 / 4)) / 100 +
    (demam * (100 / 4)) / 100 +
    (minum_susu * (100 / 4)) / 100;

  $("span#staphylococcus-aureus").html(staphylococcus_aureus.toFixed(2) + "%");
  $("span#jamur-beracun").html(jamur_beracun.toFixed(2) + "%");
  $("span#salmonellae").html(salmonellae.toFixed(2) + "%");
  $("span#clostridium-botulinum").html(clostridium_botulinum.toFixed(2) + "%");
  $("span#campylobacter").html(campylobacter.toFixed(2) + "%");

  threshold = $("input#threshold").val();
  count++;

  if (staphylococcus_aureus >= biggest) {
    biggest = staphylococcus_aureus;
    if (biggest >= threshold) {
      infected = `Staphylococcus aureus`;
      $("span#infection").html(infected);
    }
  }
  if (jamur_beracun >= biggest) {
    biggest = jamur_beracun;
    if (biggest >= threshold) {
      infected = `${infected}, Jamur beracun`;
      // if (count >= 1) infected = infected.replace(",", "").replace(" ", "");
      $("span#infection").html(infected);
    }
  }
  if (Math.round(salmonellae) >= biggest) {
    biggest = Math.round(salmonellae);
    if (biggest >= threshold) {
      infected = `${infected}, Salmonellae`;
      // if (count >= 1) infected = infected.replace(",", "").replace(" ", "");
      $("span#infection").html(infected);
    }
  }
  if (clostridium_botulinum >= biggest) {
    biggest = clostridium_botulinum;
    if (biggest >= threshold) {
      infected = `${infected}, Clostridium botulinum`;
      // if (count >= 1) infected = infected.replace(",", "").replace(" ", "");
      $("span#infection").html(infected);
    }
  }
  if (campylobacter >= biggest) {
    biggest = campylobacter;
    if (biggest >= threshold) {
      infected = `${infected}, Campylobacter`;
      // if (count >= 1) infected = infected.replace(",", "").replace(" ", "");
      $("span#infection").html(infected);
    }
  }

  mencret = 0;
  muntah = 0;
  sakit_perut = 0;
  darah_rendah = 0;
  koma = 0;
  demam = 0;
  septicaemia = 0;
  lumpuh = 0;
  mencret_berdarah = 0;
  makan_daging = 0;
  makan_jamur = 0;
  makan_makanan_kaleng = 0;
  minum_susu = 0;
});
