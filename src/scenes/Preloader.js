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
    // Quando todos os recursos tiverem sido carregados, muitas vezes vale a pena criar objetos globais aqui que o resto do jogo pode usar.
    // Por exemplo, você pode definir animações globais aqui, para que possamos usá-las em outras cenas.

    this.anims.create({
      key: "idle",
      frameRate: 2,
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 1 }),
      repeat: 400,
    });

    // let player = this.add.sprite(640, 360, "player");

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("Game");
  }
}
