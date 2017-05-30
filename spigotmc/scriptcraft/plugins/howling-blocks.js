var sounds = require('sounds');
function howl(event){
  sounds.entityWolfHurt( event.block );
}
events.blockBreak( howl );