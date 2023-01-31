export const setSession = (socket, user) => {
  console.log(socket.handshake)
  socket.handshake.session.user = user;
  socket.handshake.session.save();
}
export const destroySession = (socket) => {
  if (request.session.userdata) {
    delete socket.handshake.session.userdata;
    socket.handshake.session.save();
  }

}