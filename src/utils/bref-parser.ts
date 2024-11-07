function bookMapper(book: string | undefined) {
  if (!book) return undefined;

  switch (book.toUpperCase()) {
    case "GEN":
      return "01";
    case "EXOD":
    case "EXO":
      return "02";
    case "LEV":
      return "03";
    case "NUM":
      return "04";
    case "DEUT":
    case "DEU":
      return "05";
    case "JOSH":
    case "JOS":
      return "06";
    case "JUDG":
    case "JDG":
      return "07";
    case "RUT":
    case "RUTH":
      return "08";
    case "1SAM":
    case "1SA":
      return "09";
    case "2SAM":
    case "2SA":
      return "10";
    case "1KGS":
    case "1KI":
      return "11";
    case "2KGS":
    case "2KI":
      return "12";
    case "1CHR":
    case "1CH":
      return "13";
    case "2CHR":
    case "2CH":
      return "14";
    case "EZRA":
    case "EZR":
      return "15";
    case "NEH":
      return "16";
    case "ESTH":
    case "EST":
      return "17";
    case "JOB":
      return "18";
    case "PS":
    case "PSA":
      return "19";
    case "PR":
    case "PRO":
      return "20";
    case "ECC":
    case "ECCL":
      return "21";
    case "SNG":
    case "SONG":
      return "22";
    case "ISA":
      return "23";
    case "JER":
      return "24";
    case "LAM":
      return "25";
    case "EZK":
    case "EZEK":
      return "26";
    case "DAN":
      return "27";
    case "HOS":
      return "28";
    case "JOL":
    case "JOEL":
      return "29";
    case "AMO":
    case "AMOS":
      return "30";
    case "OBA":
    case "OBAD":
      return "31";
    case "JON":
      return "32";
    case "MIC":
      return "33";
    case "NAH":
    case "NAM":
      return "34";
    case "HAB":
      return "35";
    case "ZEP":
    case "ZEPH":
      return "36";
    case "HAG":
    case "HAGG":
      return "37";
    case "ZEC":
    case "ZECH":
      return "38";
    case "MAL":
      return "39";
    case "MATT":
    case "MAT":
      return "41";
    case "MARK":
    case "MRK":
      return "42";
    case "LUKE":
    case "LUK":
      return "43";
    case "JHN":
    case "JOHN":
      return "44";
    case "ACTS":
    case "ACT":
      return "45";
    case "ROM":
      return "46";
    case "1COR":
    case "1CO":
      return "47";
    case "2COR":
    case "2CO":
      return "48";
    case "GAL":
      return "49";
    case "EPH":
      return "50";
    case "PHP":
    case "PHIL":
      return "51";
    case "COL":
      return "52";
    case "1TH":
    case "1THES":
      return "53";
    case "2TH":
    case "2THES":
      return "54";
    case "1TIM":
    case "1TI":
      return "55";
    case "2TIM":
    case "2TI":
      return "56";
    case "TITUS":
    case "TIT":
      return "57";
    case "PHM":
    case "PHLM":
      return "58";
    case "HEB":
      return "59";
    case "JAS":
      return "60";
    case "1PE":
    case "1PET":
      return "61";
    case "2PE":
    case "2PET":
      return "62";
    case "1JN":
      return "63";
    case "2JN":
      return "64";
    case "3JN":
      return "65";
    case "JUD":
    case "JUDE":
      return "66";
    case "REV":
      return "67";
    case "TOB":
    case "TB":
      return "68";
    case "JDT":
      return "69";
    case "ESG":
    case "ADDESTH":
      return "70";
    case "WISD":
    case "WIS":
      return "71";
    case "ECCLUS":
    case "SIR":
      return "72";
    case "BAR":
      return "73";
    case "BEL":
      return "77";
    case "1MACC":
    case "1MA":
      return "78";
    case "2MACC":
    case "2MA":
      return "79";
    case "3MACC":
    case "3MA":
      return "80";
    case "4MACC":
    case "4MA":
      return "81";
    case "1ESD":
    case "1ES":
      return "82";
    case "2ESD":
    case "2ES":
      return "83";
    default:
      throw Error(`Missing book: ${book}`);
  }
}

function pad(input: string) {
  try {
    return input.padStart(3, "0");
  } catch {
    throw Error(`Bad pad: ${input}`);
  }
}

export function parseBref(bref: string) {
  const bookCode = bref.split(".")[0];
  const startBnBookNumber = bookMapper(bookCode);
  let endBnBookNumber = startBnBookNumber;
  bref = bref.replace(`${bookCode}.`, "");
  const refs = bref.split(",");

  let lastChapter: string | undefined;
  const passages: { startVerse: number; endVerse: number }[] = [];
  for (const i in refs) {
    const ref = refs[i];

    const verseParts = ref?.split(/[.:]/);
    let startChapter: string | undefined;
    let endChapter: string | undefined;
    let startVerse: string | undefined;
    let endVerse: string | undefined;
    let verseRange: string[];

    if (!verseParts) continue;

    if (verseParts.length === 4 && verseParts[1]!.indexOf("--") > -1) {
      const bookSplit = verseParts[1]!.split("--");
      startChapter = verseParts[0];
      startVerse = bookSplit[0];
      endBnBookNumber = bookMapper(bookSplit[1]);
      endChapter = verseParts[2];
      endVerse = verseParts[3];
    } else if (verseParts.length === 3) {
      startChapter = verseParts[0];
      const verseChapterSplit = verseParts[1]!.split(/-|–/);
      startVerse = verseChapterSplit[0];
      endChapter = verseChapterSplit[1];
      endVerse = verseParts[2];
    } else if (verseParts.length === 1) {
      startChapter = lastChapter;
      endChapter = startChapter;
      verseRange = verseParts[0]!.split(/-|–/);
      startVerse = verseRange[0];
      endVerse = verseRange.length > 1 ? verseRange[1] : startVerse;
    } else if (verseParts.length === 2) {
      startChapter = verseParts[0];
      endChapter = startChapter;
      lastChapter = startChapter;
      verseRange = verseParts[1]!.split(/-|–/);
      startVerse = verseRange[0];
      endVerse = verseRange.length > 1 ? verseRange[1] : startVerse;
    } else if (verseParts.length === 4) {
      // this is likely a multi-book reference, so let's ignore it
      continue;
    } else {
      throw Error(`Error on: ${bref}`);
    }

    if (
      !startBnBookNumber ||
      !startChapter ||
      !startVerse ||
      !endBnBookNumber ||
      !endChapter ||
      !endVerse
    ) {
      throw Error(`Invalid reference: ${bref}`);
    }

    try {
      passages.push({
        startVerse: parseInt(
          `1${pad(startBnBookNumber)}${pad(startChapter)}${pad(startVerse)}`,
        ),
        endVerse: parseInt(
          `1${pad(endBnBookNumber)}${pad(endChapter)}${pad(endVerse)}`,
        ),
      });
    } catch {
      throw Error(`Bad pad: ${bref}`);
    }
  }

  return passages;
}
