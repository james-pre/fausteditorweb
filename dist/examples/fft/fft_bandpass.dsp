import("stdfaust.lib");
fftSize = hslider("fftSize", 1024, 2, 16384, 1); // global variable set by the processor itself
center = hslider("center", 440, 0, 24000, 0.1); // Band-pass center frequency in Hz
width = hslider("width", 100, 0, 12000, 0.1); // Band-pass width in Hz
centerBin = center / (ma.SR / fftSize); // fft bin of the center freq
widthBin = width / (ma.SR / fftSize); // fft bins of band-pass width
fftproc(rIn, iIn, bin) = out with { // 3 inputs for each audio channel: real, imaginary, current bin
    inRange = (bin > centerBin - widthBin) & (bin < centerBin + widthBin); // is the current bin in range?
    out = rIn * inRange, iIn * inRange; // 2 outputs for ifft: real, imaginary
};
process = fftproc;
