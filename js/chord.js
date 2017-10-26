// note frequencies
var C3 = 130.81,
    Db3 = 138.59,
    D3 = 146.83,
    Eb3 = 155.56,
    E3 = 164.81,
    F3 = 174.61,
    Gb3 = 185,
    G3 = 196,
    Ab3 = 207.65,
    A3 = 220,
    Bb3 = 233.08,
    B3 = 246.94,
    C4 = 261.63,
    Db4 = 277.18,
    D4 = 293.66,
    Eb4 = 311.12,
    E4 = 329.63,
    F4 = 349.22,
    Gb4 = 370,
    G4 = 392.00,
    Ab4 = 415.30,
    A4 = 440,
    Bb4 = 466.16,
    B4 = 493.88,
    C5 = 523.25,
    Db5 = 554.35,
    D5 = 587.33,
    Eb5 = 622.25,
    E5 = 659.25,
    F5 = 698.45,
    Gb5 = 739.98,
    G5 = 783.99,
    Ab5 = 830.60,
    A5 = 880,
    Bb5 = 932.32,
    B5 = 987.767,
    C6 = 1046.5;

// chord array
var Gb = [Gb3, Bb3, Db4, Gb4, Gb4, Bb4, Db5, Gb5],
    Db = [F3, Ab3, Db4, F4, F4, Ab4, Db5, F5],
    Ab = [Eb3, Ab3, C4, Eb4, Eb4, Ab4, C5, Eb5],
    Eb = [Eb3, G3, Bb3, Eb4, Eb4, G4, Bb4, Eb5],
    Bb = [F3, Bb3, D4, F4, F4, Bb4, D5, F5],
    F = [F3, A3, C4, F4, F4, A4, C5, F5],
    C = [E3, G3, C4, E4, E4, G4, C5, E5],
    G = [G3, B3, D4, G4, G4, B4, D5, G5],
    D = [Gb3, A3, D4, Gb4, Gb4, A4, D5, Gb5],
    A = [E3, A3, Db4, E4, E4, A4, Db5, E5],
    E = [E3, Ab3, B3, E4, E4, Ab4, B4, E5],
    B = [Gb3, B3, Eb3, Gb4, Gb4, B4, Eb4, Gb5],

    Gb7 = [Gb3, Bb3, Db4, E4, Gb4, Bb4, Db5, E5],
    Db7 = [F3, Ab3, Db4, B3, F4, Ab4, Db5, B4],
    Ab7 = [Gb3, Ab3, C4, Eb4, Gb4, Ab4, C5, Eb5],
    Eb7 = [Eb3, G3, Bb3, Db4, Eb4, G4, Bb4, Db5],
    Bb7 = [Ab3, Bb3, D4, F4, Ab4, Bb4, D5, F5],
    F7 = [F3, A3, C4, Eb4, F4, A4, C5, Eb5],
    C7 = [E3, G3, C4, Bb3, E4, G4, C5, Bb4],
    G7 = [G3, B3, D4, F4, G4, B4, D5, F5],
    D7 = [D3, Gb3, A3, C4, D4, Gb4, A4, C5],
    A7 = [E3, A3, Db4, G3, E4, A4, Db5, G4],
    E7 = [E3, Ab3, B3, D4, E4, Ab4, B4, D5],
    B7 = [Gb3, A3, B3, Eb4, Gb4, A4, B4, Eb4],

    Gbm = [Gb3, A3, Db4, Gb4, Gb4, A4, Db5, Gb5],
    Dbm = [E3, Ab3, Db4, E4, E4, Ab4, Db5, E5],
    Abm = [Eb3, Ab3, B3, Eb4, Eb4, Ab4, B4, Eb5],
    Ebm = [Eb3, Gb3, Bb3, Eb4, Eb4, Gb4, Bb4, Eb5],
    Bbm = [F3, Bb3, Db4, F4, F4, Bb4, Db5, F5],
    Fm = [F3, Ab3, C4, F4, F4, Ab4, C5, F5],
    Cm = [Eb3, G3, C4, Eb4, Eb4, G4, C5, Eb5],
    Gm = [G3, Bb3, D4, G4, G4, Bb4, D5, G5],
    Dm = [F3, A3, D4, F4, F4, A4, D5, F5],
    Am = [E3, A3, C4, E4, E4, A4, C5, E5],
    Em = [E3, G3, B3, E4, E4, G4, B4, E5],
    Bm = [Gb3, B3, D3, Gb4, Gb4, B4, D4, Gb5],

    Dbaug = [Db3, F3, A4, Db4, Db4, F4, A5, Db5],
    Abdim = [F3, Ab3, B3, D4, F4, Ab4, B4, D5],
    Ebaug = [Eb3, G3, B3, Eb4, Eb4, G4, B4, Eb5],
    Bbdim = [E4, G3, Bb3, Db4, E5, G4, Bb4, Db5],
    Bbaug = [Ab3, D4, Gb4, Ab4, Ab4, D5, Gb5, Ab5],
    Cdim = [Eb3, Gb3, A3, C4, Eb4, Gb4, A4, C5],
    Gaug = [G3, B3, Eb4, G4, G4, Bb4, Eb5, G5],
    Ddim = [F3, Ab3, B3, D3, F4, Ab4, B4, D4],
    Aaug = [F3, A3, Db4, F4, F4, A4, Db5, F5],
    Edim = [E3, G3, Bb3, Db4, E4, G4, Bb4, Db5],
    Eaug = [E3, Ab3, C4, E4, E4, Ab4, C5, E5],
    Gbdim = [Gb3, A3, C4, Eb4, Gb4, A4, C5, E5];


