function Stopwatch() {
    let startTime = 0;
    let endTime = 0;
    let running = 0;
    let duration =0;

    this.start = () => {
        if(running)
            throw new Error("Stopwatch has already started");

        running = true;
        startTime = new Date();
    };

    this.stop = () => {
        if(!running)
            throw new Error("Stopwatch is already stopped");

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) /1000;
        duration +=seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, "duration", {
        get: () => {
            return duration;
        }
    });
}


let sw = new Stopwatch;
