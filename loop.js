// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending 'setTimout', 'setInterval', 'setImmediate'?
  // Check two: Any pending OS tasks? (Like server linstening to port)
  // Check three: Any pending long running operations? (Like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// the entery body executes in a 'tick'
while(shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called
  //   'setTimout', 'setInterval'

  // 2) Node looks at pendingTasks and pendingOperations and calls relevant callbacks

  // 3) Pause execution. Continue when...
  //   - a new pendingOSTaks is done
  //   - a new pendingOperation is done
  //   - a timer is about to start

  // 4) Look at pendingTimers. Call any 'setImmediate'

  // 5) Handle any 'close' events
}


// exit back to temrinal