// build the chord generator
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var oscillator = [];
var gainNode = [];

// functions
var playChord = function (chord) {
    for (i = 0; i < chord.length; i++) {
        oscillator[i] = context.createOscillator();
        gainNode[i] = context.createGain();

        oscillator[i].connect(gainNode[i]);
        gainNode[i].connect(context.destination);
        if (chord[i] > 600) {
            gainNode[i].gain.value = 0.02;
        } else {
            gainNode[i].gain.value = 0.05;
        }
        oscillator[i].type = 'triangle';
        oscillator[i].frequency.value = chord[i];
        oscillator[i].start(0);
    }
}
var stopChord = function (chord) {
    for (i = 0; i < chord.length; i++) {
        gainNode[i].gain.value = 0;
        oscillator[i].disconnect(0.2);
    }
}

function makeSound(id, chordBlow) {
    var getChordID = document.getElementById(id);

    if (getChordID) {
        getChordID.addEventListener("mousedown", function () {
            playChord(chordBlow)
        });
        getChordID.addEventListener("touchstart", function () {
            playChord(chordBlow)
        });
        getChordID.addEventListener("mouseup", function () {
            stopChord(chordBlow)
        });
        getChordID.addEventListener("touchend", function () {
            stopChord(chordBlow)
        });
        getChordID.addEventListener("mouseout", function () {
            stopChord(chordBlow)
        });
        getChordID.addEventListener("touchmove", function () {
            stopChord(chordBlow)
        });
    }
}

makeSound('Gb7', Gb7);
makeSound('Db7', Db7);
makeSound('Ab7', Ab7);
makeSound('Eb7', Eb7);
makeSound('Bb7', Bb7);
makeSound('F7', F7);
makeSound('C7', C7);
makeSound('G7', G7);
makeSound('D7', D7);
makeSound('A7', A7);
makeSound('E7', E7);
makeSound('B7', B7);

makeSound('Gb', Gb);
makeSound('Db', Db);
makeSound('Ab', Ab);
makeSound('Eb', Eb);
makeSound('Bb', Bb);
makeSound('F', F);
makeSound('C', C);
makeSound('G', G);
makeSound('D', D);
makeSound('A', A);
makeSound('E', E);
makeSound('B', B);

makeSound('Gbm', Gbm);
makeSound('Dbm', Dbm);
makeSound('Abm', Abm);
makeSound('Ebm', Ebm);
makeSound('Bbm', Bbm);
makeSound('Fm', Fm);
makeSound('Cm', Cm);
makeSound('Gm', Gm);
makeSound('Dm', Dm);
makeSound('Am', Am);
makeSound('Em', Em);
makeSound('Bm', Bm);

makeSound('Dbaug', Dbaug);
makeSound('Abdim', Abdim);
makeSound('Ebaug', Ebaug);
makeSound('Bbdim', Bbdim);
makeSound('Bbaug', Bbaug);
makeSound('Cdim', Cdim);
makeSound('Gaug', Gaug);
makeSound('Ddim', Ddim);
makeSound('Aaug', Aaug);
makeSound('Edim', Edim);
makeSound('Eaug', Eaug);
makeSound('Gbdim', Gbdim);