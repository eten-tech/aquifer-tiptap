const bookMapper = (book: string): string => {
    switch (book.toUpperCase()) {
            case 'GEN':
                return '01';
            case 'EXO':
                return '02';
            case 'LEV':
                return '03';
            case 'NUM':
                return '04';
            case 'DEU':
                return '5';
            case 'JOS':
                return '06';
            case 'JDG':
                return '07';
            case 'RUT':
                return '08';
            case '1SA':
                return '09';
            case '2SA':
                return '10';
            case '1KI':
                return '11';
            case '2KI':
                return '12';
            case '1CH':
                return '13';
            case '2CH':
                return '14';
            case 'EZR':
                return '15';
            case 'NEH':
                return '16';
            case 'EST':
                return '17';
            case 'JOB':
                return '18';
            case 'PSA':
                return '19';
            case 'PRO':
                return '20';
            case 'ECC':
                return '21';
            case 'SNG':
                return '22';
            case 'ISA':
                return '23';
            case 'JER':
                return '24';
            case 'LAM':
                return '25';
            case 'EZK':
                return '26';
            case 'DAN':
                return '27';
            case 'HOS':
                return '28';
            case 'JOL':
                return '29';
            case 'AMO':
                return '30';
            case 'OBA':
                return '31';
            case 'JON':
                return '32';
            case 'MIC':
                return '33';
            case 'NAH':
                return '34';
            case 'HAB':
                return '35';
            case 'ZEP':
                return '36';
            case 'HAG':
                return '37';
            case 'ZEC':
                return '38';
            case 'MAL':
                return '39';
            case 'MAT':
                return '41';
            case 'MRK':
                return '42';
            case 'LUK':
                return '43';
            case 'JHN':
                return '44';
            case 'ACT':
                return '45';
            case 'ROM':
                return '46';
            case '1CO':
                return '47';
            case '2CO':
                return '48';
            case 'GAL':
                return '49';
            case 'EPH':
                return '50';
            case 'PHP':
                return '51';
            case 'COL':
                return '52';
            case '1TH':
                return '53';
            case '2TH':
                return '54';
            case '1TI':
                return '55';
            case '2TI':
                return '56';
            case 'TIT':
                return '57';
            case 'PHM':
                return '58';
            case 'HEB':
                return '59';
            case 'JAS':
                return '60';
            case '1PE':
                return '61';
            case '2PE':
                return '62';
            case '1JN':
                return '63';
            case '2JN':
                return '64';
            case '3JN':
                return '65';
            case 'JUD':
                return '66';
            case 'REV':
                return '67';
            case 'TOB':
                return '68';
            case 'JDT':
                return '69';
            case 'ESG':
                return '70';
            case 'WIS':
                return '71';
            case 'SIR':
                return '72';
            case 'BAR':
                return '73';
            case 'BEL':
                return '77';
            case '1MA':
                return '78';
            case '2MA':
                return '79';
            case '3MA':
                return '80';
            case '4MA':
                return '81';
            case '1ES':
                return '82';
            case '2ES':
                return '83';
        default:
            throw Error(`Missing book: ${book}`);
    }
};

const pad = (input: string): string => {
    try {
        return input.padStart(3, '0');
    } catch (e) {
        throw Error(`Bad pad: ${input}`);
    }
};

export const parseVerse = (inputVerse: string) => {
    const bookIdentifier = inputVerse.split(' ')[0];
    let startBnBookNumber = bookMapper(bookIdentifier);
    let endBnBookNumber = startBnBookNumber;
    inputVerse = inputVerse.replace(`${bookIdentifier} `, '');
    const refs = inputVerse.split(',');

    let lastChapter = '0';
    const passages: any[] = [];
    for (const i in refs) {
        const ref = refs[i];

        const verseParts = ref.split(':');
        let startChapter: string;
        let endChapter: string;
        let startVerse: string;
        let endVerse: string;
        let verseRange: string[];

        if (verseParts.length === 4 && verseParts[1].indexOf('-') > -1) {
            let bookSplit = verseParts[1].split('-');
            startChapter = verseParts[0];
            startVerse = bookSplit[0];
            endBnBookNumber = bookMapper(bookSplit[1]);
            endChapter = verseParts[2];
            endVerse = verseParts[3];
        } else if (verseParts.length === 3) {
            startChapter = verseParts[0];
            let verseBookSplit = verseParts[1].split('-');
            startVerse = verseBookSplit[0];
            let bookChapterSplit = verseBookSplit[1].split(' ');
            endBnBookNumber = bookMapper(bookChapterSplit[0]);
            endChapter = bookChapterSplit[1];
            endVerse = verseParts[2];
        } else if (verseParts.length === 1) {
            startChapter = lastChapter;
            endChapter = startChapter;
            verseRange = verseParts[0].split('-');
            startVerse = verseRange[0];
            endVerse = verseRange.length > 1 ? verseRange[1] : startVerse;
        } else if (verseParts.length === 2) {
            startChapter = verseParts[0];
            endChapter = startChapter;
            lastChapter = startChapter;
            verseRange = verseParts[1].split('-');
            startVerse = verseRange[0];
            endVerse = verseRange.length > 1 ? verseRange[1] : startVerse;
        } else {
            throw Error(`Error on: ${inputVerse}`);
        }

        try {
            passages.push({
                startVerse: parseInt(`1${pad(startBnBookNumber)}${pad(startChapter)}${pad(startVerse)}`),
                endVerse: parseInt(`1${pad(endBnBookNumber)}${pad(endChapter)}${pad(endVerse)}`),
            });
        } catch (e) {
            throw Error(`Bad pad: ${inputVerse}`);
        }
    }

    return passages;
};



