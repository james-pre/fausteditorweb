import("stdfaust.lib");

fftSize = hslider("fftSize", 1024, 2, 16384, 1); // global variable set by the processor itself
fftHopSize = hslider("fftHopSize", 1024, 2, 16384, 1); // global variable set by the processor itself
bufferSize = fftSize / 2 + 1; // Bins from 0Hz to Nyquist freq
freqPerBin = ma.SR / fftSize;

cartopol(x, y) = x * x + y * y : sqrt, atan2(y, x); // cartesian to polar
poltocar(r, theta) = r * cos(theta), r * sin(theta); // polar to cartesian

feedback = hslider("feedback", 0, 0, 1, 0.01);
delay = hslider("delay", 1, 0, 10, 0.01);
delayFrames = int(ma.SR * delay / fftHopSize) : max(1);
delaySmps = delayFrames * bufferSize : min(ma.SR * 10);

delayLine = + ~ (@(delaySmps - 1) : *(feedback));

fftproc(rIn, iIn, bin) = out with { // 3 inputs for each audio channel: real, imaginary, current bin
    
    out = (rIn : delayLine), (iIn : delayLine);
};
process = fftproc;
