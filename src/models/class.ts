export class PlatziClass {

  private name: string;
  private videoId: number;

  constructor( name: string, videoID: number ) {
    this.name = name;
    this.videoId = videoID;
  };

  reproducir() {
    return videoPlay( this.videoId );
  }

  pause() {
    return videoPause( this.videoId );
  }

}


function videoPlay( id: number ) {
  const urlPlay = `http//localhost:200/${id}`;
  return urlPlay;
}


function videoPause( id: number ) {
  const urlPause = 'http//localhost:200' + id;
  return urlPause;
}