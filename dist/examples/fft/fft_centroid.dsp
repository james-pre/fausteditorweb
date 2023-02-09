import("stdfaust.lib");

fftSize = hslider("fftSize", 1024, 2, 16384, 1); // global variable set by the processor itself
fftHopSize = hslider("fftHopSize", 1024, 2, 16384, 1); // global variable set by the processor itself
bufferSize = fftSize / 2 + 1; // Bins from 0Hz to Nyquist freq
freqPerBin = ma.SR / fftSize;
binToFreq = *(freqPerBin);
freqToBin = /(freqPerBin);

cartopol(x, y) = x * x + y * y : sqrt, atan2(y, x); // cartesian to polar
poltocar(r, theta) = r * cos(theta), r * sin(theta); // polar to cartesian

fftproc(rIn, iIn, bin) = out, out with { // 3 inputs for each audio channel: real, imaginary, current bin
    mag = rIn * rIn + iIn * iIn : sqrt;
    centroid = mag : *(bin) : + ~ *(bin > 0);
    weight = mag : + ~ *(bin > 0);
    out = centroid / weight * freqPerBin : ba.sAndH(bin == bufferSize - 1);
};
process = fftproc;
