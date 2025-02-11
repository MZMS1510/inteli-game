import { Scene } from "phaser";
import { Player } from "../classes/player";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    // Cria uma barra de progresso simples. Aqui fica
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    // A barra de progresso em si
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    // usa o evento "progress" para atualizar a barrinha de progresso
    this.load.on("progress", (progress) => {
      //  Atualiza a barra de progresso (a barra tem 464px de largura, então 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    // Define o caminho base para carregar os arquivos
    this.load.setPath("assets");

    this.player = new Player(this);
    this.player.preload();
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("MainMenu");
  }
}
